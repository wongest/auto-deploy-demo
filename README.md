
# auto-depoly-demo
* 一个前端自动化部署的demo
* 技术栈:
    * github action
    * docker
    * vue3

## usage
* 只有对`master` `test` `dev`分支更改，才会更新线上环境
* host: 43.139.77.238
* 分支对应端口
  * master: 8000
  * test: 8008
  * dev: 8009

## how it work
1. 上传代码到github后，当github action监听到`push`或者`pull requests`事件后，就会执行下面的逻辑
2. 打包vue项目
3. 制作镜像
4. 上传镜像到阿里云
5. 根据分支，若当前分支为**部署分支**，就会在远程服务器更新**docker container**

## 后续优化
* 【已完成】可以在前端页面区分环境（分支）https://github.com/wongest/auto-deploy-demo/issues/4
