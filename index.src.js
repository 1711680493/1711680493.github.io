if (window != top) {
	top.location.href = location.href;
}
// 获取元素
var websites = document.getElementById("websites");

// 背景特效
{
	var canvas = document.getElementById("bg");
	var context = canvas.getContext("2d");
	var width = canvas.width = window.innerWidth;
	var height = canvas.height = window.innerHeight;
	var text = "Shendi";
	//将字符串变为字符数组
	text = text.split("");
	//设置背景颜色
	canvas.style.backgroundColor = "black";
	//字体大小
	var f_size = 20;
	context.font = f_size + "px 黑体";
	//计算一行 一列能画多少个
	var row = width / f_size;
	var col = height / f_size;
	//存储每一行对应的下标
	var cols = [];
	for (var i = 0;i < row;i++) {
		cols[i] = 1;
	}
	//特效
	setInterval(function () {
		context.fillStyle = "rgba(0,0,0,0.1)";
		context.fillRect(0,0,width,height);
		context.fillStyle = "#0f0";
		for (var i = 0;i < row;i++) {
			if (cols[i] >= col || Math.random() >= 0.96) {
				cols[i] = 1;
			}
			var txt = text[i % 6];
			context.fillText(txt,i * f_size,cols[i] * f_size);
			cols[i]++;
		}
	}, 33);
}

// 从json中获取我的所有网站链接
let urls;
if (window.XMLHttpRequest) urls = new XMLHttpRequest();
else urls = new ActiveXObject("Microsoft.XMLHTTP");
urls.onreadystatechange = function () {
	if (urls.readyState == 4) {
		var jsonArr = eval(urls.responseText);
		for (let i = 0; i < jsonArr.length; i++) {
			websites.innerHTML += "<li><a href='" + jsonArr[i].url + "'>" + jsonArr[i].name + "</a></li>";
		}
	}
};
urls.open("POST", "url.json", true);
urls.send();