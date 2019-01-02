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

// 起服务
gulp.task('server', () => {
    return gulp.src('./src')
        .pipe(server({
            port: 3333,
            open: true,
            livereload: true,
        }))
})

// 编译sass 压缩css
// gulp

// 合并js

// 压缩js

// 5 watch 监听js压缩 css编译

// 默认执行任务

// build 任务 js css 生成到dist文件夹