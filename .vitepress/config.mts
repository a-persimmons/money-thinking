import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '搞钱思维',
  description: '没人教你，就从这里学。一步一步，练出自己的赚钱能力。',
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
      { text: '开始阅读', link: '/book/00-preface' },
      { text: '第一次交易', link: '/book/17-first-outreach' },
      { text: '赚钱雷达', link: '/book/32-money-radar' },
      { text: 'GitHub', link: 'https://github.com/a-persimmons/money-thinking' }
    ],
    sidebar: [
      {
        text: '序章',
        items: [
          { text: '没人教你，就从这里学', link: '/book/00-preface' }
        ]
      },
      {
        text: '第一部 · 先学会看钱',
        collapsed: false,
        items: [
          { text: '01 你不是不努力，只是没学过交易', link: '/book/01-not-lazy' },
          { text: '02 一笔钱是怎么流动的', link: '/book/02-money-flow' },
          { text: '03 别人为什么愿意付钱', link: '/book/03-why-pay' },
          { text: '04 你现在靠什么被市场付钱', link: '/book/04-what-you-sell' },
          { text: '05 第一次练眼睛：看三个生意', link: '/book/05-business-eyes' },
          { text: '✓ 师傅检查一', link: '/book/check-01' }
        ]
      },
      {
        text: '第二部 · 学会发现值得解决的问题',
        collapsed: false,
        items: [
          { text: '06 先别想产品，先看问题', link: '/book/06-problem-before-product' },
          { text: '07 抱怨、麻烦和真实需求', link: '/book/07-complaint-vs-demand' },
          { text: '08 谁在痛，谁在用，谁在付钱', link: '/book/08-user-payer' },
          { text: '09 先研究别人现在怎么过', link: '/book/09-existing-way' },
          { text: '10 什么样的问题更值得做', link: '/book/10-valuable-problem' },
          { text: '11 变化会让旧问题长出新机会', link: '/book/11-change-opportunity' },
          { text: '✓ 师傅检查二', link: '/book/check-02' }
        ]
      },
      {
        text: '第三部 · 找到你能卖的第一样东西',
        collapsed: false,
        items: [
          { text: '12 我没什么厉害的，能卖什么', link: '/book/12-what-can-i-sell' },
          { text: '13 从经历里挖出可卖能力', link: '/book/13-mine-your-experience' },
          { text: '14 把技能翻译成结果', link: '/book/14-speak-in-results' },
          { text: '15 我凭什么收费', link: '/book/15-deserve-to-charge' },
          { text: '16 第一次找真实的人聊问题', link: '/book/16-first-interview' },
          { text: '✓ 师傅检查三', link: '/book/check-03' }
        ]
      },
      {
        text: '第四部 · 跑通第一笔独立交易',
        collapsed: false,
        items: [
          { text: '17 第一次开口，先别推销', link: '/book/17-first-outreach' },
          { text: '18 给出一个小到能交付的方案', link: '/book/18-small-offer' },
          { text: '19 第一次报价', link: '/book/19-first-price' },
          { text: '20 被拒绝、嫌贵和没人回复', link: '/book/20-rejection' },
          { text: '21 收钱之后才进入难的部分', link: '/book/21-after-payment' },
          { text: '22 阿成的第一笔 500 元', link: '/book/22-acheng-first-500' },
          { text: '✓ 师傅检查四', link: '/book/check-04' }
        ]
      },
      {
        text: '第五部 · 从赚到一次，到长出能力',
        collapsed: true,
        items: [
          { text: '23 赚到钱以后，先复盘', link: '/book/23-review-first-income' },
          { text: '24 为什么是你赚到了这笔钱', link: '/book/24-why-you' },
          { text: '25 从卖时间到卖专业', link: '/book/25-time-to-expertise' },
          { text: '26 从卖专业到卖结果', link: '/book/26-expertise-to-result' },
          { text: '27 把做过的东西留下来', link: '/book/27-leave-assets' },
          { text: '28 让第二次不要再从零开始', link: '/book/28-second-time' },
          { text: '✓ 师傅检查五', link: '/book/check-05' }
        ]
      },
      {
        text: '第六部 · 学会自己找机会',
        collapsed: true,
        items: [
          { text: '29 没人给你任务时怎么办', link: '/book/29-no-task' },
          { text: '30 信息很多，怎么形成判断', link: '/book/30-judgment' },
          { text: '31 小下注：别豪赌，先买信息', link: '/book/31-small-bets' },
          { text: '32 建立自己的赚钱雷达', link: '/book/32-money-radar' },
          { text: '33 每周研究一个问题', link: '/book/33-weekly-research' },
          { text: '34 每月做一次真实交易实验', link: '/book/34-monthly-experiment' }
        ]
      },
      {
        text: '第七部 · 给自己多一条经济出路',
        collapsed: true,
        items: [
          { text: '35 高收入和安全感不是一回事', link: '/book/35-income-safety' },
          { text: '36 从单一工资到收入结构', link: '/book/36-income-structure' },
          { text: '37 资产、杠杆和可复制', link: '/book/37-assets-leverage' },
          { text: '38 你不必辞职创业', link: '/book/38-no-need-to-quit' },
          { text: '39 家里没人支持怎么办', link: '/book/39-family-resistance' },
          { text: '40 你真正要积累的是选择权', link: '/book/40-choice' }
        ]
      },
      {
        text: '终章',
        items: [
          { text: '你还没有逆袭，只是开始握住方向盘', link: '/book/41-epilogue' }
        ]
      }
    ],
    search: { provider: 'local' },
    outline: { level: [2, 3], label: '本章目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新于' },
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
