# husky规范git提交

> husky 可以在git 提交(commit)或推送(push)时前，对拦截命令事件，然后可以插入代码校验指令(如：eslint)

## 快速开始

### 快速安装

```sh
# 安装husky模块，会对git hook进行设置
npm install --save-dev husky
```

### 使用

在项目的package.json加入 precommit和prepush两个脚本命令

- precommit 是git commit 命令执行前执行的命令
- prepush 是git push 命令执行前执行的命令

```json 
{
    "scripts": {
        "precommit": "./node_modules/.bin/eslint .js src/",
        "prepush": "./node_modules/.bin/eslint .js src/",   
    }
}
```

