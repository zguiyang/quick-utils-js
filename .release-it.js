
const commitTypes = require ('./config/commit-types.js');

const changelogConfig = require ('./config/changelog-config');

module.exports = {
  git: {
    commit: true,
    commitMessage: "ci: 🚀 发布新版本 v${version}"
  },
  npm: {
      publish: false
  },
  gitlab: {
    release: false
  },
  plugins: {
    "@release-it/conventional-changelog": {
      infile: "docs/CHANGELOG.md",
      header: "# 更新日志\n\n",
      ignoreRecommendedBump: true,
      strictSemVer: true,
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
    "before:init" : [ "echo 📦 开始打包项目,准备发布",  "pnpm run build", "echo 打包成功，进行发版操作了..." ],
    "after:release" : [ "echo ✅ 发布完成 ${name}-v${version}" ]
  }
}
