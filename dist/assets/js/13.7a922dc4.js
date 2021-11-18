(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{410:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("JavaScript 自带 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date",target:"_blank",rel:"noopener noreferrer"}},[t._v("Date"),a("OutboundLink")],1),t._v(" 类，也带了非常多的工具，但是可能真要用的时候，却发现这个功能没有、那个功能也没有。于是就有了 moment.js（"),a("a",{attrs:{href:"https://momentjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("英文官网"),a("OutboundLink")],1),t._v("|"),a("a",{attrs:{href:"http://momentjs.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文网"),a("OutboundLink")],1),t._v("）。相较 Date 类，moment 对格式化输出、多语言、多时区的支持更加友好，还有很多小工具，十分安利。")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("官网说的很明白了：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" moment --save   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" moment             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Yarn")]),t._v("\nInstall-Package Moment.js   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# NuGet")]),t._v("\nspm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" moment --save   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# spm")]),t._v("\nmeteor "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" momentjs:moment  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# meteor")]),t._v("\nbower "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" moment --save "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# bower (废弃)")]),t._v("\n")])])]),a("h2",{attrs:{id:"引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入"}},[t._v("#")]),t._v(" 引入")]),t._v(" "),a("p",[t._v("为了把默认时区配置为 "),a("code",[t._v("zh-CN")]),t._v("，可以另起一个 "),a("code",[t._v("utils/moment.js")]),t._v("，编写如下内容：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" moment "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'moment'")]),t._v("\nmoment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("locale")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zh-cn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以使用 moment(datetime).toChinese() 转换为展示给用户的时间")]),t._v("\nmoment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("toChinese")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YYYY 年 MM 月 DD 日 HH:mm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("moment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" moment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以在浏览器中测试 moment")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" moment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("之后引入 "),a("code",[t._v("moment")]),t._v(" 都从 "),a("code",[t._v("utils/moment.js")]),t._v(" 中引入：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" moment "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@/utils/moment"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("p",[t._v("这里仅记录我在开发过程中用到的方法。")]),t._v(" "),a("h3",{attrs:{id:"读入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读入"}},[t._v("#")]),t._v(" 读入")]),t._v(" "),a("h4",{attrs:{id:"读取当前时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读取当前时间"}},[t._v("#")]),t._v(" 读取当前时间")]),t._v(" "),a("p",[t._v("moment 和 Date 类似：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Fri May 07 2021 16:47:52 GMT+0800 (中国标准时间)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("moment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Moment {_isAMomentObject: true, _isUTC: false, _pf: {…}, _locale: Locale, _d: Fri May 07 2021 16:47:50 GMT+0800 (中国标准时间), …}")]),t._v("\n\nDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1620377346488")]),t._v("\nmoment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1620377349595")]),t._v("\n")])])]),a("h4",{attrs:{id:"读取-iso-格式时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读取-iso-格式时间"}},[t._v("#")]),t._v(" 读取 ISO 格式时间")]),t._v(" "),a("p",[t._v("Django 后端给的时间是以 "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/ISO_8601",target:"_blank",rel:"noopener noreferrer"}},[t._v("ISO 8601"),a("OutboundLink")],1),t._v(" 格式给的，类似于 "),a("code",[t._v("2021-05-07T08:43:17+00:00")]),t._v(" 或 "),a("code",[t._v("2021-05-07T08:43:17Z")]),t._v("（零时区可以使用 "),a("code",[t._v("Z")]),t._v(" 表示）。")]),t._v(" "),a("p",[t._v("Date 是可以直接读取识别的，moment 也是一样。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2021-05-07T08:43:17+00:00'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "Fri May 07 2021 16:49:41 GMT+0800 (中国标准时间)"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("moment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2021-05-07T08:43:17+00:00'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Moment {_isAMomentObject: true, _i: "2021-05-07T08:43:17+00:00", _f: "YYYY-MM-DDTHH:mm:ssZ", _tzm: 0, _isUTC: false, …}')]),t._v("\n")])])]),a("h3",{attrs:{id:"输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出"}},[t._v("#")]),t._v(" 输出")]),t._v(" "),a("h4",{attrs:{id:"输出时间戳"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出时间戳"}},[t._v("#")]),t._v(" 输出时间戳")]),t._v(" "),a("p",[t._v("用 "),a("code",[t._v(".getTime()")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1620377346488")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("moment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1620377346488")]),t._v("\n")])])]),a("h4",{attrs:{id:"输出为-iso-格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出为-iso-格式"}},[t._v("#")]),t._v(" 输出为 ISO 格式")]),t._v(" "),a("p",[t._v("Date 可以用 "),a("code",[t._v("Date.prototype.toISOString()")]),t._v(" 格式化为 UTC 时区。想要格式化为当地时区，还得靠 "),a("code",[t._v("moment.prototype.format()")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toISOString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "2021-05-07T08:55:44.282Z"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("moment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "2021-05-07T16:56:08+08:00"')]),t._v("\n")])])]),a("h4",{attrs:{id:"格式化输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#格式化输出"}},[t._v("#")]),t._v(" 格式化输出")]),t._v(" "),a("p",[t._v("可以在 "),a("code",[t._v("moment().format()")]),t._v(" 的参数中自定义格式。具体的格式可以见 "),a("a",{attrs:{href:"http://momentjs.cn/docs/#/parsing/string-format/",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("moment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YYYY-MM-DD HH:mm:ss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "2021-05-07 17:56:58"')]),t._v("\n")])])]),a("h4",{attrs:{id:"输出为-x-年前-x-分钟前"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出为-x-年前-x-分钟前"}},[t._v("#")]),t._v(" 输出为 x 年前 / x 分钟前")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("moment.prototype.fromNow()")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("moment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2000-01-01T00:00Z'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromNow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 21 年前")]),t._v("\n")])])]),a("h2",{attrs:{id:"其他使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他使用方法"}},[t._v("#")]),t._v(" 其他使用方法")]),t._v(" "),a("h3",{attrs:{id:"将时间长度转为-hh-mm-ss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将时间长度转为-hh-mm-ss"}},[t._v("#")]),t._v(" 将时间长度转为 HH:mm:ss")]),t._v(" "),a("p",[t._v("比如想要把 "),a("code",[t._v("1000s")]),t._v(" 转为 "),a("code",[t._v("00:16:40")]),t._v("。")]),t._v(" "),a("p",[t._v("moment 并不记录时间段，但是由于它的时间戳是从 "),a("code",[t._v("1970.1.1 00:00")]),t._v(" 开始经过的毫秒数，所以可以以毫秒形式输入 "),a("code",[t._v("1000*1000")]),t._v(" 然后 format 成 "),a("code",[t._v("HH:mm:ss")]),t._v("。")]),t._v(" "),a("p",[t._v("不过这种方法不支持一天以上的时间 2333")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("moment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("utc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HH:mm:ss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "00:16:40"')]),t._v("\nmoment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("utc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HH:mm:ss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "02:46:40"')]),t._v("\nmoment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("utc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HH:mm:ss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "03:46:40"')]),t._v("\n")])])]),a("p",[t._v("如果需要支持的话，还是自己提前算一下天数吧。或者判断一下，如果大于 "),a("code",[t._v("86400000")]),t._v(" 就显示 "),a("code",[t._v("大于一天")]),t._v("。")])])}),[],!1,null,null,null);s.default=e.exports}}]);