import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '搞钱思维',
  description: '从看不见钱，到看懂价值、交易与机会',
  base: '/money-thinking/',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#111827' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '开始阅读', link: '/book/00-prologue' },
      { text: '训练地图', link: '/book/27-money-radar' },
      { text: 'GitHub', link: 'https://github.com/a-persimmons/money-thinking' }
    ],
    sidebar: [
      {
        text: '序章',
        items: [
          { text: '你缺的不是赚钱方法', link: '/book/00-prologue' }
        ]
      },
      {
        text: '第一部 · 先看懂：钱为什么流动',
        collapsed: false,
        items: [
          { text: '01 钱从哪里来', link: '/book/01-money-flow' },
          { text: '02 别人真正买的是什么', link: '/book/02-what-people-buy' },
          { text: '03 你的收入本质在卖什么', link: '/book/03-what-you-sell' }
        ]
      },
      {
        text: '第二部 · 学会看：发现问题',
        collapsed: false,
        items: [
          { text: '04 赚钱的起点不是想法', link: '/book/04-problem-first' },
          { text: '05 怎么发现真实需求', link: '/book/05-find-demand' },
          { text: '06 谁痛不重要，谁付钱才重要', link: '/book/06-who-pays' }
        ]
      },
      {
        text: '第三部 · 学会判断：值不值得做',
        collapsed: false,
        items: [
          { text: '07 不是所有问题都值钱', link: '/book/07-valuable-problem' },
          { text: '08 先看别人现在怎么解决', link: '/book/08-existing-solution' },
          { text: '09 变化就是机会的源头', link: '/book/09-change-is-opportunity' }
        ]
      },
      {
        text: '第四部 · 学会交易：让别人愿意付钱',
        collapsed: true,
        items: [
          { text: '10 有价值不等于能成交', link: '/book/10-value-vs-transaction' },
          { text: '11 怎么让别人相信你', link: '/book/11-build-trust' },
          { text: '12 怎么描述自己的价值', link: '/book/12-express-value' },
          { text: '13 定价不是给时间标价', link: '/book/13-pricing' }
        ]
      },
      {
        text: '第五部 · 第一次真正赚到新钱',
        collapsed: true,
        items: [
          { text: '14 别创业，先完成第一次交易', link: '/book/14-first-new-money' },
          { text: '15 一个最小赚钱闭环', link: '/book/15-minimal-money-loop' },
          { text: '16 第一次尝试为什么会失败', link: '/book/16-first-failure' }
        ]
      },
      {
        text: '第六部 · 从赚钱一次到赚钱能力',
        collapsed: true,
        items: [
          { text: '17 复盘你赚到的每一笔钱', link: '/book/17-income-retrospective' },
          { text: '18 找到自己的赚钱能力栈', link: '/book/18-money-skill-stack' },
          { text: '19 从卖时间到卖专业', link: '/book/19-time-to-expertise' },
          { text: '20 从卖专业到卖结果', link: '/book/20-expertise-to-result' }
        ]
      },
      {
        text: '第七部 · 发现机会并下注',
        collapsed: true,
        items: [
          { text: '21 没人给任务时怎么办', link: '/book/21-no-task' },
          { text: '22 信息不值钱，判断才值钱', link: '/book/22-information-vs-judgment' },
          { text: '23 小下注，而不是豪赌', link: '/book/23-small-bets' }
        ]
      },
      {
        text: '第八部 · 让收入不只依赖时间',
        collapsed: true,
        items: [
          { text: '24 赚钱和财富不是一回事', link: '/book/24-income-vs-wealth' },
          { text: '25 把能力变成资产', link: '/book/25-capability-to-asset' },
          { text: '26 什么东西可以复制', link: '/book/26-what-can-scale' }
        ]
      },
      {
        text: '第九部 · 建立你的赚钱操作系统',
        collapsed: true,
        items: [
          { text: '27 赚钱雷达', link: '/book/27-money-radar' },
          { text: '28 每日商业观察', link: '/book/28-daily-business-observation' },
          { text: '29 每周问题研究', link: '/book/29-weekly-problem-research' },
          { text: '30 每月赚钱实验', link: '/book/30-monthly-money-experiment' },
          { text: '31 建立机会数据库', link: '/book/31-opportunity-database' }
        ]
      },
      {
        text: '终章',
        items: [
          { text: '当你真正拥有搞钱思维以后', link: '/book/32-epilogue' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '本章目录'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/a-persimmons/money-thinking' }
    ]
  }
})
