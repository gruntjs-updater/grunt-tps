# grunt-tps

> Taobao Pictures System grunt plugin

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-tps --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-tps');
```

## The "tps" task

### Base

本插件基于[tpsmate](https://github.com/sodabiscuit/tpsmate)

只配置一次即可

### Options

#### options.argv
Type: `String`
Default value: `--inplace`

tpsmate的参数

- --inpace 对原文件做替换操作
- --force 强制上传任意文件中的内联样式背景图片或者src属性，导出或显示替换后的文件
- --no-log 不输出csv
- --no-interactive 不在终端输出上传信息

### Usage Examples

### normal

```js
grunt.initConfig({
  tps: {
    options: {
        argv: "--inplace"
    }
    all: ['test.css', 'lib/**/*.css', 'test/**/*.scss','index.htm']
  }
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

2013-05-29   v0.2.0   Remove Options.pythonPath

2013-05-28   v0.1.3   Remove Options.tpsmatePath

2013-05-28   v0.1.2   Add Options.pythonPath

2013-05-28   v0.1.1   First official release

2013-05-02   v0.1.0   Work in progress, not yet officially released.
