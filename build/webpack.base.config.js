/**
 * 公共环境的配置
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 指定入口文件
    entry: './src/index.ts',
    // 输出
    output: {
        filename: 'app.js'
    },
    resolve: {
        // 指定扩展名
        extensions: ['.js', '.ts', '.tsx'],
    },
    module: {
        // 引入了新的文件，就需要安装相应的 loader
        rules: [
            // 安装 ts-loader，并再次本地安装 typescript
            // npm i ts-loader typescript -D
            {
                test: /\.tsx?$/i,
                use: [{
                    loader: 'ts-loader'
                }],
                exclude: /node_modules/
            }
        ]
    },
    // 插件都需要安装 npm -i
    plugins: [
        // HtmlWebpackPlugin，通过一个模版(src/tpl/index.html)生成网站的首页，并把输出文件自动嵌入该首页文件中
        // npm i html-webpack-plugin -D
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        }),
    ],

}
