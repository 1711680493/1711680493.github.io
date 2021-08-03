var audio = new Audio("/audio/index.mp3");
audio.loop = true;

var musicEle = document.getElementById("music");

music();

if (window != top) {
	top.location.href = location.href;
}

// 背景特效
textRain(document.getElementById("index_background"), "Shendi");

/**
 * -控制声音的播放
 * @returns
 */
function music() {
	if (audio.paused) {
		audio.play();
		//在播放的时候要开始动画
		musicEle.style.animationPlayState="running";
	} else {
		audio.pause();
		musicEle.style.animationPlayState="paused";
	}
}
