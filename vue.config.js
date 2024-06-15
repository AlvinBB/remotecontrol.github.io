const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/remotecontrol.github.io/' // 替换为你的 GitHub 仓库名称
    : '/'
})
