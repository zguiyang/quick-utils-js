const commitTypes = require ('./config/commit-types.js');

module.exports = {
  // type 类型
  types: commitTypes,
  // 覆写提示的信息
  messages: {
    type: "请确保你的提交遵循了原子提交规范！\n选择你要提交的类型:",
    scope: '\n选择一个 scope (可选):',
    // 选择 scope: custom 时会出下面的提示
    customScope: '请输入自定义的 scope:',
    subject: '填写一个简短精炼的描述语句:\n',
    body: '添加一个更加详细的描述，可以附上新增功能的描述或 bug 链接、截图链接 (可选)。使用 "|" 换行:\n',
    breaking: '列举非兼容性重大的变更 (可选):\n',
    footer: '列举出所有变更的 ISSUES CLOSED  (可选)。 例如.: #31, #34:\n',
    confirmCommit: '确认提交?',
  },
  allowBreakingChanges: ['feat', 'fix', 'refactor', 'revert', 'perf', 'ui'],

  // subject 限制长度
  subjectLimit: 100,
};
