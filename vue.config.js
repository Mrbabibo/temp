const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let glob = require('glob');
const hashes={
    js:"ccb53f2d",
    jsChunk:"391513d8",
    css:"8f100eae",
    cssChunk:"6dc57fe0",
}

//配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath,publicPath) {
    let entries = {}, tmp, htmls = {},publicTemp;
    // 读取src/pages/**/底下所有的html文件
    glob.sync(publicPath+'html').forEach(function(entry) {
      
        publicTemp = entry.slice(2);
        var tmpcurrent = publicTemp.split('/').splice(-3);
      
        htmls[tmpcurrent[1].split('.')[0]] = publicTemp
      
    })

    // 读取src/pages/**/底下所有的js文件
    glob.sync(globPath+'js').forEach(function(entry) {
        tmp = entry.split('/').splice(-3);
     
        entries[tmp[1]] = {
            entry,
            template: htmls[tmp[1]] ? htmls[tmp[1]] : 'index.html', //  当前目录没有有html则以共用的public/index.html作为模板
            filename:tmp[1] + '.html',   //  以文件夹名称.html作为访问地址
            // chunks: [
            //      tmp[1], //注意：这个是页面名称的chunk,下面的chunk名称需要对呀splitChunk对应的名称
            //     "chunk-vendors", //这是node_modules下的chunk
            //     "chunk-common", //这是admin和Index入口公用的chunk
            //     "chunk-iview" //index的单独chunk
            // ]
        };
    });
    return entries;
}
let pages = getEntry('./src/pages/**/*.','./public/*.');

module.exports = {
    /** 防止eslint乱报错**/
    lintOnSave: false, // 关闭eslint
    runtimeCompiler: true,
    publicPath: './',

    // build时构建文件的目录 构建时传入 --no-clean 可关闭该行为
    outputDir: 'dist',

    // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: '',

    // 默认在生成的静态资源文件名中包含hash以控制缓存
    filenameHashing: false,
    productionSourceMap: false,

    chainWebpack: config => {
       
        //删除预加载资源
        config.plugins.delete('prefetch')
        config.plugins.delete('preload') 
        config.module
        .rule('images')
        .use('url-loader')
        .loader('url-loader')
        .tap(options => Object.assign(options, { limit: 20000 }))
      },
    configureWebpack: config => {
        // if (process.env.NODE_ENV === 'production') {
            return {
                output: { // js添加时间戳
                    filename: `js/[name].${hashes.js}.js`,
                    chunkFilename: `js/[name].${hashes.jsChunk}.js`,
                },
                resolve: {
                    alias: {
                        '@': path.resolve(__dirname, './src'),
                        '@i': path.resolve(__dirname, './src/assets'),
                    }
                },
                optimization: {
                    minimizer: [
                        new UglifyJsPlugin({
                            uglifyOptions: {
                                warnings: false,
                                compress: {
                                    pure_funcs: ['console.log','console.debug']//移除console
                                }
                            }
                        })
                    ]
                },
                // plugins: [
                //     new CompressionPlugin({
                //         algorithm: 'gzip',
                //         test: /\.(js|css)$/,// 匹配文件名
                //         threshold: 1024, // 对超过10k的数据压缩
                //         deleteOriginalAssets: false, // 不删除源文件
                //         minRatio: 0.8 // 压缩比
                //     })
                // ]
            }
        // }
    },
  
        devServer: {
            host: '0.0.0.0',
            /** devServer监听的端口**/
            port: 8080,
            https: false,
            hotOnly: false,
            /** 配置代理**/
            proxy: { 
                '/a/dpk/prov/': {
                  target: 'http://127.0.0.1:8072/',
                  ws: true,
                  changeOrigin: true,
                //   pathRewrite: {
                //     '^/a/dpk/prov/': '/a/dpk/prov/'
                //   }
                }
              },
          
        },
        // transpileDependencies: [
        //     'vue-echarts',
        //     'resize-detector'
        // ],
        css:{
            extract: {//css添加时间戳
                filename: `css/[name].${hashes.css}.css`,
                chunkFilename: `css/[name].${hashes.cssChunk}.css`,
            },
        },
    
    }
