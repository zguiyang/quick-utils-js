import { defineConfig } from 'vitepress';

export default defineConfig ( {
  title: 'quick-utils-js',
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: '上次更新',
    nav: [
      { text: '引导', link: '/guide/foreword', activeMatch: '/guide/' },
      { text: 'APIs', link: '/apis/utils/common', activeMatch: '/apis/' },
      { text: 'Changelog', link: '/CHANGELOG.md' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '引导',
          collapsed: false,
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
      ],
      '/apis/': [
        {
          text: '工具方法',
          collapsed: true,
          items: [
            {
              text: '通用方法',
              link: '/apis/utils/common',
            },
            {
              text: '数字操作',
              link: '/apis/utils/number',
            },
            {
              text: '字符串操作',
              link: '/apis/utils/string',
            },
            {
              text: '数组操作',
              link: '/apis/utils/array',
            },
            {
              text: '对象操作',
              link: '/apis/utils/object',
            },
            {
              text: 'Dom操作',
              link: '/apis/utils/dom',
            },
            {
              text: '日期时间',
              link: '/apis/utils/date',
            },
            {
              text: '随机生成',
              link: '/apis/utils/random',
            },
            {
              text: '辅助方法',
              link: '/apis/utils/helper',
            },
          ],
        },
        {
          text: '正则校验',
          collapsed: true,
          items: [
            {
              text: '常用正则',
              link: '/apis/regex/common',
            },
            {
              text: '数字正则',
              link: '/apis/regex/number',
            },
            {
              text: '字符串正则',
              link: '/apis/regex/string',
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
  },
} );
