var script = function () {
		chrome.tabs.create({url: "popup.html" }); // 別タブで指定したURLを開く
};


(function(){
	chrome.browserAction.onClicked.addListener(script); // clickしたら指定した関数を発火する

})();


