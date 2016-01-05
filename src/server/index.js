'use strict';

let express = require('express');
let app = express();
let path = require('path');
let rootpath = path.join('..', '..');
let config = require(path.join(rootpath, 'gulp.config'))();

//app.set('views', path.join(__dirname, '..', 'views'));
app.set('views', config.views);
app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.render('index', { title: '2d Truss Analyzer Prototype' });
});

app.get('/react', function (req, res) {
    res.render('react', { title: 'React version' });
});

app.get('/ng2', function (req, res) {
    res.render('ng2', { title: 'Angular2 version' });
});

app.listen(3000);
