
const commitTypes = require ('./config/commit-types.js');

const changelogConfig = require ('./config/changelog-config');

module.exports = {
  git: {
    commit: true,
    commitMessage: "ci: 🚀 release v${version}"
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
      header: "# Changelog\n\n",
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
    "before:init" : [
      "pnpm run test",
      "pnpm run clean:dist",
      "pnpm run build",
    ],
    "after:release" : [ "echo ✅ 发布完成 ${name}-v${version}" ]
  }
}
