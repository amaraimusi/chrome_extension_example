

document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('#test_btn1').addEventListener('click', clickHandler);
});
//
function clickHandler(){
	$("#ta1").val('American');
	//alert('TEST1');
	console.log('test=Ａ2');//■■■□□□■■■□□□■■■□□□)
	
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		//chrome専用APIのようだ。
				chrome.tabs.sendMessage(tabs[0].id, 
					JSON.stringify({ contents: "test value from popup" }),
					function (response) {
					});
			});	
}
