export interface BlobToBase64Result {
  msg: string;
  base64Url: string | ArrayBuffer | null | undefined;
}

export interface Base64ToBlobConfig {
  base64Str: string;
  contentType: string;
  fileName:string;
  sliceSize?: number;
}

export interface Base64ToBlobResult {
  preview: string;
  name: string;
}

/**
 * @desc blob to base64
 * @param { Blob } blob blob file
 * @return { Promise<blobToBase64Result> }
 * **/

export function blobToBase64 ( blob:Blob ): Promise<BlobToBase64Result> {

  return new Promise ( ( resolve ) => {

    const fileReader = new FileReader ();

    fileReader.onload = ( e ) => {

      resolve ( { msg: 'success', base64Url: e.target?.result } );

    };

    // readAsDataURL

    fileReader.readAsDataURL ( blob );

    fileReader.onerror = () => {

      console.error ( 'file error' );

      resolve ( { msg: 'file error', base64Url: null } );

    };

  } );

}

/**
 * base64 转 blob
 * @param { Base64ToBlobConfig } config
 * **/

export function base64ToBlob ( config:Base64ToBlobConfig ): Promise<Base64ToBlobResult> {

  const { base64Str = '', contentType = '', sliceSize = 512, fileName = '' } = config;

  return new Promise ( ( resolve, reject ) => {

    const base64data = base64Str.split ( ',' );

    if ( !base64data ) {

      resolve ( { preview: '', name: '' } );

    }

    // 使用 atob() 方法将数据解码

    let byteCharacters = atob ( base64data ? base64data[ 1 ] : '' );

    let byteArrays:any[] = [];

    for ( let offset = 0; offset < byteCharacters.length; offset += sliceSize ) {

      let slice = byteCharacters.slice ( offset, offset + sliceSize );

      let byteNumbers:number[] = [];

      for ( let i = 0; i < slice.length; i ++ ) {

        byteNumbers.push ( slice.charCodeAt ( i ) );

      }

      // 8 位无符号整数值的类型化数组。内容将初始化为 0。
      // 如果无法分配请求数目的字节，则将引发异常。

      byteArrays.push ( new Uint8Array ( byteNumbers ) );

    }

    let resultBlob = new Blob ( byteArrays, {
      type: contentType,
    } );

    let result = Object.assign ( resultBlob, {

      // 这里一定要处理一下 URL.createObjectURL

      preview: URL.createObjectURL ( resultBlob ),
      name: fileName,
    } );

    resolve ( result );

  } );

}

/**
 * @desc  download blob
 * @param { string } fileName
 * @param { blob } blob
 */

export function downloadFile ( fileName: string, blob:Blob ):void {

  if ( 'download' in document.createElement ( 'a' ) ) {

    const link = document.createElement ( 'a' );

    link.download = fileName;

    link.style.display = 'none';

    link.href = URL.createObjectURL ( blob );

    document.body.appendChild ( link );

    link.click ();

    URL.revokeObjectURL ( link.href );

    document.body.removeChild ( link );

  } else {

    // @ts-ignore

    navigator.msSaveBlob ( blob, fileName );

  }

}