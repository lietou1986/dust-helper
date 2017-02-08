var loader = require('loader');
module.exports = function (dust) {

    /**
     * 静态文件加载器
     */
    dust.helpers.include = function (chunk, context, bodies, params) {
        var miniEnabled = !isDebug;
        var file = params.file;
        if (file) {
            var fileArray = file.trim().replaceAll('\r\n', '').split(',');
            if (fileArray.length > 1) {
                //先从缓存读取，然后再输出
            }
        }
        return chunk;
    };

    /**
     * js文件加载器
     */
    dust.helpers.jsloader = function (chunk, context, bodies, params) {
        var miniEnabled = !isDebug;
        var file = params.file;

        if (file) {
            var fileArray = file.trim().replaceAll('\r\n', '').split(',');
            if (fileArray.length > 1) {
                var _ = loader(fileArray[0]);
                fileArray.shift();
                fileArray.forEach(n => {
                    _.js(n);
                });
                chunk.write(_.done(assetsMap, appSettings.staticHost, miniEnabled));
            }
        }

        return chunk;
    };

    /**
        * css文件加载器
        */
    dust.helpers.cssloader = function (chunk, context, bodies, params) {
        var miniEnabled = !isDebug;
        var file = params.file;

        if (file) {
            var fileArray = file.split(',');
            if (fileArray.length > 1) {
                var _ = loader(fileArray[0]);
                fileArray.shift();
                fileArray.forEach(n => {
                    _.css(n);
                });
                chunk.write(_.done(assetsMap, appSettings.staticHost, miniEnabled));
            }
        }

        return chunk;
    };
};