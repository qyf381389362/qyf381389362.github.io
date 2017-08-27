var pc = new particleChar();
var timer = null;
pc.queueCreate({
	text: "你好，小月月",
	fontColor: "#E8251E",
	showNext: false,
	showOpen: false,
});

function showTime () {
	clearTimeout(timer);
	pc.queueClear();
	pc.setOption({fontSize: 160,dotRadius: 3,dotDistance:8, showOpen: false, showNext: false,showTypeBefore: 'nearby', fontFamily: "Razer Header Light"});
	pc.show("TIME");
	timer = setInterval(function function_name () {
		var my = new Date();
		pc.show(my.getHours() + ":" + ("0" + my.getMinutes()).slice(-2) + ":" + ("0"+my.getSeconds()).slice(-2));
	}, 1000);
}

function showQueue () {
	clearTimeout(timer);
	pc.queueClear();
	pc.setOption({fontSize:200, dotRadius: 5,dotDistance: 12, showTypeBefore: "spread", fontFamily: "微软雅黑",showOpen: true, showNext: true});
	pc.queueCreate({
		text: "七夕，为你乞巧",
		showTypeBefore: "nearby",
		showTypeAfter: "bottom",
		fontColor: "#F09091",
	},{
		text: "愿你心灵手巧",
		showTypeBefore: "bottom",
		showTypeAfter: "nearby",
		showTime: 1200,
		v2: 0.4,
		fontColor: "#ff6268",
	},{
		text: "愿你欢笑不息",
		showTypeBefore: "nearby",
		v1: 0.2,
		showOpen: false,
	},{
		text: "愿你快乐不息",
		backgroundColorRandom: true,
		showOpen: false,
	},{
		text: "愿我的思念牵挂",
		fontColorRandom: true,

	},{
		text: "萦绕于心",
		showOpen: false,
		fontColor: "#DE3163",
	},{
		text: "七夕快乐  美丽常驻",
		showOpen: false,
		fontColor:"#FF84BA",
	},{
		text: "❤",
		showTypeAfter: "top",
		showTime: 1800,
		v1: 0.15,
		waitTime: 0,
		fontColor:"#BF0A10",
		callbackBefore: function  () {
			document.body.scrollTop = 0;
		},
		// callbackBefore: function  () {
		// 	alert("开始前的回调");
		// },
		// callbackMiddle: function  () {
		// 	alert("中间的回调");
		// },
		// callbackAfter: function  () {
		// 	alert("结束时的回调");
		// },
		queueLeave: true,
	});
}
document.getElementById('time').addEventListener("click", function  (e) {
	e.preventDefault();
	if(!e.target.classList.contains("selected")){
		e.target.classList.add("selected");
		document.getElementById('queue').classList.remove("selected");
		showTime();
	}
});
document.getElementById('queue').addEventListener("click", function  (e) {
	e.preventDefault();
	if(!e.target.classList.contains("selected")){
		e.target.classList.add("selected");
		document.getElementById('time').classList.remove("selected");
		showQueue();
	}
});
