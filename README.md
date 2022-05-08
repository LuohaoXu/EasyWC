# README.md


![](https://img.shields.io/badge/EasyWC-v1.0.0-da282a) ![](https://img.shields.io/badge/license-MIT-brightgreen.svg)


### Introduction

This is an easy WordCloud javascript, you can use EasyWC to display a word cloud on your web page.

### 引言
这是一个简单的词云 javascript， 你可以使用 EasyWC 很方便地在你的网页上展示词云。

### Usage
- import EasyWC javascript in your web page.
```html
<script src="EasyWC.js"></script>
```

- create an html element for Word Cloud
```html
<div id="wc"></div>
```

- create an EasyWC object
```javascript
let dict = { 'E-Commerce' : 4, 'Agriculture' : 2, 'Logistics' : 3, 'Traffic' : 1 }
let obj =new EasyWC("wc", dict)
```

- add click events before init, word and count are required parameters. You can decide whether to use them or not.
```javascript
f = function(word, count){
        alert(word + " has been clicked!")
}
obj.clickEvent = f.name
```

- some other attribute which you can chnage

| Attribute      | Default |
| --------- | -----:|
| lowerFontsize  | 16 |
| upperFontsize     |   36 |
| clickEvent      |    none |
| colors |  ['#ff3366', '#B03060', '#9999ff', '#339933','#F08080','#EE9A00', '#4169E1', '#6959CD','#CD2990', '#2E8B57']  |

- init the EasyWC
```javascript
obj.init()
```

### 用法
- 在你的网页上引入EasyWC.
```html
<script src="EasyWC.js"></script>
```

- 创建一个html元素作为词云的容器
```html
<div id="wc"></div>
```

- new 一个 EasyWC 对象
```javascript
let dict = { 'E-Commerce' : 4, 'Agriculture' : 2, 'Logistics' : 3, 'Traffic' : 1 }
let obj =new EasyWC("wc", dict)
```
- 在初始化之前，为词云添加点击事件. word和count是必须要有的参数，你可以不去使用它们
```javascript
f = function(word, count){
        alert(word + " has been clicked!")
}
obj.clickEvent = f.name
```

- 一些你可以修改的其他属性

| Attribute      | Default |
| --------- | -----:|
| lowerFontsize  | 16 |
| upperFontsize     |   36 |
| clickEvent      |    none |
| colors |  ['#ff3366', '#B03060', '#9999ff', '#339933','#F08080','#EE9A00', '#4169E1', '#6959CD','#CD2990', '#2E8B57']  |

- 初始化EasyWC
```javascript
obj.init()
```


### show
![](https://github.com/LuohaoXu/EasyWC/blob/main/examples/wc.png?raw=true)


### 展示
![](https://github.com/LuohaoXu/EasyWC/blob/main/examples/wc.png?raw=true)
