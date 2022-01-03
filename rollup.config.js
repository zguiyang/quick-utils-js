// typescript支持
import typescript from "rollup-plugin-typescript2";
import sourceMaps from "rollup-plugin-sourcemaps";

// 清理文件
import clear from "rollup-plugin-clear";

// 执行进度
import progress from "rollup-plugin-progress";

// 去除不需要打包的外部依赖
import externals from 'rollup-plugin-node-externals';

// 代码压缩
import { terser } from 'rollup-plugin-terser';

// 查看构建后的文件大小
import filesize from 'rollup-plugin-filesize';

// 处理项目中引入第三方资源包

import resolve from 'rollup-plugin-node-resolve';

// 开发服务

import serve from 'rollup-plugin-serve'

const isProd = process.env.NODE_ENV === 'production';

export default {
  input: "./src/main.ts",
  plugins: [
    typescript({
      exclude: "node_modules/**",
      typescript: require("typescript")
    }),
    resolve(),
    !isProd && sourceMaps(),
    isProd && clear({
      targets: ["dist"],
      watch: true,
    }),
    progress(),
    externals(),
    isProd && terser(),
    filesize(),
    serve({
      port: 3000,
      contentBase:'', // 表示起的服务是在根目录下
      openPage: './public/index.html' , // 打开的是哪个文件
      open: false // 默认打开浏览器
    })
  ],
  output: [
    // // commonjs
    // {
    //   format: "cjs",
    //   file: "build/index.cjs.js"
    // },
    // //  es module
    {
      format: "es",
      file: "dist/index.esm.js"
    },
    // umd
    {
      file: `./dist/index.js`,
      format: 'umd',
      name: 'index'
    }
  ]
}