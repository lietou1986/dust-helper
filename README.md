# dust-helper

###### 基于linkin的dust模板引擎扩展的静态文件加载器，需要依赖阿里loader包，用于在系统发布时会通过自动构建合并并压缩多个文件，减少资源请求，例子如下：

    `{@jsloader file="/assets/javascript/core.min.js,/assets/javascript/jquery.ui.autocomplete.js,/assets/javascript/searchChangeV2.js,/assets/javascript/cityautocomplete.js"}{/jsloader}`

    `{@cssloader file="/assets/css/core.min.css,/assets/css/job_search.css,/assets/css/jquery.autocomplete.css,/assets/css/alert_new.css"}{/cssloader}`
 
###### 代码
![1](http://assets.5isolar.com/img/dust/1.jpg)

###### 浏览器输出
![2](http://assets.5isolar.com/img/dust/2.jpg)
