/**
 * 生产环境的配置文件
 */

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    output: {
        // path: 'output',
    },
    plugins: [
        // 每次成功构建之后，清空 dist 目录，防止目录留存了很多已无用的哈希文件
        // npm i clean-webpack-plugin -D
        new CleanWebpackPlugin()
    ]
}