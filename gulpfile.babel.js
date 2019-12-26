import gulp from 'gulp';
import webpackConfig from './webpack.config';
import webpack from 'webpack-stream';
import browserSync from 'browser-sync';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import eslint from 'gulp-eslint';
import webserver from 'gulp-webserver';

//gulpタスクの生成
gulp.task('build', function(cb){
  gulp.src('src/js/app.js')
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/js'));
  cb();
});

gulp.task('browser-sync', function(cb){
  browserSync.init({
    server: {
      baseDir: "./", //対象ディレクトリ
      index: "index.html" //indexファイル名
    }
  });
  cb();
});

gulp.task('bs-reload', function(cb){
  browserSync.reload();
  cb();
});

//webローカルサーバーを立ち上げる
gulp.task("web", function(cb) {
  gulp.src('dist')
    .pipe(webserver({
      livereload: true,
      open: true,
      port: 5000
    }));
  cb();
});





gulp.task('eslint', function(cb){
  gulp.src('src/**/*.js') //lintのチェック先を指定
    .pipe(plumber({
      //エラーをハンドル
      errorHandler: function(error){
        const taskName = 'eslint';
        const title = '[task]' + taskName + ' ' + error.plugin;
        const errorMsg = 'error: '+ error.message;
        //ターミナルにエラーを通知
        console.log(title + '\n' + errorMsg);
        //エラーを通知
        notify.onError({
          title: title,
          message: errorMsg,
          time: 3000
        });
      }
    }))
    .pipe(eslint({useEslintrc: true})) //.eslintrcを参照
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
    .pipe(plumber.stop());
  cb();
});

//Gulpを使ったファイルの監視
gulp.task('default', gulp.series(gulp.parallel('eslint', 'build', 'browser-sync'), function(cb){
  gulp.watch('./src/**/*.js', gulp.series('build'));
  gulp.watch('./*.html', gulp.series('bs-reload'));
  gulp.watch('./dist/**/*.+(js|css)', gulp.series('bs-reload'));
  gulp.watch('./src/**/*.js', gulp.series('eslint'));
  cb();
}));
