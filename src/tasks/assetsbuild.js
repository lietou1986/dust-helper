var path = require('path');
var fs = require('fs');
var assetsbuilder = require('../utils/assetsbuilder');

module.exports = function (grunt) {
    grunt.registerTask('assetsbuild', '静态文件编译任务', function (viewsDir, baseDir) {
        if (!viewsDir)
            viewsDir = './views';
        if (!baseDir)
            baseDir = './assets';

        var start = new Date();
        // scan views folder, get the assets map
        var scaned = assetsbuilder.scanDir(viewsDir);
        // check duplicate target
        assetsbuilder.checkTarget(scaned);
        // console.log(scaned);
        grunt.log.writeln('Scaned.' + scaned.length + ' asset(s) will be build.');

        // combo？md5 hash
        var minified = assetsbuilder.minify(baseDir, scaned);
        // console.log(minified);
        grunt.log.writeln('Compile static assets done.Build time ' + (new Date() - start) + ' ms.');

        // write the assets mapping into assets.json
        var assets = path.join(baseDir, 'assets.json');
        grunt.log.writeln('assets.json is here: ' + assets);
        var map = assetsbuilder.map(minified);
        fs.writeFileSync(assets, JSON.stringify(map));

        grunt.log.writeln('write assets.json done. assets.json: ');
        grunt.log.writeln(JSON.stringify(map, null, '  '));
    });
};