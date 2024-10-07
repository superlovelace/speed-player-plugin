// 提示方法
function showAlert(message) {
    alert(message);
}

// 判断输入的数据是不是数字
function isNumber(value) {
    return !isNaN(Number(value)) && value.trim() !== '';
}

// 接收传递的消息
chrome.runtime.onMessage.addListener(function(request) {
    // 接收到数据
    const data = request.data;
	

	if(!document.querySelector("video")){
		showAlert("页面上没有视频播放器！");
	}else if(!isNumber(data)){
		showAlert("请不要输入其他东西！");
	}else if(data<=0 || data>16){
		showAlert("数值越界！合理范围[0-16]！")
	}else{
		document.querySelector("video").playbackRate = data;
		showAlert("当前播放速度："+data);
	}
	
});
