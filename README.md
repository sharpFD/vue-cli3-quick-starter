# vue-cli3-quick-starter

> 基于vue-cli3创建的项目快速启动摸板，参考目前项目主流结构，快速开发企业级前端项目。

## 整合
- Element UI
- Axios
- babel-polyfill
- js-cookie
- vue-router
- vuex

## 项目结构

```
│  .env.alpha   测试环境配置文件
│  .env.local   本地环境配置文件
│  .env.prod    正式环境配置文件
│  .gitignore
│  babel.config.js
│  package-lock.json
│  package.json
│  README.md
│  vue.config.js    vuecli3新增，可配置webpack
│  
├─public
│      favicon.ico
│      index.html
│      
└─src
    │  App.vue
    │  element.js
    │  main.js     // 程序入口
    │  role.js     // 权限相关文件
    │  
    ├─api           // 接口相关配置文件
    │  │  index.js
    │  │  
    │  ├─auth        // 模块一接口
    │  │      info.js
    │  │      
    │  ├─chart       // 模块二接口
    │  │      example.js
    │  │      
    │  └─info        // 模块三接口
    │          info.js
    │          
    ├─assets         // 静态文件存放地址
    │  │  logo.png
    │  │  
    │  ├─error
    │  │      403-780-780.png
    │  │      404-260-260.png
    │  │      500-260-260.png
    │  │      
    │  └─iconfont
    │          iconfont.css
    │          
    ├─components    // 组件存放地址
    ├─config        // 全局配置文件
    │      install.js
    │      mixins.js
    │      
    ├─filtres       // 全局过滤器
    │      index.js
    │      
    ├─router        // 路由
    │      index.js
    │      
    ├─store         // vuex
    │  │  actions.js
    │  │  getters.js
    │  │  index.js
    │  │  mutation-types.js
    │  │  
    │  └─modules
    │          admin.js
    │          app.js
    │          
    ├─styles       // 样式文件
    │      base.scss
    │      mixin.scss
    │      
    ├─utils       // 工具类
    │      auth.js
    │      axios.js
    │      haiZiToPinYin.js
    │      store.js
    │      
    └─views     // 页面
        │  AuthPage.vue
        │  DemoPage.vue
        │  
        └─error
                err403.vue
                err404.vue
                err500.vue
                
```

## Features

- **分模块全局注入API**
  - `src/api`目录下区分不同模块的api接口，`src/config/install`对其进行注入vue原型，调用方法：
     `this.$api.apiName(params).then(successCallback).catch(failCallBack)`
     
  
- **页面权限不同粒度把控 【暂未完成】**
  - `main.js`中所引入的role.js表示开启权限控制（不需要权限控制请手动注释此行），在router.js中，分为`constantRouterMap`和`asyncRouterMap`，不进行权限控制的页面路由，配置在`constantRouterMap`反之则配置到`asyncRouterMap`中；
  - 在`role.js`中改变变量`AuthVerify`的值，可以改变系统权限管控粒度，`AUTH_VERIFY_PAGE`代表页面级别控制，需要在`asyncRouterMap`的`meta`信息中配置`auth`属性，同时需要后台给予一个当前用户所有用权限的路由List，系统对对其进行自动拦截；`AUTH_VERIFY_ROLE`代表角色级别控制，需要在`asyncRouterMap`的`meta`信息中配置`role`属性和不同页面允许访问的角色类型，并同时要求后端给予一个当前用户的角色类型List。
  
- **全局过滤器、CSS、mixins**
  - `src/config`目录下放置着全局[过滤器](https://cn.vuejs.org/v2/guide/filters.html#ad)以及[Mixins](https://cn.vuejs.org/v2/guide/mixins.html#%E5%85%A8%E5%B1%80%E6%B7%B7%E5%85%A5)混入文件,配合vuex和mixin，可以很大程度上减少vuex的引入代码。
  - `src/styles`目录下放置着全局CSS,可替换项目重任意位置的CSS样式。
  
- **分模块VUEX引入**
  - `src/store`目录下存放着vuex相关文件，可在mixin中统一引入后，在需要的组件中混入。
  
- **ErrorPage、分环境配置文件、常见目录别名、iconfont**
  - `src/views/error`目录下存放常见404，403，500页面。
  - `.env.local`、`.env.alpha`、`.env.prod` 区分不同环境，自动注入axios的baseurl
  - 在`vue.config.js`文件中配置了不同目录的别名：
  
符号  | 代表目录 |
--------- | --------|
@  | src |
assets  | src/assets |
components  | src/components |
layout  | src/layout |
views  | src/views |
   - 在引入组件时，例如需要引入`src/views/AuthPage`，不需要 `import AuthPage from src/views/AuthPage`，只需要`import AuthPage from views/AuthPage`，其中`views`代表`src/views`
   
  
## Prerequisites
```
Node.js >= 6

Vue >= 3
```
## Getting Started
```
# 安装依赖
npm install 

# 本地测试
npm run serve 

# 测试环境打包
npm run alpha

# 正式环境打包
npm run build
```

## Partners
>
<br/>
<a href="https://jenkins.io/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Jenkins_logo_with_title.svg/375px-Jenkins_logo_with_title.svg.png" width="130" height="40"/></a>



# License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/content/LICENSE) 

Copyright (c) 2018-2019 [wuyungen1996](https://github.com/wuyungen1996)

# Based

> The project is based on [vue-admin-html](https://github.com/lmxdawn/vue-admin-html)  
Author:[@lmxdawn](https://github.com/lmxdawn)
