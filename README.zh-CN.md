<p align="center">
  <h1>使用文档</h1>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/bujidao/pks-cli/master/pks-logo.png" max-height="500px" />
</p>

  [English](https://raw.githubusercontent.com/bujidao/pks-cli/master/README.md) | 简体中文

  <img alt="npm" src="https://img.shields.io/npm/v/pks-cli">
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/pks-cli">
  <img alt="NPM" src="https://img.shields.io/npm/l/pks-cli">
  <img alt="npm collaborators" src="https://img.shields.io/npm/collaborators/pks-cli">
  <img alt="node-current" src="https://img.shields.io/node/v/pks-cli">

## 描述

将多个模块化的js/ts文件，打包为一个js文件，并且这个文件可以直接被html直接引入

当前主流项目多采用vue、reace等开发，由于这些集成度比较高，所以模块化编辑的时候，使用者可以不需要考虑其他因素，只需要专注自己的业务即可。

但是，实际项目中，可能并不是所有的项目都需要用到vue/react等，也可能只是通过html的script标签的方式进行引入，然而，html并不支持import/require的语法

因此，此模块主要致力于：<strong>普通项目采用模块化编辑的时候，将模块化的文件打包为统一的出口文件，并可以通过html的script标签直接调用和使用</strong>

## 安装

* npm 安装

  ```bash
  npm install pks-cli
  ```

* yarn 安装

  ```bash
  yarn add pks-cli
  ```

### yarn 安装

## 构建项目

```bash
# 构建测试版
npm run dev

# 构建正式版
npm run build

```

## 目录结构

```
You Project
├─build                   // 配置目录
│   ├─webpack.common.js   // 通用配置
│   ├─webpack.dev.js      // 开发模式配置
│   └─webpack.prod.js     // 生产模式配置
├─dist                    // script打包后的发布目录
├─examples                // 开发时候的实时预览效果，可以直接在html里面访问
├─publish
├─src                     // 原始ts/js编辑目录
└─test
```

## 使用

``` bash
# script
<script src="./js/pks-cli-alpha.js"></script>
<script>
bujidao.jsFile.jsFunc('JS有一直小毛驴');
// Js say: this is a function, i just want to tell you: JS有一直小毛驴

bujidao.tsFile.tsFunc('ts has a maolv')
// Ts say: this is a function, i just want to tell you: ts has a maolv
</script>
```

注：代码中的`bujidao`是框架默认的`library`名称，通过这个名称引入你的模块。

当然你也可以更改为你自己的`library`，比如更改为`mylib`，具体操作<a href="#使用自定义的library名称">详见</a>

### 使用自定义的`library`名称

项目默认的`library`名称是`bujidao`，你可能更喜欢用自己的`library`名称，比如你想用`mylib`作为你的项目名称

具体操作：

`library`目录：`build/webpack.prod.js`

将`output/library`的值更改为`mylib`即可

然后你的项目(html->script)中，打印一下，即可看到你全部定义的模块

```bash
console.log(mylib)
```

### 使用自定义输出文件名

项目默认的输出名称是：
* 开发模式：`pks-cli-alpha.js`
* 生产模式：`pks-cli-1.0.0.js`

实际项目中，你可能更喜欢自己的名称，比如你想使用`myscript`作为你的名称

具体操作：

项目根目录`package.json`，将`name`修改为`myscript`即可

## License

Copyright (c) 2017-present Alex Ceng
