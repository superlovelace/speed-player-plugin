function showAlert(message) {
    alert(message);
}

function isNumber(value) {
    return !isNaN(Number(value)) && value.trim() !== '';
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // 接收到数据
    const data = request.data;
	

	if(!document.querySelector("video")){
		showAlert("页面上没有视频播放器！");
	}else if(!isNumber(data)){
		showAlert("请不要输入其他东西！");
	}else if(data<=0){
		showAlert("数值必须大于零！")
	}else{
		document.querySelector("video").playbackRate = data;
		showAlert("当前播放速度："+data);
	}
	
});
