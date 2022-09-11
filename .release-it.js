
const commitTypes = require ('./config/commit-types.js');

const changelogConfig = require ('./config/changelog-config');

module.exports = {
  git: {
    commit: true,
    commitMessage: "ci: 发布新版本 v${version}"
  },
  npm: {
      publish: false
  },
  gitlab: {
    release: false
  },
  plugins: {
    "@release-it/conventional-changelog": {
      infile: "./docs/changelog.md",
      header: "# 更新日志\n\n",
      preset: {
        name: "conventionalcommits",
        types: commitTypes,
      },
      gitRawCommitsOpts: {
        "merges": null
      },
      writerOpts: changelogConfig.writerOpts,

    },
  },
  hooks: {
    "before:init" : [ "echo 开始校验代码","pnpm run test", "pnpm run eslint","echo 📦 开始打包项目,准备发布",  "pnpm run build" ],
    "after:release" : [ "echo 完成 成功发布 ${name} v${version} 到 ${ repo.repository}" ]
  }
}
