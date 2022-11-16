# umi4-demo
https://umijs.org/

## 项目初始化
```bash
pnpm dev
```

## 安装antd组件库
https://blog.csdn.net/catalike/article/details/126391634
```bash
pnpm i --save-dev @umijs/plugins

pnpm i antd
```

## 源码文件
- `core` 提供了一套插件的注册及管理机制，而Umi的核心功能部署都靠`preset-umi`来实现。
- `preset-umi` 其实就是一个内置的插件集。
- `renderer-react` 提供路由机制，主要基于react-router6，另外提供了widthRouter等API。
- `plugins` 内置插件支持，如redux,react-redux,dva,qiankun等。
- `create-umi` 创建umi项目的命令，提供tpl。
- `max` max项目支持，默认开启权限等插件。
- `mfsu` mfsu是一种基于webpack5新特性Module Federation的打包提速方案。核心原理是将应用的依赖构建为一个Module Federation的remote应用，以免去应用热更新时对依赖的编译。