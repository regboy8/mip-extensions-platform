/**
 * @author: mj
 * @date:  2017-05-24
 * @time: 14:25
 * @file: mip-ys137-themes.js
 * @contact: regboy@qq.com
 * @description: 页面主题样式管理
 */
define(function (require) {
    var customElem = require('customElement').create();
    // build 方法，元素插入到文档时执行，仅会执行一次
    customElem.prototype.build = function () {
    };
    // 第一次进入可视区回调,只会执行一次，做懒加载，利于网页速度
    customElem.prototype.firstInviewCallback = function () {
    };

    return customElem;
});
