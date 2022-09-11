import { defineConfig } from 'vitepress';

export default defineConfig ( {
  title: 'quick-utils-js',

  // locales: {
  //     '/': {
  //         lang: 'en-US',
  //         description: 'A tool library that integrates common regular check expressions.',
  //         selectText: 'English',
  //     },
  //     '/zh_CN/': {
  //         lang: 'zh-CN',
  //         title: 'Regex-utils-js',
  //         description: '一个集成了常用正则校验表达式的工具库',
  //         selectText: '简体中文',
  //     },
  // },

  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: '上次更新',
    nav: [
      { text: '引导', link: '/guide/foreword', activeMatch: '/guide/' },
      { text: '更新日志', link: '/changelog.md' },
      { text: '工具推荐', items: [ { text: 'regex-utils-js', link: 'http://regex.utils.zhaoguiyang.cn' } ] },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '引导',
          collapsed: true,
          collapsible: false,
          items: [
            {
              text: '前言',
              link: '/guide/foreword',
            },
            {
              text: '使用指南',
              link: '/guide/getting-started',
            },
          ],
        },
        {
          text: 'API',
          collapsed: true,
          collapsible: false,
          items: [
            {
              text: '通用方法',
              link: '/guide/apis/common',
            },
            {
              text: '数字操作',
              link: '/guide/apis/number',
            },
            {
              text: '字符串操作',
              link: '/guide/apis/string',
            },
            {
              text: '数组操作',
              link: '/guide/apis/array',
            },
            {
              text: '对象操作',
              link: '/guide/apis/object',
            },
            {
              text: 'Dom操作',
              link: '/guide/apis/dom',
            },
            {
              text: '日期时间',
              link: '/guide/apis/date',
            },
            {
              text: '随机生成',
              link: '/guide/apis/random',
            },
            {
              text: '辅助方法',
              link: '/guide/apis/helper',
            },
          ],
        },
      ],
    },
    editLink: {
      pattern: 'https://github.com/zguiyang/quick-utils-js/tree/main/docs/:path',
      text: '编辑此页',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zguiyang/quick-utils-js' },
    ],
    algolia: {
      appId: '',
      apiKey: '',
      indexName: '',
    },
  },
} );