chrome.tabs.onCreated.addListener( function (tabId, changeInfo, tab) {
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
		var url = tabs[0].url;
		if (url.indexOf("vk.com/away.php", 0)>=0){
			var last = url.indexOf("&", 0)
			if(last == -1) last = 1000;
			var url = decodeURIComponent(url.substr(27, last-27));
			chrome.tabs.update({url: url});
		}
	});
});
