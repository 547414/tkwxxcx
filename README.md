# 题库微信小程序
注：切勿将 `服务器网页端` 文件夹放入 `微信开发者工具`，使用的时候注意分开，除了这个文件夹，其他的都可以放入`微信开发者工具`

### 利用本项目盈利就可耻！！！  
### 不来维护就算了，最起码要有良心！  
### 虽然我也拿你没办法！淦！  
### 好吧，也无所谓了，只是别让我发现就行！
### 此项目参加过2019微信小程序开发大赛，华东赛区二等奖。
### 禁止利用此项目参赛，否则后果自负！！！

### 哔哩哔哩教程
新版本（本项目）：https://www.bilibili.com/video/BV1zf4y1S7oF  
老版本：https://www.bilibili.com/video/BV1fb411a71B  

### 老版本项目文件
链接：https://pan.baidu.com/s/1Ln2ZXEURC52DPiCWsscLAA 提取码：`501q`  

### 导入自定义题库网址
https://crysu.com/zhddktk/

### 有问题可以联系我
QQ: `2686885195`  
邮箱：`crysu@crysu.com`或`zbshr@foxmail.com`  

## 微信扫码打开小程序可进行体验
![Image text](https://raw.githubusercontent.com/547414/tkwxxcx/master/remade/zhddktk.jpg)

## 小程序端配置步骤
### 1.下载本项目`（master）`  
### 2.删除`master`中的 `服务器网页端` 文件夹  
### 3.将项目`（master）`导入到 `微信开发者工具`  
### 4.在`projiect.config.json`修改`appid`为你自己的  
### 5.在`app.js`里找到最上面几行，将云环境`id`（`env`那里）改成你自己的  
### 6.打开`云开发`，分别配置`云数据库`和`云存储`，参考下图  
  
#### 云数据库
![Image text](https://raw.githubusercontent.com/547414/tkwxxcx/master/remade/2.png)
  
#### 云存储
![Image text](https://raw.githubusercontent.com/547414/tkwxxcx/master/remade/1.png)
  
### 7.在`app.js`里按`Ctrl+F`调出搜索框搜索  
`db.collection('message').doc("6b81e0b4-e39f-47a1-bc7c-b604ffb2914e").get().then(res => {`  
然后将doc("`6b81e0b4-e39f-47a1-bc7c-b604ffb2914e`")中双引号引起开的换成你自己配置的  
  
### 8.将`云环境`中的 `云数据库` 中的 `file_id` 改成 `云存储`中你上传的文件的`File ID`  
  
### 9.云数据库数据项说明：  
`字段`-------------`示例值`---------`说明`  
`file_id`---------`cloud://...`---`自带题库文件（上传到云存储的文件）的文件ID`  
`message`---------`欢迎使用`-------`小程序首页中间偏下面显示的消息（更改后重新加载首页（或重启小程序）即可刷新）`  
`update_data`----`1`---------------`自带题库数据更新标记，更新时，需要将此字段值加1，比如由1变为2（只能加，不能少）`  
`update_version`-`1.0.0`----------`数据刷新标记，当要清空所有用户本地数据（缓存）时，更改此值（不同即可，建议加1）`  

## 自定义题库模块说明【注意】
这个需要服务器  
然后在`zzs.js`中找到  
`url: "https://crysu.com/zhddktk/upload/" + id + ".txt",`  
这行，将url换成你自己的  
另外，还需要自行在服务器中配置服务器网页端服务

## 服务器网页端说明
将服务器网页端文件夹改成英文名放入你的服务器中，并配置好`php+nigix/apache`环境即可  
在小程序后台`（微信公众平台）配置域名（需要ICP备案）`  

## 自定义题库题目格式说明
1  
单选题  
山西太原县清代举人刘大鹏（1857—1943年）所著的《退想斋日记》记载：“倭夷入寇，我军征剿不力，望风溃退，爵相一意立和。”反映的历史事件是（）  
A：鸦片战争  
B：第二次鸦片战争  
C：中日甲午战争  
D：八国联军侵华  
$#  
$#  
$#  
c  
2  
单选题  
中国民族资产阶级对外国资本主义和本国封建主义（）  
A：是完全对立、坚决反对的  
B：是完全依赖、坚决追随的  
C：既有矛盾、斗争的一面，又有依赖、妥协的一面  
D：只反对本国封建主义，不反对外国资本主义  
$#  
$#  
$#  
c  
如上，如果当前选项没有，用`$#`代替  
文件为txt文件  
文档最前面最后面不要有多余的东西，包括空格  
每道题有11行  
#### 自定义题库示例文件：https://github.com/547414/tkwxxcx/tree/master/remade/data.txt  
## 自带题库格式说明
每道题的格式和自定义题库一样
使用 `/%*/` 分割四个题库，默认顺序是近代史、思修、马原、毛概  
必须有四个题库，也就是四个分隔符，即使是每个题库里只有一道题，如果多了用不到，可以改`zds.wxml`把多余的题库进口按钮删了  
#### 自带题库示例文件：https://github.com/547414/tkwxxcx/tree/master/remade/data2.txt  
## 关于遇到的问题
#### 1.自带题库题目加载不出来
在题库文件（data.txt）没问题的情况下，尝试修改 `数据库的权限`  
![Image text](https://raw.githubusercontent.com/547414/tkwxxcx/master/remade/3.png)


