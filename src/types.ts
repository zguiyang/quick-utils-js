export type RecordObj<T=any> = Record<any, T>;

declare global {
    // eslint-disable-next-line no-unused-vars
    interface Window {
        mozRequestAnimationFrame: any;
    }
}