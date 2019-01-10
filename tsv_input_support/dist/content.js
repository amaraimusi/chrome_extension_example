window.onload = function() {
//  var body = document.getElementsByClassName('container');
//  body[0].style.backgroundColor = '#44ca81';
  
  var body = $('.container');
  body.css('background-color','#ffcd42');
  
  var text1 = $('#text1');
  text1.val('Hello World!');
  
  console.log('test=Ａ15');//■■■□□□■■■□□□■■■□□□)



};


chrome.runtime.sendMessage(
	    { value: { contents: "test value from contents" } }
	);

// 受信側 other tab -> contents(popup/option -> contents)
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log(message);
    return;
});