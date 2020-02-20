# Ant Design Pro

This project is initialized with [Ant Design Pro](https://pro.ant.design). Follow is the quick guide for how to use.

## Environment Prepare

Install `node_modules`:

```bash
npm install
```

or

```bash
yarn
```

## Provided Scripts

Ant Design Pro provides some useful script to help you quick start and build with web project, code style check and test.

Scripts provided in `package.json`. It's safe to modify or add additional script:

### Start project

```bash
npm start
```

### Build project

```bash
npm run build
```

### Check code style

```bash
npm run lint
```

You can also use script to auto fix some lint error:

```bash
npm run lint:fix
```

### Test code

```bash
npm test
```

## More

You can view full document on our [official website](https://pro.ant.design). And welcome any feedback in our [github](https://github.com/ant-design/ant-design-pro).


1 路由的配置在config
2 antd Pro 数据管理层是基于dva的
3 优点：使用脚手架自动创建，方便快捷，对于需求差不多的可以使用，整体使用适合
 缺点：
 1 与mobx结合比较麻烦，内部是redux；
2 如果单纯使用其中某一部分的话，还是使用antd比较好
3 使用脚手架创建的模块就是单纯的antd的
4 整体使用修改起来不方便
