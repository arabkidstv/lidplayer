var default_resolution = "360";
var refreshPlayers = true;
var refreshPlayersTime = 500;
var collection = true;
var domain = "lidplay.net";
var providers = ["vk.com/video_ext.php", "vk.me/video_ext.php", "new.vk.com/video_ext.php", "vkontakte.ru/video_ext.php", "my.mail.ru", "videoapi.my.mail.ru", "video.mail.ru", "drive.google.com", "docs.google.com", "facebook.com/plugins/video.php", "vimeo.com", "player.vimeo.com", "embed.redtube.com", "ok.ru/videoembed", "www.mp4upload.com", "embed.publicvideohost.org", "www.dailymotion.com", "www.stormo.tv", "xhamster.com", "flashservice.xvideos.com", "www.pornhub.com", "www.dropbox.com"];
!function() {
function t$jscomp$0(t$jscomp$1) {
var e$jscomp$8 = [];
var r$jscomp$2;
for (r$jscomp$2 in t$jscomp$1) {
e$jscomp$8.push(encodeURIComponent(r$jscomp$2) + "=" + encodeURIComponent(t$jscomp$1[r$jscomp$2]));
}
return e$jscomp$8.join("&");
}
function e$jscomp$7(t$jscomp$2, e$jscomp$9) {
return t$jscomp$2.indexOf(e$jscomp$9) > -1;
}
function r$jscomp$1(t$jscomp$3, r$jscomp$3) {
if ("[object String]" == Object.prototype.toString.call(r$jscomp$3)) {
return e$jscomp$7(t$jscomp$3, r$jscomp$3);
}
var l$jscomp$1 = 0;
for (; l$jscomp$1 < r$jscomp$3.length; l$jscomp$1++) {
if (e$jscomp$7(t$jscomp$3, r$jscomp$3[l$jscomp$1])) {
return true;
}
}
return false;
}
function l$jscomp$0() {
var l$jscomp$2 = document.getElementsByTagName("iframe");
var i$jscomp$3 = 0;
for (; i$jscomp$3 < l$jscomp$2.length; i$jscomp$3++) {
if (!e$jscomp$7(l$jscomp$2[i$jscomp$3].src, domain) && r$jscomp$1(l$jscomp$2[i$jscomp$3].src, providers) && (s$jscomp$2 = l$jscomp$2[i$jscomp$3], void 0, void 0, void 0, n$jscomp$3 = s$jscomp$2.getBoundingClientRect(), a$jscomp$0 = n$jscomp$3.top, b$jscomp$0 = n$jscomp$3.bottom, a$jscomp$0 < window.innerHeight && b$jscomp$0 >= 0) && (u$jscomp$0 = l$jscomp$2[i$jscomp$3], "none" !== window.getComputedStyle(u$jscomp$0).display)) {
var o$jscomp$0 = {
url : l$jscomp$2[i$jscomp$3].src,
collection : collection,
default_resolution : default_resolution,
referrer : window.location.href
};
if (l$jscomp$2[i$jscomp$3].getAttribute("subtitles")) {
o$jscomp$0.subtitles = l$jscomp$2[i$jscomp$3].getAttribute("subtitles");
} else {
delete o$jscomp$0.subtitles;
}
if (l$jscomp$2[i$jscomp$3].getAttribute("subtitles_src")) {
o$jscomp$0.subtitles_src = l$jscomp$2[i$jscomp$3].getAttribute("subtitles_src");
} else {
delete o$jscomp$0.subtitles_src;
}
if (l$jscomp$2[i$jscomp$3].getAttribute("subtitles_label")) {
o$jscomp$0.subtitles_label = l$jscomp$2[i$jscomp$3].getAttribute("subtitles_label");
} else {
delete o$jscomp$0.subtitles_label;
}
if (l$jscomp$2[i$jscomp$3].getAttribute("default_resolution")) {
o$jscomp$0.default_resolution = l$jscomp$2[i$jscomp$3].getAttribute("default_resolution");
} else {
delete o$jscomp$0.default_resolution;
}
if (l$jscomp$2[i$jscomp$3].getAttribute("start")) {
o$jscomp$0.start = l$jscomp$2[i$jscomp$3].getAttribute("start");
} else {
delete o$jscomp$0.start;
}
if (l$jscomp$2[i$jscomp$3].getAttribute("autoplay")) {
o$jscomp$0.autoplay = l$jscomp$2[i$jscomp$3].getAttribute("autoplay");
} else {
delete o$jscomp$0.autoplay;
}
l$jscomp$2[i$jscomp$3].src = "//" + domain + "/video/?" + t$jscomp$0(o$jscomp$0);
l$jscomp$2[i$jscomp$3].setAttribute("allowfullscreen", "");
l$jscomp$2[i$jscomp$3].setAttribute("mozallowfullscreen", "");
l$jscomp$2[i$jscomp$3].setAttribute("webkitallowfullscreen", "");
l$jscomp$2[i$jscomp$3].removeAttribute("sandbox");
}
}
var u$jscomp$0;
var s$jscomp$2;
var n$jscomp$3;
var a$jscomp$0;
var b$jscomp$0;
}
l$jscomp$0();
if (refreshPlayers) {
setInterval(l$jscomp$0, refreshPlayersTime);
}
}();
