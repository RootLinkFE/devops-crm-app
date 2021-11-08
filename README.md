# AutoBuild-React-Native

![build workflow](https://github.com/RootLinkFE/AutoBuild-React-Native/actions/workflows/build.yml/badge.svg)

利用 Action 构建私库 gitlab rn app 代码

## 使用技巧

利用 git message 提交信息区分构建不同环境分支代码

建议修改文件 `CHANGELOG.md`

git message 关键词区分说明：

- 不写关键词或有关键词：`[dev]` 时，构建 `dev` 分支
- 包含关键词：`[test]` 时，构建 `test` 分支
- 包含关键词：`[master]` 时，构建 `master` 分支
- 包含关键词：`[prod]` 时，构建 `prod` 分支

构建成功后，项目消息推送群会有如下信息：

![](./msg.png)

> 失败也会有消息推送

## 其他

Github Action 学习文档：https://docs.github.com/en/actions/learn-github-actions
