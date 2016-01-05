'use strict';

let path = require('path');

module.exports = function () {
  
    let root = '.';
    let src = path.join(root, 'src');
    let build = path.join(root, 'build');
    
    let views = path.join(root, 'views');

    let serverSrc = path.join(src, 'server');
    let serverBuild = path.join(build, 'server');

    let config = {
        // File paths
        root,
        build,
        serverSrc: path.join(serverSrc, '**', '*.js'),
        serverBuild,
        views,
        // Bower and NPM location
        packages: [
            './package.json'
        ],
    };

    return config;
}
