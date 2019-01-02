var fs = require('fs');
var url = require('url');
var path = require('path');

var gulp = require('gulp');
var babel = require('gulp-babel');  //es6->es5
var devSass = require('gulp-sass'); //编译css
var devConcat = require('gulp-concat'); //合并
var server = require('gulp-webserver'); //起服务
var devUglify = require('gulp-uglify'); //压缩js
var cleanCss = require('gulp-clean-css'); //压缩css

