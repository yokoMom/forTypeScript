/**
 * 开发环境的配置文件
 */
module.exports = {
    // 配置 sourceMap
    // cheap：sourceMap 忽略文件列信息
    // module：定位到 ts 源码，而非 loader 转译后的 js 源码
    // eval-sourse-map：将 sourceMap 以 data-url 的形式打包到文件中，其重编译的速度很快，无需担心性能问题
    devtool: 'cheap-module-eval-source-map'
}