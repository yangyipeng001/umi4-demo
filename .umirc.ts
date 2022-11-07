export default {
  // https://umijs.org/docs/api/config
  npmClient: 'pnpm',

  // 配置全局页面 title，暂时只支持静态的 Title。
  title: 'umi4-demo',

  // 主题
  // theme: { '@primary-color': '#1DA57A' },

  // 插件
  plugins: [
    '@umijs/plugins/dist/antd'
  ],
  antd: {},
};
