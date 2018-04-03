/ *
	===========================
	Copyright: LidPlay
	E-mail: contact@lidplay.net
	===========================


	INSTRUCTION FOR THE ADJUSTMENT OF SCRIPT

	To change the script settings without downloading it to your site, just add the variables to the URI.

	For example:
	if you want to change the parameter default_resolution, then just change the link to the script this way:
	http://lidplay.net/loader.js?default_resolution=480

	And if you want to change two parameters and more:
	http: //lidplay.net/loader.js default_resolution = 480 & refreshPlayers = false & refreshPlayersTime = 3000 ...?

	The script was updated on: April 01, 2018 14:21.

* /


/ *
	Select the default player extension.
	Available Values: 144,240,360,480,720,1080
* /

var default_resolution = "360";

/ *
	Do I need to update my players every second?
	Useful for sites with dynamic content changes (for example, switching the series using js).
	Valid values: true, false
* /

var refreshPlayers = true;

/ *
	The time through which the script again looks for players that can be replaced.
	If the previous value (refreshPlayers) is false, then this need not be changed.
	Valid values ​​are 0-∞ (milliseconds)
* /

was refreshPlayersTime = 500;

/ *
	Allow the script to create a collection of videos on your site?
	In the absence of Vkontakte video, the script will download the video from the collection of your site.
	Enabling this option can significantly reduce the failure rate.
	Valid values: true, false
* /

var collection = true;

/ *
	Use your domain for the player?
	Now you can use your domain for the player.
	This will prevent the transfer of the site weight to the LidPlay domains.
	You must set up a redirect (301, 302) to our domain: lidplay.net
	https://site.net/video/* -> https://lidplay.net/video/*
	https://site.net/video_ext.php* -> https://lidplay.net/video_ext.php*
	Valid values ​​are: domain name (without https: // and "/" at the end)
* /


var domain = "lidplay.net";

/ *
	Providers. Unnecessary to comment out.
* /

were providers = [
	'vk.com/video_ext.php', 'vk.me/video_ext.php', 'new.vk.com/video_ext.php', 'vkontakte.ru/video_ext.php',
	'my.mail.ru', 'videoapi.my.mail.ru', 'video.mail.ru',
	'drive.google.com', 'docs.google.com',
	'Facebook.com/plugins/video.php'
	'vimeo.com', 'player.vimeo.com',
	'Embed.redtube.com'
	'Ok.ru/videoembed'
	'Www.mp4upload.com'
	'Embed.publicvideohost.org'
	'Www.dailymotion.com'
	'Www.stormo.tv'
	'Xhamster.com'
	'Flashservice.xvideos.com'
	'Www.pornhub.com'
	'Www.dropbox.com'
]; 
!function(){function t(t){var e=[];for(var r in t)e.push(encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e.join("&")}function e(t,e){return t.indexOf(e)>-1}function r(t,r){if("[object String]"==Object.prototype.toString.call(r))return e(t,r);for(var l=0;l<r.length;l++)if(e(t,r[l]))return!0;return!1}function l(){for(var l=document.getElementsByTagName("iframe"),i=0;i<l.length;i++)if(!e(l[i].src,domain)&&r(l[i].src,providers)&&(s=l[i],void 0,void 0,void 0,n=s.getBoundingClientRect(),a=n.top,b=n.bottom,a<window.innerHeight&&b>=0)&&(u=l[i],"none"!==window.getComputedStyle(u).display)){var o={url:l[i].src,collection:collection,default_resolution:default_resolution,referrer:window.location.href};l[i].getAttribute("subtitles")?o.subtitles=l[i].getAttribute("subtitles"):delete o.subtitles,l[i].getAttribute("subtitles_src")?o.subtitles_src=l[i].getAttribute("subtitles_src"):delete o.subtitles_src,l[i].getAttribute("subtitles_label")?o.subtitles_label=l[i].getAttribute("subtitles_label"):delete o.subtitles_label,l[i].getAttribute("default_resolution")?o.default_resolution=l[i].getAttribute("default_resolution"):delete o.default_resolution,l[i].getAttribute("start")?o.start=l[i].getAttribute("start"):delete o.start,l[i].getAttribute("autoplay")?o.autoplay=l[i].getAttribute("autoplay"):delete o.autoplay,l[i].src="//"+domain+"/video/?"+t(o),l[i].setAttribute("allowfullscreen",""),l[i].setAttribute("mozallowfullscreen",""),l[i].setAttribute("webkitallowfullscreen",""),l[i].removeAttribute("sandbox")}var u,s,n,a,b}l(),refreshPlayers&&setInterval(l,refreshPlayersTime)}();					 
