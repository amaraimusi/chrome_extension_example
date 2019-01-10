
$(()=>{
	console.log('test=Ａ');//■■■□□□■■■□□□■■■□□□)
	$('#test_btn1').click(function(e){
		//clickHandler();
		$("#ta1").val('USSR2-2');
		//alert('TEST1');
		console.log('test=Ａ３３３');//■■■□□□■■■□□□■■■□□□)
		
		chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			$("#ta1").val('USSR3');
				chrome.tabs.sendMessage(tabs[0].id, 
					JSON.stringify({ contents: "test value from popupXX" }),
					function (response) {
					});
			});	
	});
});

//document.addEventListener('DOMContentLoaded', function() {
//	document.querySelector('#test_btn1').addEventListener('click', clickHandler);
//});
////
//function clickHandler(){
//	
//	//alert('TEST1');
//	console.log('test=Ａ2-2');//■■■□□□■■■□□□■■■□□□)
//	
//	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//		//chrome専用APIのようだ。
//				chrome.tabs.sendMessage(tabs[0].id, 
//					JSON.stringify({ contents: "test value from popup" }),
//					function (response) {
//					});
//			});	
//}
