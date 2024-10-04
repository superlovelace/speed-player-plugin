$('form').on('submit', function(event) {
	event.preventDefault();  // 阻止默认提交行为

	// 将表单数据序列化为对象
	const formData = {
		speedNum: $('input[name="speed"]').val(),
	};

	// 发送消息到内容脚本
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {data: formData.speedNum});
	});
});
