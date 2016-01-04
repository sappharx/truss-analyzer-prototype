'use strict';


module.exports = function () {
  
    let root = './';

    let config = {
        // File paths
        root,
        // Bower and NPM location
        packages: [
            './package.json'
        ],
    };

    return config;
}
