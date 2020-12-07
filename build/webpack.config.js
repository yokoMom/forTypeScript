/**
 * 所有配置文件的入口
 */

// webpackMerge 插件：把两个配置文件合并
// npm i webpack-merge -D
const { merge } = require('webpack-merge')
var baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const proConfig = require('./webpack.pro.config')

// let config = process.env.NODE_ENV === 'development' ? devConfig : proConfig

module.exports = (env, argv) => {
    let config = argv.mode === 'development' ? devConfig : proConfig;
    return merge(baseConfig, config);
};