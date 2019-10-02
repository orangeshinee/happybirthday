# happybirthday

:birthday:一个生日倒计时＋祝福的静态页面

[演示](https://orangeshinee.github.io/happybirthday)

内容均来自于[codepen](https://codepen.io/)上的开源项目

分别是：

- [3D书籍](https://codepen.io/rikanutyy/pen/PEJBxX)
- [气泡字体](https://codepen.io/mkrtchyan/pen/mJCcz)
- [倒计时](https://codepen.io/AllThingsSmitty/pen/JJavZN)

## 项目内容

```md
.
├── static ············ 静态资源
│   ├── style.css ····· 倒计时页面css
│   ├── style2.css ···· 气泡字体css
│   ├── card.css ······ 3d书本css
│   ├── font.css ······ google字体
│   ├── but.css ······· 按钮css
│   ├── count.js ······ 倒计时动画
│   ├── cake.ico ······ 网页favicon
│   └── bgm.mp3 ······· 生日快乐的bgm
└── index.html ········ 主页面
```



## 页面布局

```html
<body>
    <div class="container" id="container">
        倒计时
      </div>
      
      <div class="container2" id="container2" >
          气泡字体
        </div>

    <div class="card" id="card">
        3D书本
        </div>
</body>
```



### 倒计时页面

![倒计时](https://picsshine.oss-cn-shenzhen.aliyuncs.com/blogpics/20191003002103.png)

- 具体时间在`static/count.js`中更改

  ```js
  let countDown = new Date('Oct 01, 2020 00:00:00').getTime(),
          x = setInterval(function() {
            let now = new Date().getTime(),
                distance = countDown - now;
  ```

- 首先展示倒计时页面，其他两个用`display: none`隐藏，等到倒计时归零或者点击了按钮之后，会将后面两个`div`显示出来；

  

### 气泡页面＋3D书本

![页面展示](https://picsshine.oss-cn-shenzhen.aliyuncs.com/blogpics/20191003002738.png)

- 考虑到移动端适应，修改了部分样式。封面可以自行修改

  ![页面内容](https://picsshine.oss-cn-shenzhen.aliyuncs.com/blogpics/20191003003917.png)

- 内容直接在`index.html`中修改即可