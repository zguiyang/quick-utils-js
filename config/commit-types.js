module.exports = [
  {
    label: '✨ 新功能',
    value: 'feat',
    name: '✨ feat: 新增产品功能',
  },
  {
    label: '🐛 Bug 修复',
    value: 'fix',
    name: '🐛 fix: 修复 bug',
  },
  {
    label: '📝 文档修改',
    value: 'docs',
    name: '📝 docs: 文档的变更',
    hidden: true,
  },
  {
    label: '💄风格变更',
    value: 'style',
    name: '💄 style: 如删除空格、格式化、去掉末尾分号等',
    hidden: true,
  },
  {
    label: '♻️ 代码重构',
    value: 'refactor',
    name: '♻️ refactor: 重构代码',
    hidden: true,
  },
  {
    label: '🎨 视图变更',
    value: 'ui',
    name: '🎨  ui: 页面布局或视图样式变动',
  },
  {
    label: '⬆ 更新代码',
    value: 'upd',
    name: '⬆️ upd: 既不是新增功能，也不是修复bug，更新部分功能',
    hidden: true,
  },
  {
    label: '⚡ 性能优化',
    value: 'perf',
    name: '⚡️ perf: 性能优化',
  },
  {
    label: '✅ 测试用例',
    value: 'test',
    name: '✅ test: 添加、修改测试用例',
    hidden: true,
  },
  {
    label: '📦  打包部署',
    value: 'build',
    name: '📦 build:    构建流程、外部依赖变更，比如升级 npm 包、修改 webpack 配置',
    hidden: true,
  },
  {
    label: '🚀 自动化',
    value: 'ci',
    name: '🚀 ci: 修改了 CI 配置、脚本',
    hidden: true,
  },
  {
    label: '🎫 辅助工具',
    value: 'chore',
    name: '🎫 chore: 对构建过程或辅助工具和库的更改,不影响源文件、测试用例的其他操作',
    hidden: true,
  },
  {
    label: '⏪ 回滚功能或版本',
    value: 'revert',
    name: '⏪ revert: 回滚 commit, 或者回滚你的功能到上一个版本',
  },
];
