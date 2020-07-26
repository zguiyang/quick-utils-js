// typescript支持
import typescript from "rollup-plugin-typescript";
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

const isProd = process.env.NODE_ENV === 'production';

export default {
  input: "./src/index.ts",
  plugins: [
    typescript({
      exclude: "node_modules/**",
      typescript: require("typescript")
    }),
    sourceMaps(),
    clear({
      targets: ["build"],
      watch: true,
    }),
    progress(),
    externals(),
    isProd && terser(),
    filesize(),
  ],
  output: [
    // commonjs
    {
      format: "cjs",
      file: "build/index.cjs.js"
    },
    //  es module
    {
      format: "es",
      file: "build/index.esm.js"
    },
    // umd
    {
      file: `./build/index.js`,
      format: 'umd',
      name: 'index'
    }
  ]
}