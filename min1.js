!function(e$jscomp$7, t$jscomp$0) {
if ("object" == typeof exports && "undefined" != typeof module) {
module.exports = t$jscomp$0();
} else {
if ("function" == typeof define && define.amd) {
define("Plyr", t$jscomp$0);
} else {
e$jscomp$7.Plyr = t$jscomp$0();
}
}
}(this, function() {
function g$jscomp$0() {
if (this.enabled) {
var e$jscomp$9 = this.player.elements.buttons.fullscreen;
if (u$jscomp$0.is.element(e$jscomp$9)) {
u$jscomp$0.toggleState(e$jscomp$9, this.active);
}
u$jscomp$0.dispatchEvent(this.target, this.active ? "enterfullscreen" : "exitfullscreen", true);
if (!m$jscomp$0.isIos) {
u$jscomp$0.trapFocus.call(this.player, this.target, this.active);
}
}
}
function f$jscomp$1() {
var e$jscomp$10 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
if (e$jscomp$10) {
this.scrollPosition = {
x : window.scrollX || 0,
y : window.scrollY || 0
};
} else {
window.scrollTo(this.scrollPosition.x, this.scrollPosition.y);
}
document.body.style.overflow = e$jscomp$10 ? "hidden" : "";
u$jscomp$0.toggleClass(this.target, this.player.config.classNames.fullscreen.fallback, e$jscomp$10);
g$jscomp$0.call(this);
}
var e$jscomp$8 = {
html5 : "html5",
youtube : "youtube",
vimeo : "vimeo"
mp4upload : "mp4upload"
};
var t$jscomp$1 = {
audio : "audio",
video : "video"
};
var i$jscomp$3 = {
enabled : true,
title : "",
debug : false,
autoplay : false,
autopause : true,
seekTime : 10,
volume : 1,
muted : false,
duration : null,
displayDuration : true,
invertTime : true,
toggleInvert : true,
ratio : "16:9",
clickToPlay : true,
hideControls : true,
showPosterOnEnd : false,
disableContextMenu : true,
loadSprite : true,
iconPrefix : "plyr",
iconUrl : "https://cdn.plyr.io/3.0.9/plyr.svg",
blankVideo : "https://cdn.plyr.io/static/blank.mp4",
quality : {
default : "default",
options : ["hd2160", "hd1440", "hd1080", "hd720", "large", "medium", "small", "tiny", "default"]
},
loop : {
active : false
},
speed : {
selected : 1,
options : [.5, .75, 1, 1.25, 1.5, 1.75, 2]
},
keyboard : {
focused : true,
global : false
},
tooltips : {
controls : false,
seek : true
},
captions : {
active : false,
language : window.navigator.language.split("-")[0]
},
fullscreen : {
enabled : true,
fallback : true,
iosNative : false
},
storage : {
enabled : true,
key : "plyr"
},
controls : ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
settings : ["captions", "quality", "speed"],
i18n : {
restart : "Restart",
rewind : "Rewind {seektime} secs",
play : "Play",
pause : "Pause",
fastForward : "Forward {seektime} secs",
seek : "Seek",
played : "Played",
buffered : "Buffered",
currentTime : "Current time",
duration : "Duration",
volume : "Volume",
mute : "Mute",
unmute : "Unmute",
enableCaptions : "Enable captions",
disableCaptions : "Disable captions",
enterFullscreen : "Enter fullscreen",
exitFullscreen : "Exit fullscreen",
frameTitle : "Player for {title}",
captions : "Captions",
settings : "Settings",
speed : "Speed",
quality : "Quality",
loop : "Loop",
start : "Start",
end : "End",
all : "All",
reset : "Reset",
disabled : "Disabled",
advertisement : "Ad"
},
urls : {
vimeo : {
api : "https://player.vimeo.com/api/player.js"
},
youtube : {
api : "https://www.youtube.com/iframe_api"
},
mp4upload : {
api : "https://www.mp4upload.com"
},
googleIMA : {
api : "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
}
},
listeners : {
seek : null,
play : null,
pause : null,
restart : null,
rewind : null,
fastForward : null,
mute : null,
volume : null,
captions : null,
fullscreen : null,
pip : null,
airplay : null,
speed : null,
quality : null,
loop : null,
language : null
},
events : ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "qualityrequested", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", 
"adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
selectors : {
editable : "input, textarea, select, [contenteditable]",
container : ".plyr",
controls : {
container : null,
wrapper : ".plyr__controls"
},
labels : "[data-plyr]",
buttons : {
play : '[data-plyr="play"]',
pause : '[data-plyr="pause"]',
restart : '[data-plyr="restart"]',
rewind : '[data-plyr="rewind"]',
fastForward : '[data-plyr="fast-forward"]',
mute : '[data-plyr="mute"]',
captions : '[data-plyr="captions"]',
fullscreen : '[data-plyr="fullscreen"]',
pip : '[data-plyr="pip"]',
airplay : '[data-plyr="airplay"]',
settings : '[data-plyr="settings"]',
loop : '[data-plyr="loop"]'
},
inputs : {
seek : '[data-plyr="seek"]',
volume : '[data-plyr="volume"]',
speed : '[data-plyr="speed"]',
language : '[data-plyr="language"]',
quality : '[data-plyr="quality"]'
},
display : {
currentTime : ".plyr__time--current",
duration : ".plyr__time--duration",
buffer : ".plyr__progress--buffer",
played : ".plyr__progress--played",
loop : ".plyr__progress--loop",
volume : ".plyr__volume--display"
},
progress : ".plyr__progress",
captions : ".plyr__captions",
menu : {
quality : ".js-plyr__menu__list--quality"
}
},
classNames : {
video : "plyr__video-wrapper",
embed : "plyr__video-embed",
ads : "plyr__ads",
control : "plyr__control",
type : "plyr--{0}",
provider : "plyr--{0}",
stopped : "plyr--stopped",
playing : "plyr--playing",
loading : "plyr--loading",
error : "plyr--has-error",
hover : "plyr--hover",
tooltip : "plyr__tooltip",
cues : "plyr__cues",
hidden : "plyr__sr-only",
hideControls : "plyr--hide-controls",
isIos : "plyr--is-ios",
isTouch : "plyr--is-touch",
uiSupported : "plyr--full-ui",
noTransition : "plyr--no-transition",
menu : {
value : "plyr__menu__value",
badge : "plyr__badge",
open : "plyr--menu-open"
},
captions : {
enabled : "plyr--captions-enabled",
active : "plyr--captions-active"
},
fullscreen : {
enabled : "plyr--fullscreen-enabled",
fallback : "plyr--fullscreen-fallback"
},
pip : {
supported : "plyr--pip-supported",
active : "plyr--pip-active"
},
airplay : {
supported : "plyr--airplay-supported",
active : "plyr--airplay-active"
},
tabFocus : "plyr__tab-focus"
},
attributes : {
embed : {
provider : "data-plyr-provider",
id : "data-plyr-embed-id"
}
},
keys : {
google : null
},
ads : {
enabled : false,
publisherId : ""
}
};
if ("undefined" != typeof window) {
window;
} else {
if ("undefined" != typeof global) {
global;
} else {
if ("undefined" != typeof self) {
self;
}
}
}
var n$jscomp$3;
var s$jscomp$2;
var a$jscomp$0 = (function(e$jscomp$11, t$jscomp$2) {
var i$jscomp$4;
i$jscomp$4 = function() {
function s$jscomp$3(e$jscomp$13, t$jscomp$4) {
if (e$jscomp$13) {
var s$jscomp$4 = n$jscomp$4[e$jscomp$13];
if (i$jscomp$5[e$jscomp$13] = t$jscomp$4, s$jscomp$4) {
for (; s$jscomp$4.length;) {
s$jscomp$4[0](e$jscomp$13, t$jscomp$4);
s$jscomp$4.splice(0, 1);
}
}
}
}
function a$jscomp$1(t$jscomp$5, i$jscomp$6) {
if (t$jscomp$5.call) {
t$jscomp$5 = {
success : t$jscomp$5
};
}
if (i$jscomp$6.length) {
(t$jscomp$5.error || e$jscomp$12)(i$jscomp$6);
} else {
(t$jscomp$5.success || e$jscomp$12)(t$jscomp$5);
}
}
function l$jscomp$1(t$jscomp$6, i$jscomp$7, n$jscomp$5, s$jscomp$5) {
var a$jscomp$2;
var r$jscomp$3;
var o$jscomp$1 = document;
var c$jscomp$1 = n$jscomp$5.async;
var u$jscomp$1 = (n$jscomp$5.numRetries || 0) + 1;
var d$jscomp$1 = n$jscomp$5.before || e$jscomp$12;
var p$jscomp$1 = t$jscomp$6.replace(/^(css|img)!/, "");
s$jscomp$5 = s$jscomp$5 || 0;
if (/(^css!|\.css$)/.test(t$jscomp$6)) {
a$jscomp$2 = true;
(r$jscomp$3 = o$jscomp$1.createElement("link")).rel = "stylesheet";
r$jscomp$3.href = p$jscomp$1;
} else {
if (/(^img!|\.(png|gif|jpg|svg)$)/.test(t$jscomp$6)) {
(r$jscomp$3 = o$jscomp$1.createElement("img")).src = p$jscomp$1;
} else {
(r$jscomp$3 = o$jscomp$1.createElement("script")).src = t$jscomp$6;
r$jscomp$3.async = void 0 === c$jscomp$1 || c$jscomp$1;
}
}
r$jscomp$3.onload = r$jscomp$3.onerror = r$jscomp$3.onbeforeload = function(e$jscomp$14) {
var o$jscomp$2 = e$jscomp$14.type[0];
if (a$jscomp$2 && "hideFocus" in r$jscomp$3) {
try {
if (!r$jscomp$3.sheet.cssText.length) {
o$jscomp$2 = "e";
}
} catch (e$jscomp$15) {
o$jscomp$2 = "e";
}
}
if ("e" == o$jscomp$2 && (s$jscomp$5 = s$jscomp$5 + 1) < u$jscomp$1) {
return l$jscomp$1(t$jscomp$6, i$jscomp$7, n$jscomp$5, s$jscomp$5);
}
i$jscomp$7(t$jscomp$6, o$jscomp$2, e$jscomp$14.defaultPrevented);
};
if (false !== d$jscomp$1(t$jscomp$6, r$jscomp$3)) {
o$jscomp$1.head.appendChild(r$jscomp$3);
}
}
function r$jscomp$2(e$jscomp$16, i$jscomp$8, n$jscomp$6) {
var r$jscomp$4;
var o$jscomp$3;
if (i$jscomp$8 && i$jscomp$8.trim && (r$jscomp$4 = i$jscomp$8), o$jscomp$3 = (r$jscomp$4 ? n$jscomp$6 : i$jscomp$8) || {}, r$jscomp$4) {
if (r$jscomp$4 in t$jscomp$3) {
throw "LoadJS";
}
t$jscomp$3[r$jscomp$4] = true;
}
!function(e$jscomp$17, t$jscomp$7, i$jscomp$9) {
var n$jscomp$7;
var s$jscomp$6;
var a$jscomp$3 = (e$jscomp$17 = e$jscomp$17.push ? e$jscomp$17 : [e$jscomp$17]).length;
var r$jscomp$5 = a$jscomp$3;
var o$jscomp$4 = [];
n$jscomp$7 = function(e$jscomp$18, i$jscomp$10, n$jscomp$8) {
if ("e" == i$jscomp$10 && o$jscomp$4.push(e$jscomp$18), "b" == i$jscomp$10) {
if (!n$jscomp$8) {
return;
}
o$jscomp$4.push(e$jscomp$18);
}
if (!--a$jscomp$3) {
t$jscomp$7(o$jscomp$4);
}
};
s$jscomp$6 = 0;
for (; s$jscomp$6 < r$jscomp$5; s$jscomp$6++) {
l$jscomp$1(e$jscomp$17[s$jscomp$6], n$jscomp$7, i$jscomp$9);
}
}(e$jscomp$16, function(e$jscomp$19) {
a$jscomp$1(o$jscomp$3, e$jscomp$19);
s$jscomp$3(r$jscomp$4, e$jscomp$19);
}, o$jscomp$3);
}
var e$jscomp$12 = function() {
};
var t$jscomp$3 = {};
var i$jscomp$5 = {};
var n$jscomp$4 = {};
return r$jscomp$2.ready = function(e$jscomp$20, t$jscomp$8) {
return function(e$jscomp$21, t$jscomp$9) {
var s$jscomp$7;
var a$jscomp$4;
var l$jscomp$2;
var r$jscomp$6 = [];
var o$jscomp$5 = (e$jscomp$21 = e$jscomp$21.push ? e$jscomp$21 : [e$jscomp$21]).length;
var c$jscomp$2 = o$jscomp$5;
s$jscomp$7 = function(e$jscomp$22, i$jscomp$11) {
if (i$jscomp$11.length) {
r$jscomp$6.push(e$jscomp$22);
}
if (!--c$jscomp$2) {
t$jscomp$9(r$jscomp$6);
}
};
for (; o$jscomp$5--;) {
a$jscomp$4 = e$jscomp$21[o$jscomp$5];
if (l$jscomp$2 = i$jscomp$5[a$jscomp$4]) {
s$jscomp$7(a$jscomp$4, l$jscomp$2);
} else {
(n$jscomp$4[a$jscomp$4] = n$jscomp$4[a$jscomp$4] || []).push(s$jscomp$7);
}
}
}(e$jscomp$20, function(e$jscomp$23) {
a$jscomp$1(t$jscomp$8, e$jscomp$23);
}), r$jscomp$2;
}, r$jscomp$2.done = function(e$jscomp$24) {
s$jscomp$3(e$jscomp$24, []);
}, r$jscomp$2.reset = function() {
t$jscomp$3 = {};
i$jscomp$5 = {};
n$jscomp$4 = {};
}, r$jscomp$2.isDefined = function(e$jscomp$25) {
return e$jscomp$25 in t$jscomp$3;
}, r$jscomp$2;
};
e$jscomp$11.exports = i$jscomp$4();
}(n$jscomp$3 = {
exports : {}
}, n$jscomp$3.exports), n$jscomp$3.exports);
var l$jscomp$0 = function(e$jscomp$26, t$jscomp$10) {
if (!(e$jscomp$26 instanceof t$jscomp$10)) {
throw new TypeError("Cannot call a class as a function");
}
};
var r$jscomp$1 = function() {
function e$jscomp$27(e$jscomp$28, t$jscomp$11) {
var i$jscomp$12 = 0;
for (; i$jscomp$12 < t$jscomp$11.length; i$jscomp$12++) {
var n$jscomp$9 = t$jscomp$11[i$jscomp$12];
n$jscomp$9.enumerable = n$jscomp$9.enumerable || false;
n$jscomp$9.configurable = true;
if ("value" in n$jscomp$9) {
n$jscomp$9.writable = true;
}
Object.defineProperty(e$jscomp$28, n$jscomp$9.key, n$jscomp$9);
}
}
return function(t$jscomp$12, i$jscomp$13, n$jscomp$10) {
return i$jscomp$13 && e$jscomp$27(t$jscomp$12.prototype, i$jscomp$13), n$jscomp$10 && e$jscomp$27(t$jscomp$12, n$jscomp$10), t$jscomp$12;
};
}();
var o$jscomp$0 = function(e$jscomp$29, t$jscomp$13, i$jscomp$14) {
return t$jscomp$13 in e$jscomp$29 ? Object.defineProperty(e$jscomp$29, t$jscomp$13, {
value : i$jscomp$14,
enumerable : true,
configurable : true,
writable : true
}) : e$jscomp$29[t$jscomp$13] = i$jscomp$14, e$jscomp$29;
};
var c$jscomp$0 = function() {
return function(e$jscomp$30, t$jscomp$14) {
if (Array.isArray(e$jscomp$30)) {
return e$jscomp$30;
}
if (Symbol.iterator in Object(e$jscomp$30)) {
return function(e$jscomp$31, t$jscomp$15) {
var i$jscomp$15 = [];
var n$jscomp$11 = true;
var s$jscomp$8 = false;
var a$jscomp$5 = void 0;
try {
var l$jscomp$3;
var r$jscomp$7 = e$jscomp$31[Symbol.iterator]();
for (; !(n$jscomp$11 = (l$jscomp$3 = r$jscomp$7.next()).done) && (i$jscomp$15.push(l$jscomp$3.value), !t$jscomp$15 || i$jscomp$15.length !== t$jscomp$15); n$jscomp$11 = true) {
}
} catch (e$jscomp$32) {
s$jscomp$8 = true;
a$jscomp$5 = e$jscomp$32;
} finally {
try {
if (!n$jscomp$11 && r$jscomp$7.return) {
r$jscomp$7.return();
}
} finally {
if (s$jscomp$8) {
throw a$jscomp$5;
}
}
}
return i$jscomp$15;
}(e$jscomp$30, t$jscomp$14);
}
throw new TypeError("Invalid attempt to destructure non-iterable instance");
};
}();
var u$jscomp$0 = {
is : {
plyr : function(e$jscomp$33) {
return this.instanceof(e$jscomp$33, window.Plyr);
},
object : function(e$jscomp$34) {
return this.getConstructor(e$jscomp$34) === Object;
},
number : function(e$jscomp$35) {
return this.getConstructor(e$jscomp$35) === Number && !Number.isNaN(e$jscomp$35);
},
string : function(e$jscomp$36) {
return this.getConstructor(e$jscomp$36) === String;
},
boolean : function(e$jscomp$37) {
return this.getConstructor(e$jscomp$37) === Boolean;
},
function : function(e$jscomp$38) {
return this.getConstructor(e$jscomp$38) === Function;
},
array : function(e$jscomp$39) {
return !this.nullOrUndefined(e$jscomp$39) && Array.isArray(e$jscomp$39);
},
weakMap : function(e$jscomp$40) {
return this.instanceof(e$jscomp$40, window.WeakMap);
},
nodeList : function(e$jscomp$41) {
return this.instanceof(e$jscomp$41, window.NodeList);
},
element : function(e$jscomp$42) {
return this.instanceof(e$jscomp$42, window.Element);
},
textNode : function(e$jscomp$43) {
return this.getConstructor(e$jscomp$43) === Text;
},
event : function(e$jscomp$44) {
return this.instanceof(e$jscomp$44, window.Event);
},
cue : function(e$jscomp$45) {
return this.instanceof(e$jscomp$45, window.TextTrackCue) || this.instanceof(e$jscomp$45, window.VTTCue);
},
track : function(e$jscomp$46) {
return this.instanceof(e$jscomp$46, TextTrack) || !this.nullOrUndefined(e$jscomp$46) && this.string(e$jscomp$46.kind);
},
url : function(e$jscomp$47) {
return !this.nullOrUndefined(e$jscomp$47) && /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/.test(e$jscomp$47);
},
nullOrUndefined : function(e$jscomp$48) {
return null === e$jscomp$48 || void 0 === e$jscomp$48;
},
empty : function(e$jscomp$49) {
return this.nullOrUndefined(e$jscomp$49) || (this.string(e$jscomp$49) || this.array(e$jscomp$49) || this.nodeList(e$jscomp$49)) && !e$jscomp$49.length || this.object(e$jscomp$49) && !Object.keys(e$jscomp$49).length;
},
instanceof : function(e$jscomp$50, t$jscomp$16) {
return Boolean(e$jscomp$50 && t$jscomp$16 && e$jscomp$50 instanceof t$jscomp$16);
},
getConstructor : function(e$jscomp$51) {
return this.nullOrUndefined(e$jscomp$51) ? null : e$jscomp$51.constructor;
}
},
getBrowser : function() {
return {
isIE : !!document.documentMode,
isWebkit : "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
isIPhone : /(iPhone|iPod)/gi.test(navigator.platform),
isIos : /(iPad|iPhone|iPod)/gi.test(navigator.platform)
};
},
fetch : function(e$jscomp$52) {
var t$jscomp$17 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
return new Promise(function(i$jscomp$16, n$jscomp$12) {
try {
var s$jscomp$9 = new XMLHttpRequest;
if (!("withCredentials" in s$jscomp$9)) {
return;
}
s$jscomp$9.addEventListener("load", function() {
if ("text" === t$jscomp$17) {
try {
i$jscomp$16(JSON.parse(s$jscomp$9.responseText));
} catch (e$jscomp$53) {
i$jscomp$16(s$jscomp$9.responseText);
}
} else {
i$jscomp$16(s$jscomp$9.response);
}
});
s$jscomp$9.addEventListener("error", function() {
throw new Error(s$jscomp$9.statusText);
});
s$jscomp$9.open("GET", e$jscomp$52, true);
s$jscomp$9.responseType = t$jscomp$17;
s$jscomp$9.send();
} catch (e$jscomp$54) {
n$jscomp$12(e$jscomp$54);
}
});
},
loadScript : function(e$jscomp$55) {
return new Promise(function(t$jscomp$18, i$jscomp$17) {
a$jscomp$0(e$jscomp$55, {
success : t$jscomp$18,
error : i$jscomp$17
});
});
},
loadSprite : function(e$jscomp$56, t$jscomp$19) {
function r$jscomp$8(e$jscomp$57) {
if (!(i$jscomp$18 && n$jscomp$13())) {
this.innerHTML = e$jscomp$57;
document.body.insertBefore(this, document.body.childNodes[0]);
}
}
if (u$jscomp$0.is.string(e$jscomp$56)) {
var i$jscomp$18 = u$jscomp$0.is.string(t$jscomp$19);
var n$jscomp$13 = function() {
return document.querySelectorAll("#" + t$jscomp$19).length;
};
if (!i$jscomp$18 || !n$jscomp$13()) {
var s$jscomp$10 = document.createElement("div");
if (u$jscomp$0.toggleHidden(s$jscomp$10, true), i$jscomp$18 && s$jscomp$10.setAttribute("id", t$jscomp$19), d$jscomp$0.storage) {
var a$jscomp$6 = window.localStorage.getItem("cache-" + t$jscomp$19);
if (null !== a$jscomp$6) {
var l$jscomp$4 = JSON.parse(a$jscomp$6);
return void r$jscomp$8.call(s$jscomp$10, l$jscomp$4.content);
}
}
u$jscomp$0.fetch(e$jscomp$56).then(function(e$jscomp$58) {
if (!u$jscomp$0.is.empty(e$jscomp$58)) {
if (d$jscomp$0.storage) {
window.localStorage.setItem("cache-" + t$jscomp$19, JSON.stringify({
content : e$jscomp$58
}));
}
r$jscomp$8.call(s$jscomp$10, e$jscomp$58);
}
}).catch(function() {
});
}
}
},
generateId : function(e$jscomp$59) {
return e$jscomp$59 + "-" + Math.floor(1E4 * Math.random());
},
wrap : function(e$jscomp$60, t$jscomp$20) {
var i$jscomp$19 = e$jscomp$60.length ? e$jscomp$60 : [e$jscomp$60];
Array.from(i$jscomp$19).reverse().forEach(function(e$jscomp$61, i$jscomp$20) {
var n$jscomp$14 = i$jscomp$20 > 0 ? t$jscomp$20.cloneNode(true) : t$jscomp$20;
var s$jscomp$11 = e$jscomp$61.parentNode;
var a$jscomp$7 = e$jscomp$61.nextSibling;
n$jscomp$14.appendChild(e$jscomp$61);
if (a$jscomp$7) {
s$jscomp$11.insertBefore(n$jscomp$14, a$jscomp$7);
} else {
s$jscomp$11.appendChild(n$jscomp$14);
}
});
},
createElement : function(e$jscomp$62, t$jscomp$21, i$jscomp$21) {
var n$jscomp$15 = document.createElement(e$jscomp$62);
return u$jscomp$0.is.object(t$jscomp$21) && u$jscomp$0.setAttributes(n$jscomp$15, t$jscomp$21), u$jscomp$0.is.string(i$jscomp$21) && (n$jscomp$15.textContent = i$jscomp$21), n$jscomp$15;
},
insertAfter : function(e$jscomp$63, t$jscomp$22) {
t$jscomp$22.parentNode.insertBefore(e$jscomp$63, t$jscomp$22.nextSibling);
},
insertElement : function(e$jscomp$64, t$jscomp$23, i$jscomp$22, n$jscomp$16) {
t$jscomp$23.appendChild(u$jscomp$0.createElement(e$jscomp$64, i$jscomp$22, n$jscomp$16));
},
removeElement : function(e$jscomp$65) {
if (u$jscomp$0.is.element(e$jscomp$65) && u$jscomp$0.is.element(e$jscomp$65.parentNode)) {
if (u$jscomp$0.is.nodeList(e$jscomp$65) || u$jscomp$0.is.array(e$jscomp$65)) {
Array.from(e$jscomp$65).forEach(u$jscomp$0.removeElement);
} else {
e$jscomp$65.parentNode.removeChild(e$jscomp$65);
}
}
},
emptyElement : function(e$jscomp$66) {
var t$jscomp$24 = e$jscomp$66.childNodes.length;
for (; t$jscomp$24 > 0;) {
e$jscomp$66.removeChild(e$jscomp$66.lastChild);
t$jscomp$24 = t$jscomp$24 - 1;
}
},
replaceElement : function(e$jscomp$67, t$jscomp$25) {
return u$jscomp$0.is.element(t$jscomp$25) && u$jscomp$0.is.element(t$jscomp$25.parentNode) && u$jscomp$0.is.element(e$jscomp$67) ? (t$jscomp$25.parentNode.replaceChild(e$jscomp$67, t$jscomp$25), e$jscomp$67) : null;
},
setAttributes : function(e$jscomp$68, t$jscomp$26) {
if (u$jscomp$0.is.element(e$jscomp$68) && !u$jscomp$0.is.empty(t$jscomp$26)) {
Object.entries(t$jscomp$26).forEach(function(t$jscomp$27) {
var i$jscomp$23 = c$jscomp$0(t$jscomp$27, 2);
var n$jscomp$17 = i$jscomp$23[0];
var s$jscomp$12 = i$jscomp$23[1];
e$jscomp$68.setAttribute(n$jscomp$17, s$jscomp$12);
});
}
},
getAttributesFromSelector : function(e$jscomp$69, t$jscomp$28) {
if (!u$jscomp$0.is.string(e$jscomp$69) || u$jscomp$0.is.empty(e$jscomp$69)) {
return {};
}
var i$jscomp$24 = {};
var n$jscomp$18 = t$jscomp$28;
return e$jscomp$69.split(",").forEach(function(e$jscomp$70) {
var t$jscomp$29 = e$jscomp$70.trim();
var s$jscomp$13 = t$jscomp$29.replace(".", "");
var a$jscomp$8 = t$jscomp$29.replace(/[[\]]/g, "").split("=");
var l$jscomp$5 = a$jscomp$8[0];
var r$jscomp$9 = a$jscomp$8.length > 1 ? a$jscomp$8[1].replace(/["']/g, "") : "";
switch(t$jscomp$29.charAt(0)) {
case ".":
if (u$jscomp$0.is.object(n$jscomp$18) && u$jscomp$0.is.string(n$jscomp$18.class)) {
n$jscomp$18.class += " " + s$jscomp$13;
}
i$jscomp$24.class = s$jscomp$13;
break;
case "#":
i$jscomp$24.id = t$jscomp$29.replace("#", "");
break;
case "[":
i$jscomp$24[l$jscomp$5] = r$jscomp$9;
}
}), i$jscomp$24;
},
toggleClass : function(e$jscomp$71, t$jscomp$30, i$jscomp$25) {
if (u$jscomp$0.is.element(e$jscomp$71)) {
var n$jscomp$19 = e$jscomp$71.classList.contains(t$jscomp$30);
return e$jscomp$71.classList[i$jscomp$25 ? "add" : "remove"](t$jscomp$30), i$jscomp$25 && !n$jscomp$19 || !i$jscomp$25 && n$jscomp$19;
}
return null;
},
hasClass : function(e$jscomp$72, t$jscomp$31) {
return u$jscomp$0.is.element(e$jscomp$72) && e$jscomp$72.classList.contains(t$jscomp$31);
},
toggleHidden : function(e$jscomp$73, t$jscomp$32) {
if (u$jscomp$0.is.element(e$jscomp$73)) {
if (t$jscomp$32) {
e$jscomp$73.setAttribute("hidden", "");
} else {
e$jscomp$73.removeAttribute("hidden");
}
}
},
matches : function(e$jscomp$74, t$jscomp$33) {
var i$jscomp$26 = {
Element : Element
};
var n$jscomp$20 = i$jscomp$26.matches || i$jscomp$26.webkitMatchesSelector || i$jscomp$26.mozMatchesSelector || i$jscomp$26.msMatchesSelector || function() {
return Array.from(document.querySelectorAll(t$jscomp$33)).includes(this);
};
return n$jscomp$20.call(e$jscomp$74, t$jscomp$33);
},
getElements : function(e$jscomp$75) {
return this.elements.container.querySelectorAll(e$jscomp$75);
},
getElement : function(e$jscomp$76) {
return this.elements.container.querySelector(e$jscomp$76);
},
findElements : function() {
try {
return this.elements.controls = u$jscomp$0.getElement.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
play : u$jscomp$0.getElements.call(this, this.config.selectors.buttons.play),
pause : u$jscomp$0.getElement.call(this, this.config.selectors.buttons.pause),
restart : u$jscomp$0.getElement.call(this, this.config.selectors.buttons.restart),
rewind : u$jscomp$0.getElement.call(this, this.config.selectors.buttons.rewind),
fastForward : u$jscomp$0.getElement.call(this, this.config.selectors.buttons.fastForward),
mute : u$jscomp$0.getElement.call(this, this.config.selectors.buttons.mute),
pip : u$jscomp$0.getElement.call(this, this.config.selectors.buttons.pip),
airplay : u$jscomp$0.getElement.call(this, this.config.selectors.buttons.airplay),
settings : u$jscomp$0.getElement.call(this, this.config.selectors.buttons.settings),
captions : u$jscomp$0.getElement.call(this, this.config.selectors.buttons.captions),
fullscreen : u$jscomp$0.getElement.call(this, this.config.selectors.buttons.fullscreen)
}, this.elements.progress = u$jscomp$0.getElement.call(this, this.config.selectors.progress), this.elements.inputs = {
seek : u$jscomp$0.getElement.call(this, this.config.selectors.inputs.seek),
volume : u$jscomp$0.getElement.call(this, this.config.selectors.inputs.volume)
}, this.elements.display = {
buffer : u$jscomp$0.getElement.call(this, this.config.selectors.display.buffer),
duration : u$jscomp$0.getElement.call(this, this.config.selectors.display.duration),
currentTime : u$jscomp$0.getElement.call(this, this.config.selectors.display.currentTime)
}, u$jscomp$0.is.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector("." + this.config.classNames.tooltip)), true;
} catch (e$jscomp$77) {
return this.debug.warn("It looks like there is a problem with your custom controls HTML", e$jscomp$77), this.toggleNativeControls(true), false;
}
},
getFocusElement : function() {
var e$jscomp$78 = document.activeElement;
return e$jscomp$78 = e$jscomp$78 && e$jscomp$78 !== document.body ? document.querySelector(":focus") : null;
},
trapFocus : function() {
var e$jscomp$79 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
var t$jscomp$34 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
if (u$jscomp$0.is.element(e$jscomp$79)) {
var i$jscomp$27 = u$jscomp$0.getElements.call(this, "button:not(:disabled), input:not(:disabled), [tabindex]");
var n$jscomp$21 = i$jscomp$27[0];
var s$jscomp$14 = i$jscomp$27[i$jscomp$27.length - 1];
var a$jscomp$9 = function(e$jscomp$80) {
if ("Tab" === e$jscomp$80.key && 9 === e$jscomp$80.keyCode) {
var t$jscomp$35 = u$jscomp$0.getFocusElement();
if (t$jscomp$35 !== s$jscomp$14 || e$jscomp$80.shiftKey) {
if (t$jscomp$35 === n$jscomp$21 && e$jscomp$80.shiftKey) {
s$jscomp$14.focus();
e$jscomp$80.preventDefault();
}
} else {
n$jscomp$21.focus();
e$jscomp$80.preventDefault();
}
}
};
if (t$jscomp$34) {
u$jscomp$0.on(this.elements.container, "keydown", a$jscomp$9, false);
} else {
u$jscomp$0.off(this.elements.container, "keydown", a$jscomp$9, false);
}
}
},
toggleListener : function(e$jscomp$81, t$jscomp$36, i$jscomp$28) {
var n$jscomp$22 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
var s$jscomp$15 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
var a$jscomp$10 = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
if (!u$jscomp$0.is.empty(e$jscomp$81) && !u$jscomp$0.is.empty(t$jscomp$36) && u$jscomp$0.is.function(i$jscomp$28)) {
if (u$jscomp$0.is.nodeList(e$jscomp$81) || u$jscomp$0.is.array(e$jscomp$81)) {
Array.from(e$jscomp$81).forEach(function(e$jscomp$82) {
if (e$jscomp$82 instanceof Node) {
u$jscomp$0.toggleListener.call(null, e$jscomp$82, t$jscomp$36, i$jscomp$28, n$jscomp$22, s$jscomp$15, a$jscomp$10);
}
});
} else {
var l$jscomp$6 = t$jscomp$36.split(" ");
var r$jscomp$10 = a$jscomp$10;
if (d$jscomp$0.passiveListeners) {
r$jscomp$10 = {
passive : s$jscomp$15,
capture : a$jscomp$10
};
}
l$jscomp$6.forEach(function(t$jscomp$37) {
e$jscomp$81[n$jscomp$22 ? "addEventListener" : "removeEventListener"](t$jscomp$37, i$jscomp$28, r$jscomp$10);
});
}
}
},
on : function(e$jscomp$83) {
var t$jscomp$38 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
var i$jscomp$29 = arguments[2];
var n$jscomp$23 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
var s$jscomp$16 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
u$jscomp$0.toggleListener(e$jscomp$83, t$jscomp$38, i$jscomp$29, true, n$jscomp$23, s$jscomp$16);
},
off : function(e$jscomp$84) {
var t$jscomp$39 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
var i$jscomp$30 = arguments[2];
var n$jscomp$24 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
var s$jscomp$17 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
u$jscomp$0.toggleListener(e$jscomp$84, t$jscomp$39, i$jscomp$30, false, n$jscomp$24, s$jscomp$17);
},
dispatchEvent : function(e$jscomp$85, t$jscomp$40, i$jscomp$31, n$jscomp$25) {
if (u$jscomp$0.is.element(e$jscomp$85) && u$jscomp$0.is.string(t$jscomp$40)) {
var s$jscomp$18 = new CustomEvent(t$jscomp$40, {
bubbles : !!u$jscomp$0.is.boolean(i$jscomp$31) && i$jscomp$31,
detail : Object.assign({}, n$jscomp$25, {
plyr : u$jscomp$0.is.plyr(this) ? this : null
})
});
e$jscomp$85.dispatchEvent(s$jscomp$18);
}
},
toggleState : function(e$jscomp$86, t$jscomp$41) {
if (u$jscomp$0.is.array(e$jscomp$86) || u$jscomp$0.is.nodeList(e$jscomp$86)) {
Array.from(e$jscomp$86).forEach(function(e$jscomp$87) {
return u$jscomp$0.toggleState(e$jscomp$87, t$jscomp$41);
});
} else {
if (u$jscomp$0.is.element(e$jscomp$86)) {
var i$jscomp$32 = "true" === e$jscomp$86.getAttribute("aria-pressed");
var n$jscomp$26 = u$jscomp$0.is.boolean(t$jscomp$41) ? t$jscomp$41 : !i$jscomp$32;
e$jscomp$86.setAttribute("aria-pressed", n$jscomp$26);
}
}
},
getPercentage : function(e$jscomp$88, t$jscomp$42) {
return 0 === e$jscomp$88 || 0 === t$jscomp$42 || Number.isNaN(e$jscomp$88) || Number.isNaN(t$jscomp$42) ? 0 : (e$jscomp$88 / t$jscomp$42 * 100).toFixed(2);
},
getHours : function(e$jscomp$89) {
return parseInt(e$jscomp$89 / 60 / 60 % 60, 10);
},
getMinutes : function(e$jscomp$90) {
return parseInt(e$jscomp$90 / 60 % 60, 10);
},
getSeconds : function(e$jscomp$91) {
return parseInt(e$jscomp$91 % 60, 10);
},
formatTime : function() {
var e$jscomp$92 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
var t$jscomp$43 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
var i$jscomp$33 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
if (!u$jscomp$0.is.number(e$jscomp$92)) {
return this.formatTime(null, t$jscomp$43, i$jscomp$33);
}
var n$jscomp$27 = function(e$jscomp$93) {
return ("0" + e$jscomp$93).slice(-2);
};
var s$jscomp$19 = this.getHours(e$jscomp$92);
var a$jscomp$11 = this.getMinutes(e$jscomp$92);
var l$jscomp$7 = this.getSeconds(e$jscomp$92);
return t$jscomp$43 || s$jscomp$19 > 0 ? s$jscomp$19 = s$jscomp$19 + ":" : s$jscomp$19 = "", (i$jscomp$33 ? "-" : "") + s$jscomp$19 + n$jscomp$27(a$jscomp$11) + ":" + n$jscomp$27(l$jscomp$7);
},
replaceAll : function() {
var e$jscomp$94 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
var t$jscomp$44 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
var i$jscomp$34 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
return e$jscomp$94.replace(new RegExp(t$jscomp$44.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i$jscomp$34.toString());
},
toTitleCase : function() {
return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/\w\S*/g, function(e$jscomp$95) {
return e$jscomp$95.charAt(0).toUpperCase() + e$jscomp$95.substr(1).toLowerCase();
});
},
toPascalCase : function() {
var e$jscomp$96 = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
return e$jscomp$96 = u$jscomp$0.replaceAll(e$jscomp$96, "-", " "), e$jscomp$96 = u$jscomp$0.replaceAll(e$jscomp$96, "_", " "), e$jscomp$96 = u$jscomp$0.toTitleCase(e$jscomp$96), u$jscomp$0.replaceAll(e$jscomp$96, " ", "");
},
toCamelCase : function() {
var e$jscomp$97 = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
return (e$jscomp$97 = u$jscomp$0.toPascalCase(e$jscomp$97)).charAt(0).toLowerCase() + e$jscomp$97.slice(1);
},
extend : function() {
var e$jscomp$98 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
var t$jscomp$45 = arguments.length;
var i$jscomp$35 = Array(t$jscomp$45 > 1 ? t$jscomp$45 - 1 : 0);
var n$jscomp$28 = 1;
for (; n$jscomp$28 < t$jscomp$45; n$jscomp$28++) {
i$jscomp$35[n$jscomp$28 - 1] = arguments[n$jscomp$28];
}
if (!i$jscomp$35.length) {
return e$jscomp$98;
}
var s$jscomp$20 = i$jscomp$35.shift();
return u$jscomp$0.is.object(s$jscomp$20) ? (Object.keys(s$jscomp$20).forEach(function(t$jscomp$46) {
if (u$jscomp$0.is.object(s$jscomp$20[t$jscomp$46])) {
if (!Object.keys(e$jscomp$98).includes(t$jscomp$46)) {
Object.assign(e$jscomp$98, o$jscomp$0({}, t$jscomp$46, {}));
}
u$jscomp$0.extend(e$jscomp$98[t$jscomp$46], s$jscomp$20[t$jscomp$46]);
} else {
Object.assign(e$jscomp$98, o$jscomp$0({}, t$jscomp$46, s$jscomp$20[t$jscomp$46]));
}
}), u$jscomp$0.extend.apply(u$jscomp$0, [e$jscomp$98].concat(function(e$jscomp$99) {
if (Array.isArray(e$jscomp$99)) {
var t$jscomp$47 = 0;
var i$jscomp$36 = Array(e$jscomp$99.length);
for (; t$jscomp$47 < e$jscomp$99.length; t$jscomp$47++) {
i$jscomp$36[t$jscomp$47] = e$jscomp$99[t$jscomp$47];
}
return i$jscomp$36;
}
return Array.from(e$jscomp$99);
}(i$jscomp$35)))) : e$jscomp$98;
},
getProviderByUrl : function(t$jscomp$48) {
return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(t$jscomp$48) ? e$jscomp$8.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{8,}(?=\b|\/)/.test(t$jscomp$48) ? e$jscomp$8.vimeo : /^https?:\/\/www.mp4upload.com\/video\/\d{8,}(?=\b|\/)/.test(t$jscomp$48) ? e$jscomp$8.mp4upload: null;
},
parseYouTubeId : function(e$jscomp$100) {
if (u$jscomp$0.is.empty(e$jscomp$100)) {
return null;
}
return e$jscomp$100.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : e$jscomp$100;
},
parseVimeoId : function(e$jscomp$101) {
if (u$jscomp$0.is.empty(e$jscomp$101)) {
return null;
}
if (u$jscomp$0.is.number(Number(e$jscomp$101))) {
return e$jscomp$101;
}
return e$jscomp$101.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : e$jscomp$101;
},
parseUrl : function(e$jscomp$102) {
var t$jscomp$49 = document.createElement("a");
return t$jscomp$49.href = e$jscomp$102, t$jscomp$49;
},
getUrlParams : function(e$jscomp$103) {
var t$jscomp$50 = e$jscomp$103;
if (e$jscomp$103.startsWith("http://") || e$jscomp$103.startsWith("https://")) {
t$jscomp$50 = this.parseUrl(e$jscomp$103).search;
}
return this.is.empty(t$jscomp$50) ? null : t$jscomp$50.slice(t$jscomp$50.indexOf("?") + 1).split("&").reduce(function(e$jscomp$104, t$jscomp$51) {
var i$jscomp$37 = t$jscomp$51.split("=");
var n$jscomp$29 = c$jscomp$0(i$jscomp$37, 2);
var s$jscomp$21 = n$jscomp$29[0];
var a$jscomp$12 = n$jscomp$29[1];
return Object.assign(e$jscomp$104, o$jscomp$0({}, s$jscomp$21, decodeURIComponent(a$jscomp$12)));
}, {});
},
buildUrlParams : function(e$jscomp$105) {
return u$jscomp$0.is.object(e$jscomp$105) ? Object.keys(e$jscomp$105).map(function(t$jscomp$52) {
return encodeURIComponent(t$jscomp$52) + "=" + encodeURIComponent(e$jscomp$105[t$jscomp$52]);
}).join("&") : "";
},
stripHTML : function(e$jscomp$106) {
var t$jscomp$53 = document.createDocumentFragment();
var i$jscomp$38 = document.createElement("div");
return t$jscomp$53.appendChild(i$jscomp$38), i$jscomp$38.innerHTML = e$jscomp$106, t$jscomp$53.firstChild.innerText;
},
getAspectRatio : function(e$jscomp$107, t$jscomp$54) {
var i$jscomp$39 = function e$jscomp$108(t$jscomp$55, i$jscomp$40) {
return 0 === i$jscomp$40 ? t$jscomp$55 : e$jscomp$108(i$jscomp$40, t$jscomp$55 % i$jscomp$40);
}(e$jscomp$107, t$jscomp$54);
return e$jscomp$107 / i$jscomp$39 + ":" + t$jscomp$54 / i$jscomp$39;
},
get transitionEndEvent() {
var e$jscomp$109 = document.createElement("span");
var t$jscomp$56 = {
WebkitTransition : "webkitTransitionEnd",
MozTransition : "transitionend",
OTransition : "oTransitionEnd otransitionend",
transition : "transitionend"
};
var i$jscomp$41 = Object.keys(t$jscomp$56).find(function(t$jscomp$57) {
return void 0 !== e$jscomp$109.style[t$jscomp$57];
});
return !!u$jscomp$0.is.string(i$jscomp$41) && t$jscomp$56[i$jscomp$41];
},
repaint : function(e$jscomp$110) {
setTimeout(function() {
u$jscomp$0.toggleHidden(e$jscomp$110, true);
e$jscomp$110.offsetHeight;
u$jscomp$0.toggleHidden(e$jscomp$110, false);
}, 0);
}
};
var d$jscomp$0 = {
audio : "canPlayType" in document.createElement("audio"),
video : "canPlayType" in document.createElement("video"),
check : function(e$jscomp$111, t$jscomp$58, i$jscomp$42) {
var n$jscomp$30 = false;
var s$jscomp$22 = false;
var a$jscomp$13 = u$jscomp$0.getBrowser();
var l$jscomp$8 = a$jscomp$13.isIPhone && i$jscomp$42 && d$jscomp$0.inline;
switch(t$jscomp$58 + ":" + e$jscomp$111) {
case "html5:video":
s$jscomp$22 = (n$jscomp$30 = d$jscomp$0.video) && d$jscomp$0.rangeInput && (!a$jscomp$13.isIPhone || l$jscomp$8);
break;
case "html5:audio":
s$jscomp$22 = (n$jscomp$30 = d$jscomp$0.audio) && d$jscomp$0.rangeInput;
break;
case "youtube:video":
case "vimeo:video":
case "mp4upload:video":
n$jscomp$30 = true;
s$jscomp$22 = d$jscomp$0.rangeInput && (!a$jscomp$13.isIPhone || l$jscomp$8);
break;
default:
s$jscomp$22 = (n$jscomp$30 = d$jscomp$0.audio && d$jscomp$0.video) && d$jscomp$0.rangeInput;
}
return {
api : n$jscomp$30,
ui : s$jscomp$22
};
},
pip : !u$jscomp$0.getBrowser().isIPhone && u$jscomp$0.is.function(u$jscomp$0.createElement("video").webkitSetPresentationMode),
airplay : u$jscomp$0.is.function(window.WebKitPlaybackTargetAvailabilityEvent),
inline : "playsInline" in document.createElement("video"),
mime : function(e$jscomp$112) {
var t$jscomp$59 = this.media;
try {
if (!this.isHTML5 || !u$jscomp$0.is.function(t$jscomp$59.canPlayType)) {
return false;
}
if (this.isVideo) {
switch(e$jscomp$112) {
case "video/webm":
return t$jscomp$59.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, "");
case "video/mp4":
return t$jscomp$59.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, "");
case "video/ogg":
return t$jscomp$59.canPlayType('video/ogg; codecs="theora"').replace(/no/, "");
default:
return false;
}
} else {
if (this.isAudio) {
switch(e$jscomp$112) {
case "audio/mpeg":
return t$jscomp$59.canPlayType("audio/mpeg;").replace(/no/, "");
case "audio/ogg":
return t$jscomp$59.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, "");
case "audio/wav":
return t$jscomp$59.canPlayType('audio/wav; codecs="1"').replace(/no/, "");
default:
return false;
}
}
}
} catch (e$jscomp$113) {
return false;
}
return false;
},
textTracks : "textTracks" in document.createElement("video"),
passiveListeners : function() {
var e$jscomp$114 = false;
try {
var t$jscomp$60 = Object.defineProperty({}, "passive", {
get : function() {
return e$jscomp$114 = true, null;
}
});
window.addEventListener("test", null, t$jscomp$60);
} catch (e$jscomp$115) {
}
return e$jscomp$114;
}(),
rangeInput : (s$jscomp$2 = document.createElement("input"), s$jscomp$2.type = "range", "range" === s$jscomp$2.type),
touch : "ontouchstart" in document.documentElement,
transitions : false !== u$jscomp$0.transitionEndEvent,
reducedMotion : "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
};
var p$jscomp$0 = function() {
};
var h$jscomp$6 = function() {
function e$jscomp$116() {
var t$jscomp$61 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
l$jscomp$0(this, e$jscomp$116);
this.enabled = window.console && t$jscomp$61;
if (this.enabled) {
this.log("Debugging enabled");
}
}
return r$jscomp$1(e$jscomp$116, [{
key : "log",
get : function() {
return this.enabled ? Function.prototype.bind.call(console.log, console) : p$jscomp$0;
}
}, {
key : "warn",
get : function() {
return this.enabled ? Function.prototype.bind.call(console.warn, console) : p$jscomp$0;
}
}, {
key : "error",
get : function() {
return this.enabled ? Function.prototype.bind.call(console.error, console) : p$jscomp$0;
}
}]), e$jscomp$116;
}();
var m$jscomp$0 = u$jscomp$0.getBrowser();
var y$jscomp$59 = function() {
function e$jscomp$117(t$jscomp$62) {
var i$jscomp$43 = this;
l$jscomp$0(this, e$jscomp$117);
this.player = t$jscomp$62;
this.prefix = e$jscomp$117.prefix;
this.name = e$jscomp$117.name;
this.scrollPosition = {
x : 0,
y : 0
};
u$jscomp$0.on(document, "ms" === this.prefix ? "MSFullscreenChange" : this.prefix + "fullscreenchange", function() {
g$jscomp$0.call(i$jscomp$43);
});
u$jscomp$0.on(this.player.elements.container, "dblclick", function() {
i$jscomp$43.toggle();
});
u$jscomp$0.on(this.player.elements.controls, "dblclick", function(e$jscomp$118) {
return e$jscomp$118.stopPropagation();
});
this.update();
}
return r$jscomp$1(e$jscomp$117, [{
key : "update",
value : function() {
if (this.enabled) {
this.player.debug.log((e$jscomp$117.native ? "Native" : "Fallback") + " fullscreen enabled");
} else {
this.player.debug.log("Fullscreen not supported and fallback disabled");
}
u$jscomp$0.toggleClass(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled);
}
}, {
key : "enter",
value : function() {
if (this.enabled) {
if (m$jscomp$0.isIos && this.player.config.fullscreen.iosNative) {
if (this.player.playing) {
this.target.webkitEnterFullscreen();
}
} else {
if (e$jscomp$117.native) {
if (this.prefix) {
if (!u$jscomp$0.is.empty(this.prefix)) {
this.target[this.prefix + "Request" + this.name]();
}
} else {
this.target.requestFullscreen();
}
} else {
f$jscomp$1.call(this, true);
}
}
}
}
}, {
key : "exit",
value : function() {
if (this.enabled) {
if (m$jscomp$0.isIos && this.player.config.fullscreen.iosNative) {
this.target.webkitExitFullscreen();
this.player.play();
} else {
if (e$jscomp$117.native) {
if (this.prefix) {
if (!u$jscomp$0.is.empty(this.prefix)) {
var t$jscomp$63 = "moz" === this.prefix ? "Cancel" : "Exit";
document["" + this.prefix + t$jscomp$63 + this.name]();
}
} else {
document.cancelFullScreen();
}
} else {
f$jscomp$1.call(this, false);
}
}
}
}
}, {
key : "toggle",
value : function() {
if (this.active) {
this.exit();
} else {
this.enter();
}
}
}, {
key : "enabled",
get : function() {
return (e$jscomp$117.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo;
}
}, {
key : "active",
get : function() {
return !!this.enabled && (e$jscomp$117.native ? (this.prefix ? document["" + this.prefix + this.name + "Element"] : document.fullscreenElement) === this.target : u$jscomp$0.hasClass(this.target, this.player.config.classNames.fullscreen.fallback));
}
}, {
key : "target",
get : function() {
return m$jscomp$0.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.container;
}
}], [{
key : "native",
get : function() {
return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
}
}, {
key : "prefix",
get : function() {
if (u$jscomp$0.is.function(document.exitFullscreen)) {
return false;
}
var e$jscomp$119 = "";
return ["webkit", "moz", "ms"].some(function(t$jscomp$64) {
return !(!u$jscomp$0.is.function(document[t$jscomp$64 + "ExitFullscreen"]) && !u$jscomp$0.is.function(document[t$jscomp$64 + "CancelFullScreen"])) && (e$jscomp$119 = t$jscomp$64, true);
}), e$jscomp$119;
}
}, {
key : "name",
get : function() {
return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
}
}]), e$jscomp$117;
}();
var v$jscomp$0 = {
setup : function() {
if (this.supported.ui) {
var e$jscomp$120 = this.storage.get("language");
if (u$jscomp$0.is.empty(e$jscomp$120) || (this.captions.language = e$jscomp$120), u$jscomp$0.is.empty(this.captions.language) && (this.captions.language = this.config.captions.language.toLowerCase()), !u$jscomp$0.is.boolean(this.captions.active)) {
var t$jscomp$65 = this.storage.get("captions");
if (u$jscomp$0.is.boolean(t$jscomp$65)) {
this.captions.active = t$jscomp$65;
} else {
this.captions.active = this.config.captions.active;
}
}
if (!this.isVideo || this.isYouTube || this.isHTML5 && !d$jscomp$0.textTracks) {
if (u$jscomp$0.is.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions")) {
E$jscomp$0.setCaptionsMenu.call(this);
}
} else {
if (!u$jscomp$0.is.element(this.elements.captions)) {
this.elements.captions = u$jscomp$0.createElement("div", u$jscomp$0.getAttributesFromSelector(this.config.selectors.captions));
u$jscomp$0.insertAfter(this.elements.captions, this.elements.wrapper);
}
u$jscomp$0.toggleClass(this.elements.container, this.config.classNames.captions.enabled, !u$jscomp$0.is.empty(v$jscomp$0.getTracks.call(this)));
var i$jscomp$44 = v$jscomp$0.getTracks.call(this);
if (!u$jscomp$0.is.empty(i$jscomp$44)) {
if (u$jscomp$0.getBrowser().isIE && window.URL) {
var n$jscomp$31 = this.media.querySelectorAll("track");
Array.from(n$jscomp$31).forEach(function(e$jscomp$121) {
var t$jscomp$66 = e$jscomp$121.getAttribute("src");
var i$jscomp$45 = u$jscomp$0.parseUrl(t$jscomp$66);
if (i$jscomp$45.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i$jscomp$45.protocol)) {
u$jscomp$0.fetch(t$jscomp$66, "blob").then(function(t$jscomp$67) {
e$jscomp$121.setAttribute("src", window.URL.createObjectURL(t$jscomp$67));
}).catch(function() {
u$jscomp$0.removeElement(e$jscomp$121);
});
}
});
}
v$jscomp$0.setLanguage.call(this);
v$jscomp$0.show.call(this);
if (u$jscomp$0.is.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions")) {
E$jscomp$0.setCaptionsMenu.call(this);
}
}
}
}
},
setLanguage : function() {
var e$jscomp$122 = this;
if (this.isHTML5 && this.isVideo) {
v$jscomp$0.getTracks.call(this).forEach(function(t$jscomp$69) {
u$jscomp$0.on(t$jscomp$69, "cuechange", function(t$jscomp$70) {
return v$jscomp$0.setCue.call(e$jscomp$122, t$jscomp$70);
});
t$jscomp$69.mode = "hidden";
});
var t$jscomp$68 = v$jscomp$0.getCurrentTrack.call(this);
if (u$jscomp$0.is.track(t$jscomp$68) && Array.from(t$jscomp$68.activeCues || []).length) {
v$jscomp$0.setCue.call(this, t$jscomp$68);
}
} else {
if (this.isVimeo && this.captions.active) {
this.embed.enableTextTrack(this.language);
}
}
},
getTracks : function() {
return u$jscomp$0.is.nullOrUndefined(this.media) ? [] : Array.from(this.media.textTracks || []).filter(function(e$jscomp$123) {
return ["captions", "subtitles"].includes(e$jscomp$123.kind);
});
},
getCurrentTrack : function() {
var e$jscomp$124 = this;
return v$jscomp$0.getTracks.call(this).find(function(t$jscomp$71) {
return t$jscomp$71.language.toLowerCase() === e$jscomp$124.language;
});
},
setCue : function(e$jscomp$125) {
var t$jscomp$72 = u$jscomp$0.is.event(e$jscomp$125) ? e$jscomp$125.target : e$jscomp$125;
var i$jscomp$46 = t$jscomp$72.activeCues;
var n$jscomp$32 = i$jscomp$46.length && i$jscomp$46[0];
if (t$jscomp$72 === v$jscomp$0.getCurrentTrack.call(this)) {
if (u$jscomp$0.is.cue(n$jscomp$32)) {
v$jscomp$0.setText.call(this, n$jscomp$32.getCueAsHTML());
} else {
v$jscomp$0.setText.call(this, null);
}
u$jscomp$0.dispatchEvent.call(this, this.media, "cuechange");
}
},
setText : function(e$jscomp$126) {
if (this.supported.ui) {
if (u$jscomp$0.is.element(this.elements.captions)) {
var t$jscomp$73 = u$jscomp$0.createElement("span");
u$jscomp$0.emptyElement(this.elements.captions);
var i$jscomp$47 = u$jscomp$0.is.nullOrUndefined(e$jscomp$126) ? "" : e$jscomp$126;
if (u$jscomp$0.is.string(i$jscomp$47)) {
t$jscomp$73.textContent = i$jscomp$47.trim();
} else {
t$jscomp$73.appendChild(i$jscomp$47);
}
this.elements.captions.appendChild(t$jscomp$73);
} else {
this.debug.warn("No captions element to render to");
}
}
},
show : function() {
if (u$jscomp$0.is.element(this.elements.buttons.captions)) {
var e$jscomp$127 = this.storage.get("captions");
if (u$jscomp$0.is.boolean(e$jscomp$127)) {
this.captions.active = e$jscomp$127;
} else {
e$jscomp$127 = this.config.captions.active;
}
if (e$jscomp$127) {
u$jscomp$0.toggleClass(this.elements.container, this.config.classNames.captions.active, true);
u$jscomp$0.toggleState(this.elements.buttons.captions, true);
}
}
}
};
var b$jscomp$0 = function() {
var e$jscomp$128 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
var t$jscomp$74 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
if (u$jscomp$0.is.empty(e$jscomp$128) || u$jscomp$0.is.empty(t$jscomp$74) || !Object.keys(t$jscomp$74.i18n).includes(e$jscomp$128)) {
return "";
}
var i$jscomp$48 = t$jscomp$74.i18n[e$jscomp$128];
var n$jscomp$33 = {
"{seektime}" : t$jscomp$74.seekTime,
"{title}" : t$jscomp$74.title
};
return Object.entries(n$jscomp$33).forEach(function(e$jscomp$129) {
var t$jscomp$75 = c$jscomp$0(e$jscomp$129, 2);
var n$jscomp$34 = t$jscomp$75[0];
var s$jscomp$23 = t$jscomp$75[1];
i$jscomp$48 = u$jscomp$0.replaceAll(i$jscomp$48, n$jscomp$34, s$jscomp$23);
}), i$jscomp$48;
};
var k$jscomp$0 = {
addStyleHook : function() {
u$jscomp$0.toggleClass(this.elements.container, this.config.selectors.container.replace(".", ""), true);
u$jscomp$0.toggleClass(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
},
toggleNativeControls : function() {
if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.isHTML5) {
this.media.setAttribute("controls", "");
} else {
this.media.removeAttribute("controls");
}
},
build : function() {
var e$jscomp$130 = this;
if (this.listeners.media(), !this.supported.ui) {
return this.debug.warn("Basic support only for " + this.provider + " " + this.type), void k$jscomp$0.toggleNativeControls.call(this, true);
}
if (!u$jscomp$0.is.element(this.elements.controls)) {
E$jscomp$0.inject.call(this);
this.listeners.controls();
}
if (u$jscomp$0.is.element(this.elements.controls)) {
k$jscomp$0.toggleNativeControls.call(this);
v$jscomp$0.setup.call(this);
this.volume = null;
this.muted = null;
this.speed = null;
this.loop = null;
this.options.quality = [];
k$jscomp$0.timeUpdate.call(this);
k$jscomp$0.checkPlaying.call(this);
this.ready = true;
setTimeout(function() {
u$jscomp$0.dispatchEvent.call(e$jscomp$130, e$jscomp$130.media, "ready");
}, 0);
k$jscomp$0.setTitle.call(this);
}
},
setTitle : function() {
var e$jscomp$131 = b$jscomp$0("play", this.config);
if (u$jscomp$0.is.string(this.config.title) && !u$jscomp$0.is.empty(this.config.title) && (e$jscomp$131 = e$jscomp$131 + (", " + this.config.title), this.elements.container.setAttribute("aria-label", this.config.title)), u$jscomp$0.is.nodeList(this.elements.buttons.play) && Array.from(this.elements.buttons.play).forEach(function(t$jscomp$77) {
t$jscomp$77.setAttribute("aria-label", e$jscomp$131);
}), this.isEmbed) {
var t$jscomp$76 = u$jscomp$0.getElement.call(this, "iframe");
if (!u$jscomp$0.is.element(t$jscomp$76)) {
return;
}
if (!u$jscomp$0.is.empty(this.config.title)) {
this.config.title;
}
t$jscomp$76.setAttribute("title", b$jscomp$0("frameTitle", this.config));
}
},
checkPlaying : function() {
u$jscomp$0.toggleClass(this.elements.container, this.config.classNames.playing, this.playing);
u$jscomp$0.toggleClass(this.elements.container, this.config.classNames.stopped, this.paused);
u$jscomp$0.toggleState(this.elements.buttons.play, this.playing);
this.toggleControls(!this.playing);
},
checkLoading : function(e$jscomp$132) {
var t$jscomp$78 = this;
this.loading = ["stalled", "waiting"].includes(e$jscomp$132.type);
clearTimeout(this.timers.loading);
this.timers.loading = setTimeout(function() {
u$jscomp$0.toggleClass(t$jscomp$78.elements.container, t$jscomp$78.config.classNames.loading, t$jscomp$78.loading);
t$jscomp$78.toggleControls(t$jscomp$78.loading);
}, this.loading ? 250 : 0);
},
checkFailed : function() {
var e$jscomp$133 = this;
this.failed = 3 === this.media.networkState;
if (this.failed) {
u$jscomp$0.toggleClass(this.elements.container, this.config.classNames.loading, false);
u$jscomp$0.toggleClass(this.elements.container, this.config.classNames.error, true);
}
clearTimeout(this.timers.failed);
this.timers.loading = setTimeout(function() {
u$jscomp$0.toggleClass(e$jscomp$133.elements.container, e$jscomp$133.config.classNames.loading, e$jscomp$133.loading);
e$jscomp$133.toggleControls(e$jscomp$133.loading);
}, this.loading ? 250 : 0);
},
updateVolume : function() {
if (this.supported.ui) {
if (u$jscomp$0.is.element(this.elements.inputs.volume)) {
k$jscomp$0.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume);
}
if (u$jscomp$0.is.element(this.elements.buttons.mute)) {
u$jscomp$0.toggleState(this.elements.buttons.mute, this.muted || 0 === this.volume);
}
}
},
setRange : function(e$jscomp$134) {
var t$jscomp$79 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
if (u$jscomp$0.is.element(e$jscomp$134)) {
e$jscomp$134.value = t$jscomp$79;
E$jscomp$0.updateRangeFill.call(this, e$jscomp$134);
}
},
setProgress : function(e$jscomp$135, t$jscomp$80) {
var i$jscomp$49 = u$jscomp$0.is.number(t$jscomp$80) ? t$jscomp$80 : 0;
var n$jscomp$35 = u$jscomp$0.is.element(e$jscomp$135) ? e$jscomp$135 : this.elements.display.buffer;
if (u$jscomp$0.is.element(n$jscomp$35)) {
n$jscomp$35.value = i$jscomp$49;
var s$jscomp$24 = n$jscomp$35.getElementsByTagName("span")[0];
if (u$jscomp$0.is.element(s$jscomp$24)) {
s$jscomp$24.childNodes[0].nodeValue = i$jscomp$49;
}
}
},
updateProgress : function(e$jscomp$136) {
if (this.supported.ui && u$jscomp$0.is.event(e$jscomp$136)) {
var t$jscomp$81 = 0;
if (e$jscomp$136) {
switch(e$jscomp$136.type) {
case "timeupdate":
case "seeking":
t$jscomp$81 = u$jscomp$0.getPercentage(this.currentTime, this.duration);
if ("timeupdate" === e$jscomp$136.type) {
k$jscomp$0.setRange.call(this, this.elements.inputs.seek, t$jscomp$81);
}
break;
case "playing":
case "progress":
k$jscomp$0.setProgress.call(this, this.elements.display.buffer, 100 * this.buffered);
}
}
}
},
updateTimeDisplay : function() {
var e$jscomp$137 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
var t$jscomp$82 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
var i$jscomp$50 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
if (u$jscomp$0.is.element(e$jscomp$137) && u$jscomp$0.is.number(t$jscomp$82)) {
var n$jscomp$36 = u$jscomp$0.getHours(this.duration) > 0;
e$jscomp$137.textContent = u$jscomp$0.formatTime(t$jscomp$82, n$jscomp$36, i$jscomp$50);
}
},
timeUpdate : function(e$jscomp$138) {
var t$jscomp$83 = !u$jscomp$0.is.element(this.elements.display.duration) && this.config.invertTime;
k$jscomp$0.updateTimeDisplay.call(this, this.elements.display.currentTime, t$jscomp$83 ? this.duration - this.currentTime : this.currentTime, t$jscomp$83);
if (!(e$jscomp$138 && "timeupdate" === e$jscomp$138.type && this.media.seeking)) {
k$jscomp$0.updateProgress.call(this, e$jscomp$138);
}
},
durationUpdate : function() {
if (this.supported.ui) {
var e$jscomp$139 = u$jscomp$0.is.element(this.elements.display.duration);
if (!e$jscomp$139 && this.config.displayDuration && this.paused) {
k$jscomp$0.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration);
}
if (e$jscomp$139) {
k$jscomp$0.updateTimeDisplay.call(this, this.elements.display.duration, this.duration);
}
E$jscomp$0.updateSeekTooltip.call(this);
}
}
};
var w$jscomp$7 = u$jscomp$0.getBrowser();
var E$jscomp$0 = {
updateRangeFill : function(e$jscomp$140) {
if (w$jscomp$7.isWebkit) {
var t$jscomp$84 = u$jscomp$0.is.event(e$jscomp$140) ? e$jscomp$140.target : e$jscomp$140;
if (u$jscomp$0.is.element(t$jscomp$84) && "range" === t$jscomp$84.getAttribute("type")) {
t$jscomp$84.style.setProperty("--value", t$jscomp$84.value / t$jscomp$84.max * 100 + "%");
}
}
},
getIconUrl : function() {
return {
url : this.config.iconUrl,
absolute : 0 === this.config.iconUrl.indexOf("http") || w$jscomp$7.isIE && !window.svg4everybody
};
},
createIcon : function(e$jscomp$141, t$jscomp$85) {
var i$jscomp$51 = E$jscomp$0.getIconUrl.call(this);
var n$jscomp$37 = (i$jscomp$51.absolute ? "" : i$jscomp$51.url) + "#" + this.config.iconPrefix;
var s$jscomp$25 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
u$jscomp$0.setAttributes(s$jscomp$25, u$jscomp$0.extend(t$jscomp$85, {
role : "presentation"
}));
var a$jscomp$14 = document.createElementNS("http://www.w3.org/2000/svg", "use");
var l$jscomp$9 = n$jscomp$37 + "-" + e$jscomp$141;
return "href" in a$jscomp$14 ? a$jscomp$14.setAttributeNS("http://www.w3.org/1999/xlink", "href", l$jscomp$9) : a$jscomp$14.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l$jscomp$9), s$jscomp$25.appendChild(a$jscomp$14), s$jscomp$25;
},
createLabel : function(e$jscomp$142, t$jscomp$86) {
var i$jscomp$52 = b$jscomp$0(e$jscomp$142, this.config);
var n$jscomp$38 = Object.assign({}, t$jscomp$86);
switch(e$jscomp$142) {
case "pip":
i$jscomp$52 = "PIP";
break;
case "airplay":
i$jscomp$52 = "AirPlay";
}
return "class" in n$jscomp$38 ? n$jscomp$38.class += " " + this.config.classNames.hidden : n$jscomp$38.class = this.config.classNames.hidden, u$jscomp$0.createElement("span", n$jscomp$38, i$jscomp$52);
},
createBadge : function(e$jscomp$143) {
if (u$jscomp$0.is.empty(e$jscomp$143)) {
return null;
}
var t$jscomp$87 = u$jscomp$0.createElement("span", {
class : this.config.classNames.menu.value
});
return t$jscomp$87.appendChild(u$jscomp$0.createElement("span", {
class : this.config.classNames.menu.badge
}, e$jscomp$143)), t$jscomp$87;
},
createButton : function(e$jscomp$144, t$jscomp$88) {
var i$jscomp$53 = u$jscomp$0.createElement("button");
var n$jscomp$39 = Object.assign({}, t$jscomp$88);
var s$jscomp$26 = u$jscomp$0.toCamelCase(e$jscomp$144);
var a$jscomp$15 = false;
var l$jscomp$10 = void 0;
var r$jscomp$11 = void 0;
var o$jscomp$6 = void 0;
var c$jscomp$3 = void 0;
switch("type" in n$jscomp$39 || (n$jscomp$39.type = "button"), "class" in n$jscomp$39 ? n$jscomp$39.class.includes(this.config.classNames.control) && (n$jscomp$39.class += " " + this.config.classNames.control) : n$jscomp$39.class = this.config.classNames.control, e$jscomp$144) {
case "play":
a$jscomp$15 = true;
l$jscomp$10 = "play";
o$jscomp$6 = "pause";
r$jscomp$11 = "play";
c$jscomp$3 = "pause";
break;
case "mute":
a$jscomp$15 = true;
l$jscomp$10 = "mute";
o$jscomp$6 = "unmute";
r$jscomp$11 = "volume";
c$jscomp$3 = "muted";
break;
case "captions":
a$jscomp$15 = true;
l$jscomp$10 = "enableCaptions";
o$jscomp$6 = "disableCaptions";
r$jscomp$11 = "captions-off";
c$jscomp$3 = "captions-on";
break;
case "fullscreen":
a$jscomp$15 = true;
l$jscomp$10 = "enterFullscreen";
o$jscomp$6 = "exitFullscreen";
r$jscomp$11 = "enter-fullscreen";
c$jscomp$3 = "exit-fullscreen";
break;
case "play-large":
n$jscomp$39.class += " " + this.config.classNames.control + "--overlaid";
s$jscomp$26 = "play";
l$jscomp$10 = "play";
r$jscomp$11 = "play";
break;
default:
l$jscomp$10 = s$jscomp$26;
r$jscomp$11 = e$jscomp$144;
}
return a$jscomp$15 ? (i$jscomp$53.appendChild(E$jscomp$0.createIcon.call(this, c$jscomp$3, {
class : "icon--pressed"
})), i$jscomp$53.appendChild(E$jscomp$0.createIcon.call(this, r$jscomp$11, {
class : "icon--not-pressed"
})), i$jscomp$53.appendChild(E$jscomp$0.createLabel.call(this, o$jscomp$6, {
class : "label--pressed"
})), i$jscomp$53.appendChild(E$jscomp$0.createLabel.call(this, l$jscomp$10, {
class : "label--not-pressed"
})), n$jscomp$39["aria-pressed"] = false, n$jscomp$39["aria-label"] = b$jscomp$0(l$jscomp$10, this.config)) : (i$jscomp$53.appendChild(E$jscomp$0.createIcon.call(this, r$jscomp$11)), i$jscomp$53.appendChild(E$jscomp$0.createLabel.call(this, l$jscomp$10))), u$jscomp$0.extend(n$jscomp$39, u$jscomp$0.getAttributesFromSelector(this.config.selectors.buttons[s$jscomp$26], n$jscomp$39)), u$jscomp$0.setAttributes(i$jscomp$53, n$jscomp$39), "play" === s$jscomp$26 ? (u$jscomp$0.is.array(this.elements.buttons[s$jscomp$26]) || 
(this.elements.buttons[s$jscomp$26] = []), this.elements.buttons[s$jscomp$26].push(i$jscomp$53)) : this.elements.buttons[s$jscomp$26] = i$jscomp$53, i$jscomp$53;
},
createRange : function(e$jscomp$145, t$jscomp$89) {
var i$jscomp$54 = u$jscomp$0.createElement("label", {
for : t$jscomp$89.id,
class : this.config.classNames.hidden
}, b$jscomp$0(e$jscomp$145, this.config));
var n$jscomp$40 = u$jscomp$0.createElement("input", u$jscomp$0.extend(u$jscomp$0.getAttributesFromSelector(this.config.selectors.inputs[e$jscomp$145]), {
type : "range",
min : 0,
max : 100,
step : .01,
value : 0,
autocomplete : "off"
}, t$jscomp$89));
return this.elements.inputs[e$jscomp$145] = n$jscomp$40, E$jscomp$0.updateRangeFill.call(this, n$jscomp$40), {
label : i$jscomp$54,
input : n$jscomp$40
};
},
createProgress : function(e$jscomp$146, t$jscomp$90) {
var i$jscomp$55 = u$jscomp$0.createElement("progress", u$jscomp$0.extend(u$jscomp$0.getAttributesFromSelector(this.config.selectors.display[e$jscomp$146]), {
min : 0,
max : 100,
value : 0
}, t$jscomp$90));
if ("volume" !== e$jscomp$146) {
i$jscomp$55.appendChild(u$jscomp$0.createElement("span", null, "0"));
var n$jscomp$41 = "";
switch(e$jscomp$146) {
case "played":
n$jscomp$41 = b$jscomp$0("played", this.config);
break;
case "buffer":
n$jscomp$41 = b$jscomp$0("buffered", this.config);
}
i$jscomp$55.textContent = "% " + n$jscomp$41.toLowerCase();
}
return this.elements.display[e$jscomp$146] = i$jscomp$55, i$jscomp$55;
},
createTime : function(e$jscomp$147) {
var t$jscomp$91 = u$jscomp$0.createElement("div", {
class : "plyr__time"
});
return t$jscomp$91.appendChild(u$jscomp$0.createElement("span", {
class : this.config.classNames.hidden
}, b$jscomp$0(e$jscomp$147, this.config))), t$jscomp$91.appendChild(u$jscomp$0.createElement("span", u$jscomp$0.getAttributesFromSelector(this.config.selectors.display[e$jscomp$147]), "00:00")), this.elements.display[e$jscomp$147] = t$jscomp$91, t$jscomp$91;
},
createMenuItem : function(e$jscomp$148, t$jscomp$92, i$jscomp$56, n$jscomp$42) {
var s$jscomp$27 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
var a$jscomp$16 = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
var l$jscomp$11 = u$jscomp$0.createElement("li");
var r$jscomp$12 = u$jscomp$0.createElement("label", {
class : this.config.classNames.control
});
var o$jscomp$7 = u$jscomp$0.createElement("input", u$jscomp$0.extend(u$jscomp$0.getAttributesFromSelector(this.config.selectors.inputs[i$jscomp$56]), {
type : "radio",
name : "plyr-" + i$jscomp$56,
value : e$jscomp$148,
checked : a$jscomp$16,
class : "plyr__sr-only"
}));
var c$jscomp$4 = u$jscomp$0.createElement("span", {
"aria-hidden" : true
});
r$jscomp$12.appendChild(o$jscomp$7);
r$jscomp$12.appendChild(c$jscomp$4);
r$jscomp$12.insertAdjacentHTML("beforeend", n$jscomp$42);
if (u$jscomp$0.is.element(s$jscomp$27)) {
r$jscomp$12.appendChild(s$jscomp$27);
}
l$jscomp$11.appendChild(r$jscomp$12);
t$jscomp$92.appendChild(l$jscomp$11);
},
updateSeekTooltip : function(e$jscomp$149) {
var t$jscomp$93 = this;
if (this.config.tooltips.seek && u$jscomp$0.is.element(this.elements.inputs.seek) && u$jscomp$0.is.element(this.elements.display.seekTooltip) && 0 !== this.duration) {
var i$jscomp$57 = 0;
var n$jscomp$43 = this.elements.inputs.seek.getBoundingClientRect();
var s$jscomp$28 = this.config.classNames.tooltip + "--visible";
var a$jscomp$17 = function(e$jscomp$150) {
u$jscomp$0.toggleClass(t$jscomp$93.elements.display.seekTooltip, s$jscomp$28, e$jscomp$150);
};
if (this.touch) {
a$jscomp$17(false);
} else {
if (u$jscomp$0.is.event(e$jscomp$149)) {
i$jscomp$57 = 100 / n$jscomp$43.width * (e$jscomp$149.pageX - n$jscomp$43.left);
} else {
if (!u$jscomp$0.hasClass(this.elements.display.seekTooltip, s$jscomp$28)) {
return;
}
i$jscomp$57 = parseFloat(this.elements.display.seekTooltip.style.left, 10);
}
if (i$jscomp$57 < 0) {
i$jscomp$57 = 0;
} else {
if (i$jscomp$57 > 100) {
i$jscomp$57 = 100;
}
}
k$jscomp$0.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * i$jscomp$57);
this.elements.display.seekTooltip.style.left = i$jscomp$57 + "%";
if (u$jscomp$0.is.event(e$jscomp$149) && ["mouseenter", "mouseleave"].includes(e$jscomp$149.type)) {
a$jscomp$17("mouseenter" === e$jscomp$149.type);
}
}
}
},
toggleTab : function(e$jscomp$151, t$jscomp$94) {
var i$jscomp$58 = this.elements.settings.tabs[e$jscomp$151];
var n$jscomp$44 = this.elements.settings.panes[e$jscomp$151];
u$jscomp$0.toggleHidden(i$jscomp$58, !t$jscomp$94);
u$jscomp$0.toggleHidden(n$jscomp$44, !t$jscomp$94);
},
setQualityMenu : function(e$jscomp$152) {
var t$jscomp$95 = this;
if (u$jscomp$0.is.element(this.elements.settings.panes.quality)) {
var i$jscomp$59 = this.elements.settings.panes.quality.querySelector("ul");
if (u$jscomp$0.is.array(e$jscomp$152)) {
this.options.quality = e$jscomp$152.filter(function(e$jscomp$153) {
return t$jscomp$95.config.quality.options.includes(e$jscomp$153);
});
} else {
this.options.quality = this.config.quality.options;
}
var n$jscomp$45 = !u$jscomp$0.is.empty(this.options.quality) && this.isYouTube;
if (E$jscomp$0.toggleTab.call(this, "quality", n$jscomp$45), n$jscomp$45) {
u$jscomp$0.emptyElement(i$jscomp$59);
this.options.quality.forEach(function(e$jscomp$154) {
return E$jscomp$0.createMenuItem.call(t$jscomp$95, e$jscomp$154, i$jscomp$59, "quality", E$jscomp$0.getLabel.call(t$jscomp$95, "quality", e$jscomp$154), function(e$jscomp$155) {
var i$jscomp$60 = "";
switch(e$jscomp$155) {
case "hd2160":
i$jscomp$60 = "4K";
break;
case "hd1440":
i$jscomp$60 = "WQHD";
break;
case "hd1080":
case "hd720":
i$jscomp$60 = "HD";
}
return i$jscomp$60.length ? E$jscomp$0.createBadge.call(t$jscomp$95, i$jscomp$60) : null;
}(e$jscomp$154));
});
E$jscomp$0.updateSetting.call(this, "quality", i$jscomp$59);
}
}
},
getLabel : function(e$jscomp$156, t$jscomp$96) {
switch(e$jscomp$156) {
case "speed":
return 1 === t$jscomp$96 ? "Normal" : t$jscomp$96 + "&times;";
case "quality":
switch(t$jscomp$96) {
case "hd2160":
return "2160P";
case "hd1440":
return "1440P";
case "hd1080":
return "1080P";
case "hd720":
return "720P";
case "large":
return "480P";
case "medium":
return "360P";
case "small":
return "240P";
case "tiny":
return "Tiny";
case "default":
return "Auto";
default:
return t$jscomp$96;
}case "captions":
return E$jscomp$0.getLanguage.call(this);
default:
return null;
}
},
updateSetting : function(e$jscomp$157, t$jscomp$97) {
var i$jscomp$61 = this.elements.settings.panes[e$jscomp$157];
var n$jscomp$46 = null;
var s$jscomp$29 = t$jscomp$97;
switch(e$jscomp$157) {
case "captions":
n$jscomp$46 = this.captions.active ? this.captions.language : b$jscomp$0("disabled", this.config);
break;
default:
if (n$jscomp$46 = this[e$jscomp$157], u$jscomp$0.is.empty(n$jscomp$46) && (n$jscomp$46 = this.config[e$jscomp$157].default), !this.options[e$jscomp$157].includes(n$jscomp$46)) {
return void this.debug.warn("Unsupported value of '" + n$jscomp$46 + "' for " + e$jscomp$157);
}
if (!this.config[e$jscomp$157].options.includes(n$jscomp$46)) {
return void this.debug.warn("Disabled value of '" + n$jscomp$46 + "' for " + e$jscomp$157);
}
}
if (!(u$jscomp$0.is.element(s$jscomp$29) || (s$jscomp$29 = i$jscomp$61 && i$jscomp$61.querySelector("ul")), u$jscomp$0.is.empty(n$jscomp$46))) {
this.elements.settings.tabs[e$jscomp$157].querySelector("." + this.config.classNames.menu.value).innerHTML = E$jscomp$0.getLabel.call(this, e$jscomp$157, n$jscomp$46);
}
var a$jscomp$18 = s$jscomp$29 && s$jscomp$29.querySelector('input[value="' + n$jscomp$46 + '"]');
if (u$jscomp$0.is.element(a$jscomp$18)) {
a$jscomp$18.checked = true;
}
},
getLanguage : function() {
if (!this.supported.ui) {
return null;
}
if (d$jscomp$0.textTracks && v$jscomp$0.getTracks.call(this).length && this.captions.active) {
var e$jscomp$158 = v$jscomp$0.getCurrentTrack.call(this);
if (u$jscomp$0.is.track(e$jscomp$158)) {
return e$jscomp$158.label;
}
}
return b$jscomp$0("disabled", this.config);
},
setCaptionsMenu : function() {
var e$jscomp$159 = this;
var t$jscomp$98 = this.elements.settings.panes.captions.querySelector("ul");
var i$jscomp$62 = v$jscomp$0.getTracks.call(this).length;
if (E$jscomp$0.toggleTab.call(this, "captions", i$jscomp$62), u$jscomp$0.emptyElement(t$jscomp$98), i$jscomp$62) {
var n$jscomp$47 = v$jscomp$0.getTracks.call(this).map(function(e$jscomp$160) {
return {
language : e$jscomp$160.language,
label : u$jscomp$0.is.empty(e$jscomp$160.label) ? e$jscomp$160.language.toUpperCase() : e$jscomp$160.label
};
});
n$jscomp$47.unshift({
language : "",
label : b$jscomp$0("disabled", this.config)
});
n$jscomp$47.forEach(function(i$jscomp$63) {
E$jscomp$0.createMenuItem.call(e$jscomp$159, i$jscomp$63.language, t$jscomp$98, "language", i$jscomp$63.label || i$jscomp$63.language, E$jscomp$0.createBadge.call(e$jscomp$159, i$jscomp$63.language.toUpperCase()), i$jscomp$63.language.toLowerCase() === e$jscomp$159.captions.language.toLowerCase());
});
E$jscomp$0.updateSetting.call(this, "captions", t$jscomp$98);
}
},
setSpeedMenu : function(e$jscomp$161) {
var t$jscomp$99 = this;
if (this.config.controls.includes("settings") && this.config.settings.includes("speed") && u$jscomp$0.is.element(this.elements.settings.panes.speed)) {
if (u$jscomp$0.is.array(e$jscomp$161)) {
this.options.speed = e$jscomp$161;
} else {
this.options.speed = [.5, .75, 1, 1.25, 1.5, 1.75, 2];
}
this.options.speed = this.options.speed.filter(function(e$jscomp$162) {
return t$jscomp$99.config.speed.options.includes(e$jscomp$162);
});
var i$jscomp$64 = !u$jscomp$0.is.empty(this.options.speed);
if (E$jscomp$0.toggleTab.call(this, "speed", i$jscomp$64), E$jscomp$0.checkMenu.call(this), i$jscomp$64) {
var n$jscomp$48 = this.elements.settings.panes.speed.querySelector("ul");
u$jscomp$0.toggleHidden(this.elements.settings.tabs.speed, false);
u$jscomp$0.toggleHidden(this.elements.settings.panes.speed, false);
u$jscomp$0.emptyElement(n$jscomp$48);
this.options.speed.forEach(function(e$jscomp$163) {
return E$jscomp$0.createMenuItem.call(t$jscomp$99, e$jscomp$163, n$jscomp$48, "speed", E$jscomp$0.getLabel.call(t$jscomp$99, "speed", e$jscomp$163));
});
E$jscomp$0.updateSetting.call(this, "speed", n$jscomp$48);
}
}
},
checkMenu : function() {
var e$jscomp$164 = null !== this.elements.settings.tabs.speed.getAttribute("hidden");
var t$jscomp$100 = null !== this.elements.settings.tabs.captions.getAttribute("hidden");
u$jscomp$0.toggleHidden(this.elements.settings.menu, e$jscomp$164 && t$jscomp$100);
},
toggleMenu : function(e$jscomp$165) {
var t$jscomp$101 = this.elements.settings.form;
var i$jscomp$65 = this.elements.buttons.settings;
if (u$jscomp$0.is.element(t$jscomp$101) && u$jscomp$0.is.element(i$jscomp$65)) {
var n$jscomp$49 = u$jscomp$0.is.boolean(e$jscomp$165) ? e$jscomp$165 : u$jscomp$0.is.element(t$jscomp$101) && "true" === t$jscomp$101.getAttribute("aria-hidden");
if (u$jscomp$0.is.event(e$jscomp$165)) {
var s$jscomp$30 = u$jscomp$0.is.element(t$jscomp$101) && t$jscomp$101.contains(e$jscomp$165.target);
var a$jscomp$19 = e$jscomp$165.target === this.elements.buttons.settings;
if (s$jscomp$30 || !s$jscomp$30 && !a$jscomp$19 && n$jscomp$49) {
return;
}
if (a$jscomp$19) {
e$jscomp$165.stopPropagation();
}
}
if (u$jscomp$0.is.element(i$jscomp$65)) {
i$jscomp$65.setAttribute("aria-expanded", n$jscomp$49);
}
if (u$jscomp$0.is.element(t$jscomp$101)) {
t$jscomp$101.setAttribute("aria-hidden", !n$jscomp$49);
u$jscomp$0.toggleClass(this.elements.container, this.config.classNames.menu.open, n$jscomp$49);
if (n$jscomp$49) {
t$jscomp$101.removeAttribute("tabindex");
} else {
t$jscomp$101.setAttribute("tabindex", -1);
}
}
}
},
getTabSize : function(e$jscomp$166) {
var t$jscomp$102 = e$jscomp$166.cloneNode(true);
t$jscomp$102.style.position = "absolute";
t$jscomp$102.style.opacity = 0;
t$jscomp$102.setAttribute("aria-hidden", false);
Array.from(t$jscomp$102.querySelectorAll("input[name]")).forEach(function(e$jscomp$167) {
var t$jscomp$103 = e$jscomp$167.getAttribute("name");
e$jscomp$167.setAttribute("name", t$jscomp$103 + "-clone");
});
e$jscomp$166.parentNode.appendChild(t$jscomp$102);
var i$jscomp$66 = t$jscomp$102.scrollWidth;
var n$jscomp$50 = t$jscomp$102.scrollHeight;
return u$jscomp$0.removeElement(t$jscomp$102), {
width : i$jscomp$66,
height : n$jscomp$50
};
},
showTab : function(e$jscomp$168) {
var t$jscomp$104 = this.elements.settings.menu;
var i$jscomp$67 = e$jscomp$168.target;
var n$jscomp$51 = "false" === i$jscomp$67.getAttribute("aria-expanded");
var s$jscomp$31 = document.getElementById(i$jscomp$67.getAttribute("aria-controls"));
if (u$jscomp$0.is.element(s$jscomp$31) && "tabpanel" === s$jscomp$31.getAttribute("role")) {
var a$jscomp$20 = t$jscomp$104.querySelector('[role="tabpanel"][aria-hidden="false"]');
var l$jscomp$12 = a$jscomp$20.parentNode;
if (Array.from(t$jscomp$104.querySelectorAll('[aria-controls="' + a$jscomp$20.getAttribute("id") + '"]')).forEach(function(e$jscomp$169) {
e$jscomp$169.setAttribute("aria-expanded", false);
}), d$jscomp$0.transitions && !d$jscomp$0.reducedMotion) {
l$jscomp$12.style.width = a$jscomp$20.scrollWidth + "px";
l$jscomp$12.style.height = a$jscomp$20.scrollHeight + "px";
var r$jscomp$13 = E$jscomp$0.getTabSize.call(this, s$jscomp$31);
u$jscomp$0.on(l$jscomp$12, u$jscomp$0.transitionEndEvent, function e$jscomp$170(t$jscomp$105) {
if (t$jscomp$105.target === l$jscomp$12 && ["width", "height"].includes(t$jscomp$105.propertyName)) {
l$jscomp$12.style.width = "";
l$jscomp$12.style.height = "";
u$jscomp$0.off(l$jscomp$12, u$jscomp$0.transitionEndEvent, e$jscomp$170);
}
});
l$jscomp$12.style.width = r$jscomp$13.width + "px";
l$jscomp$12.style.height = r$jscomp$13.height + "px";
}
a$jscomp$20.setAttribute("aria-hidden", true);
a$jscomp$20.setAttribute("tabindex", -1);
s$jscomp$31.setAttribute("aria-hidden", !n$jscomp$51);
i$jscomp$67.setAttribute("aria-expanded", n$jscomp$51);
s$jscomp$31.removeAttribute("tabindex");
s$jscomp$31.querySelectorAll("button:not(:disabled), input:not(:disabled), [tabindex]")[0].focus();
}
},
create : function(e$jscomp$171) {
var t$jscomp$106 = this;
if (u$jscomp$0.is.empty(this.config.controls)) {
return null;
}
var i$jscomp$68 = u$jscomp$0.createElement("div", u$jscomp$0.getAttributesFromSelector(this.config.selectors.controls.wrapper));
if (this.config.controls.includes("restart") && i$jscomp$68.appendChild(E$jscomp$0.createButton.call(this, "restart")), this.config.controls.includes("rewind") && i$jscomp$68.appendChild(E$jscomp$0.createButton.call(this, "rewind")), this.config.controls.includes("play") && i$jscomp$68.appendChild(E$jscomp$0.createButton.call(this, "play")), this.config.controls.includes("fast-forward") && i$jscomp$68.appendChild(E$jscomp$0.createButton.call(this, "fast-forward")), this.config.controls.includes("progress")) {
var n$jscomp$52 = u$jscomp$0.createElement("div", u$jscomp$0.getAttributesFromSelector(this.config.selectors.progress));
var s$jscomp$32 = E$jscomp$0.createRange.call(this, "seek", {
id : "plyr-seek-" + e$jscomp$171.id
});
if (n$jscomp$52.appendChild(s$jscomp$32.label), n$jscomp$52.appendChild(s$jscomp$32.input), n$jscomp$52.appendChild(E$jscomp$0.createProgress.call(this, "buffer")), this.config.tooltips.seek) {
var a$jscomp$21 = u$jscomp$0.createElement("span", {
role : "tooltip",
class : this.config.classNames.tooltip
}, "00:00");
n$jscomp$52.appendChild(a$jscomp$21);
this.elements.display.seekTooltip = a$jscomp$21;
}
this.elements.progress = n$jscomp$52;
i$jscomp$68.appendChild(this.elements.progress);
}
if (this.config.controls.includes("current-time") && i$jscomp$68.appendChild(E$jscomp$0.createTime.call(this, "currentTime")), this.config.controls.includes("duration") && i$jscomp$68.appendChild(E$jscomp$0.createTime.call(this, "duration")), this.config.controls.includes("mute") && i$jscomp$68.appendChild(E$jscomp$0.createButton.call(this, "mute")), this.config.controls.includes("volume")) {
var l$jscomp$13 = u$jscomp$0.createElement("div", {
class : "plyr__volume"
});
var r$jscomp$14 = {
max : 1,
step : .05,
value : this.config.volume
};
var o$jscomp$8 = E$jscomp$0.createRange.call(this, "volume", u$jscomp$0.extend(r$jscomp$14, {
id : "plyr-volume-" + e$jscomp$171.id
}));
l$jscomp$13.appendChild(o$jscomp$8.label);
l$jscomp$13.appendChild(o$jscomp$8.input);
this.elements.volume = l$jscomp$13;
i$jscomp$68.appendChild(l$jscomp$13);
}
if (this.config.controls.includes("captions") && i$jscomp$68.appendChild(E$jscomp$0.createButton.call(this, "captions")), this.config.controls.includes("settings") && !u$jscomp$0.is.empty(this.config.settings)) {
var c$jscomp$5 = u$jscomp$0.createElement("div", {
class : "plyr__menu"
});
c$jscomp$5.appendChild(E$jscomp$0.createButton.call(this, "settings", {
id : "plyr-settings-toggle-" + e$jscomp$171.id,
"aria-haspopup" : true,
"aria-controls" : "plyr-settings-" + e$jscomp$171.id,
"aria-expanded" : false
}));
var p$jscomp$2 = u$jscomp$0.createElement("form", {
class : "plyr__menu__container",
id : "plyr-settings-" + e$jscomp$171.id,
"aria-hidden" : true,
"aria-labelled-by" : "plyr-settings-toggle-" + e$jscomp$171.id,
role : "tablist",
tabindex : -1
});
var h$jscomp$7 = u$jscomp$0.createElement("div");
var m$jscomp$1 = u$jscomp$0.createElement("div", {
id : "plyr-settings-" + e$jscomp$171.id + "-home",
"aria-hidden" : false,
"aria-labelled-by" : "plyr-settings-toggle-" + e$jscomp$171.id,
role : "tabpanel"
});
var g$jscomp$1 = u$jscomp$0.createElement("ul", {
role : "tablist"
});
this.config.settings.forEach(function(i$jscomp$69) {
var n$jscomp$53 = u$jscomp$0.createElement("li", {
role : "tab",
hidden : ""
});
var s$jscomp$33 = u$jscomp$0.createElement("button", u$jscomp$0.extend(u$jscomp$0.getAttributesFromSelector(t$jscomp$106.config.selectors.buttons.settings), {
type : "button",
class : t$jscomp$106.config.classNames.control + " " + t$jscomp$106.config.classNames.control + "--forward",
id : "plyr-settings-" + e$jscomp$171.id + "-" + i$jscomp$69 + "-tab",
"aria-haspopup" : true,
"aria-controls" : "plyr-settings-" + e$jscomp$171.id + "-" + i$jscomp$69,
"aria-expanded" : false
}), b$jscomp$0(i$jscomp$69, t$jscomp$106.config));
var a$jscomp$22 = u$jscomp$0.createElement("span", {
class : t$jscomp$106.config.classNames.menu.value
});
a$jscomp$22.innerHTML = e$jscomp$171[i$jscomp$69];
s$jscomp$33.appendChild(a$jscomp$22);
n$jscomp$53.appendChild(s$jscomp$33);
g$jscomp$1.appendChild(n$jscomp$53);
t$jscomp$106.elements.settings.tabs[i$jscomp$69] = n$jscomp$53;
});
m$jscomp$1.appendChild(g$jscomp$1);
h$jscomp$7.appendChild(m$jscomp$1);
this.config.settings.forEach(function(i$jscomp$70) {
var n$jscomp$54 = u$jscomp$0.createElement("div", {
id : "plyr-settings-" + e$jscomp$171.id + "-" + i$jscomp$70,
"aria-hidden" : true,
"aria-labelled-by" : "plyr-settings-" + e$jscomp$171.id + "-" + i$jscomp$70 + "-tab",
role : "tabpanel",
tabindex : -1,
hidden : ""
});
var s$jscomp$34 = u$jscomp$0.createElement("button", {
type : "button",
class : t$jscomp$106.config.classNames.control + " " + t$jscomp$106.config.classNames.control + "--back",
"aria-haspopup" : true,
"aria-controls" : "plyr-settings-" + e$jscomp$171.id + "-home",
"aria-expanded" : false
}, b$jscomp$0(i$jscomp$70, t$jscomp$106.config));
n$jscomp$54.appendChild(s$jscomp$34);
var a$jscomp$23 = u$jscomp$0.createElement("ul");
n$jscomp$54.appendChild(a$jscomp$23);
h$jscomp$7.appendChild(n$jscomp$54);
t$jscomp$106.elements.settings.panes[i$jscomp$70] = n$jscomp$54;
});
p$jscomp$2.appendChild(h$jscomp$7);
c$jscomp$5.appendChild(p$jscomp$2);
i$jscomp$68.appendChild(c$jscomp$5);
this.elements.settings.form = p$jscomp$2;
this.elements.settings.menu = c$jscomp$5;
}
return this.config.controls.includes("pip") && d$jscomp$0.pip && i$jscomp$68.appendChild(E$jscomp$0.createButton.call(this, "pip")), this.config.controls.includes("airplay") && d$jscomp$0.airplay && i$jscomp$68.appendChild(E$jscomp$0.createButton.call(this, "airplay")), this.config.controls.includes("fullscreen") && i$jscomp$68.appendChild(E$jscomp$0.createButton.call(this, "fullscreen")), this.config.controls.includes("play-large") && this.elements.container.appendChild(E$jscomp$0.createButton.call(this, 
"play-large")), this.elements.controls = i$jscomp$68, E$jscomp$0.setSpeedMenu.call(this), i$jscomp$68;
},
inject : function() {
var e$jscomp$172 = this;
if (this.config.loadSprite) {
var t$jscomp$107 = E$jscomp$0.getIconUrl.call(this);
if (t$jscomp$107.absolute) {
u$jscomp$0.loadSprite(t$jscomp$107.url, "sprite-plyr");
}
}
this.id = Math.floor(1E4 * Math.random());
var i$jscomp$71 = null;
this.elements.controls = null;
i$jscomp$71 = u$jscomp$0.is.string(this.config.controls) || u$jscomp$0.is.element(this.config.controls) ? this.config.controls : u$jscomp$0.is.function(this.config.controls) ? this.config.controls({
id : this.id,
seektime : this.config.seekTime,
title : this.config.title
}) : E$jscomp$0.create.call(this, {
id : this.id,
seektime : this.config.seekTime,
speed : this.speed,
quality : this.quality,
captions : E$jscomp$0.getLanguage.call(this)
});
var n$jscomp$55 = void 0;
if (u$jscomp$0.is.string(this.config.selectors.controls.container) && (n$jscomp$55 = document.querySelector(this.config.selectors.controls.container)), u$jscomp$0.is.element(n$jscomp$55) || (n$jscomp$55 = this.elements.container), u$jscomp$0.is.element(i$jscomp$71) ? n$jscomp$55.appendChild(i$jscomp$71) : n$jscomp$55.insertAdjacentHTML("beforeend", i$jscomp$71), u$jscomp$0.is.element(this.elements.controls) || u$jscomp$0.findElements.call(this), window.navigator.userAgent.includes("Edge") && 
u$jscomp$0.repaint(n$jscomp$55), this.config.tooltips.controls) {
var s$jscomp$35 = u$jscomp$0.getElements.call(this, [this.config.selectors.controls.wrapper, " ", this.config.selectors.labels, " .", this.config.classNames.hidden].join(""));
Array.from(s$jscomp$35).forEach(function(t$jscomp$108) {
u$jscomp$0.toggleClass(t$jscomp$108, e$jscomp$172.config.classNames.hidden, false);
u$jscomp$0.toggleClass(t$jscomp$108, e$jscomp$172.config.classNames.tooltip, true);
t$jscomp$108.setAttribute("role", "tooltip");
});
}
}
};
var T$jscomp$0 = u$jscomp$0.getBrowser();
var C$jscomp$0 = function() {
function e$jscomp$173(t$jscomp$109) {
l$jscomp$0(this, e$jscomp$173);
this.player = t$jscomp$109;
this.lastKey = null;
this.handleKey = this.handleKey.bind(this);
this.toggleMenu = this.toggleMenu.bind(this);
this.firstTouch = this.firstTouch.bind(this);
}
return r$jscomp$1(e$jscomp$173, [{
key : "handleKey",
value : function(e$jscomp$174) {
var t$jscomp$110 = this;
var i$jscomp$72 = e$jscomp$174.keyCode ? e$jscomp$174.keyCode : e$jscomp$174.which;
var n$jscomp$56 = "keydown" === e$jscomp$174.type;
var s$jscomp$36 = n$jscomp$56 && i$jscomp$72 === this.lastKey;
if (!(e$jscomp$174.altKey || e$jscomp$174.ctrlKey || e$jscomp$174.metaKey || e$jscomp$174.shiftKey) && u$jscomp$0.is.number(i$jscomp$72)) {
if (n$jscomp$56) {
var a$jscomp$24 = u$jscomp$0.getFocusElement();
if (u$jscomp$0.is.element(a$jscomp$24) && u$jscomp$0.matches(a$jscomp$24, this.player.config.selectors.editable)) {
return;
}
switch([48, 49, 50, 51, 52, 53, 54, 56, 57, 32, 75, 38, 40, 77, 39, 37, 70, 67, 73, 76, 79].includes(i$jscomp$72) && (e$jscomp$174.preventDefault(), e$jscomp$174.stopPropagation()), i$jscomp$72) {
case 48:
case 49:
case 50:
case 51:
case 52:
case 53:
case 54:
case 55:
case 56:
case 57:
if (!s$jscomp$36) {
t$jscomp$110.player.currentTime = t$jscomp$110.player.duration / 10 * (i$jscomp$72 - 48);
}
break;
case 32:
case 75:
if (!s$jscomp$36) {
this.player.togglePlay();
}
break;
case 38:
this.player.increaseVolume(.1);
break;
case 40:
this.player.decreaseVolume(.1);
break;
case 77:
if (!s$jscomp$36) {
this.player.muted = !this.player.muted;
}
break;
case 39:
this.player.forward();
break;
case 37:
this.player.rewind();
break;
case 70:
this.player.fullscreen.toggle();
break;
case 67:
if (!s$jscomp$36) {
this.player.toggleCaptions();
}
break;
case 76:
this.player.loop = !this.player.loop;
}
if (!this.player.fullscreen.enabled && this.player.fullscreen.active && 27 === i$jscomp$72) {
this.player.fullscreen.toggle();
}
this.lastKey = i$jscomp$72;
} else {
this.lastKey = null;
}
}
}
}, {
key : "toggleMenu",
value : function(e$jscomp$175) {
E$jscomp$0.toggleMenu.call(this.player, e$jscomp$175);
}
}, {
key : "firstTouch",
value : function() {
this.player.touch = true;
u$jscomp$0.toggleClass(this.player.elements.container, this.player.config.classNames.isTouch, true);
u$jscomp$0.off(document.body, "touchstart", this.firstTouch);
}
}, {
key : "global",
value : function() {
var e$jscomp$176 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
if (this.player.config.keyboard.global) {
u$jscomp$0.toggleListener(window, "keydown keyup", this.handleKey, e$jscomp$176, false);
}
u$jscomp$0.toggleListener(document.body, "click", this.toggleMenu, e$jscomp$176);
u$jscomp$0.on(document.body, "touchstart", this.firstTouch);
}
}, {
key : "container",
value : function() {
var e$jscomp$177 = this;
if (!this.player.config.keyboard.global && this.player.config.keyboard.focused) {
u$jscomp$0.on(this.player.elements.container, "keydown keyup", this.handleKey, false);
}
u$jscomp$0.on(this.player.elements.container, "focusout", function(t$jscomp$111) {
u$jscomp$0.toggleClass(t$jscomp$111.target, e$jscomp$177.player.config.classNames.tabFocus, false);
});
u$jscomp$0.on(this.player.elements.container, "keydown", function(t$jscomp$112) {
if (9 === t$jscomp$112.keyCode) {
setTimeout(function() {
u$jscomp$0.toggleClass(u$jscomp$0.getFocusElement(), e$jscomp$177.player.config.classNames.tabFocus, true);
}, 0);
}
});
if (this.player.config.hideControls) {
u$jscomp$0.on(this.player.elements.container, "mouseenter mouseleave mousemove touchstart touchend touchmove enterfullscreen exitfullscreen", function(t$jscomp$113) {
e$jscomp$177.player.toggleControls(t$jscomp$113);
});
}
}
}, {
key : "media",
value : function() {
var e$jscomp$178 = this;
if (u$jscomp$0.on(this.player.media, "timeupdate seeking", function(t$jscomp$115) {
return k$jscomp$0.timeUpdate.call(e$jscomp$178.player, t$jscomp$115);
}), u$jscomp$0.on(this.player.media, "durationchange loadedmetadata", function(t$jscomp$116) {
return k$jscomp$0.durationUpdate.call(e$jscomp$178.player, t$jscomp$116);
}), u$jscomp$0.on(this.player.media, "loadeddata", function() {
u$jscomp$0.toggleHidden(e$jscomp$178.player.elements.volume, !e$jscomp$178.player.hasAudio);
u$jscomp$0.toggleHidden(e$jscomp$178.player.elements.buttons.mute, !e$jscomp$178.player.hasAudio);
}), u$jscomp$0.on(this.player.media, "ended", function() {
if (e$jscomp$178.player.isHTML5 && e$jscomp$178.player.isVideo && e$jscomp$178.player.config.showPosterOnEnd) {
e$jscomp$178.player.restart();
e$jscomp$178.player.media.load();
}
}), u$jscomp$0.on(this.player.media, "progress playing", function(t$jscomp$117) {
return k$jscomp$0.updateProgress.call(e$jscomp$178.player, t$jscomp$117);
}), u$jscomp$0.on(this.player.media, "volumechange", function(t$jscomp$118) {
return k$jscomp$0.updateVolume.call(e$jscomp$178.player, t$jscomp$118);
}), u$jscomp$0.on(this.player.media, "playing play pause ended emptied", function(t$jscomp$119) {
return k$jscomp$0.checkPlaying.call(e$jscomp$178.player, t$jscomp$119);
}), u$jscomp$0.on(this.player.media, "waiting canplay seeked playing", function(t$jscomp$120) {
return k$jscomp$0.checkLoading.call(e$jscomp$178.player, t$jscomp$120);
}), this.player.supported.ui && this.player.config.clickToPlay && !this.player.isAudio) {
var t$jscomp$114 = u$jscomp$0.getElement.call(this.player, "." + this.player.config.classNames.video);
if (!u$jscomp$0.is.element(t$jscomp$114)) {
return;
}
u$jscomp$0.on(t$jscomp$114, "click", function() {
if (!(e$jscomp$178.player.config.hideControls && e$jscomp$178.player.touch && !e$jscomp$178.player.paused)) {
if (e$jscomp$178.player.paused) {
e$jscomp$178.player.play();
} else {
if (e$jscomp$178.player.ended) {
e$jscomp$178.player.restart();
e$jscomp$178.player.play();
} else {
e$jscomp$178.player.pause();
}
}
}
});
}
if (this.player.supported.ui && this.player.config.disableContextMenu) {
u$jscomp$0.on(this.player.media, "contextmenu", function(e$jscomp$179) {
e$jscomp$179.preventDefault();
}, false);
}
u$jscomp$0.on(this.player.media, "volumechange", function() {
e$jscomp$178.player.storage.set({
volume : e$jscomp$178.player.volume,
muted : e$jscomp$178.player.muted
});
});
u$jscomp$0.on(this.player.media, "ratechange", function() {
E$jscomp$0.updateSetting.call(e$jscomp$178.player, "speed");
e$jscomp$178.player.storage.set({
speed : e$jscomp$178.player.speed
});
});
u$jscomp$0.on(this.player.media, "qualitychange", function() {
E$jscomp$0.updateSetting.call(e$jscomp$178.player, "quality");
e$jscomp$178.player.storage.set({
quality : e$jscomp$178.player.quality
});
});
u$jscomp$0.on(this.player.media, "languagechange", function() {
E$jscomp$0.updateSetting.call(e$jscomp$178.player, "captions");
e$jscomp$178.player.storage.set({
language : e$jscomp$178.player.language
});
});
u$jscomp$0.on(this.player.media, "captionsenabled captionsdisabled", function() {
E$jscomp$0.updateSetting.call(e$jscomp$178.player, "captions");
e$jscomp$178.player.storage.set({
captions : e$jscomp$178.player.captions.active
});
});
u$jscomp$0.on(this.player.media, this.player.config.events.concat(["keyup", "keydown"]).join(" "), function(t$jscomp$121) {
var i$jscomp$73 = {};
if ("error" === t$jscomp$121.type) {
i$jscomp$73 = e$jscomp$178.player.media.error;
}
u$jscomp$0.dispatchEvent.call(e$jscomp$178.player, e$jscomp$178.player.elements.container, t$jscomp$121.type, true, i$jscomp$73);
});
}
}, {
key : "controls",
value : function() {
var e$jscomp$180 = this;
var t$jscomp$122 = T$jscomp$0.isIE ? "change" : "input";
var i$jscomp$74 = function(t$jscomp$123, i$jscomp$75, n$jscomp$58) {
var s$jscomp$37 = e$jscomp$180.player.config.listeners[n$jscomp$58];
var a$jscomp$25 = true;
if (u$jscomp$0.is.function(s$jscomp$37)) {
a$jscomp$25 = s$jscomp$37.call(e$jscomp$180.player, t$jscomp$123);
}
if (a$jscomp$25 && u$jscomp$0.is.function(i$jscomp$75)) {
i$jscomp$75.call(e$jscomp$180.player, t$jscomp$123);
}
};
var n$jscomp$57 = function(t$jscomp$124, n$jscomp$59, s$jscomp$38, a$jscomp$26) {
var l$jscomp$14 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
var r$jscomp$15 = e$jscomp$180.player.config.listeners[a$jscomp$26];
var o$jscomp$9 = u$jscomp$0.is.function(r$jscomp$15);
u$jscomp$0.on(t$jscomp$124, n$jscomp$59, function(e$jscomp$181) {
return i$jscomp$74(e$jscomp$181, s$jscomp$38, a$jscomp$26);
}, l$jscomp$14 && !o$jscomp$9);
};
n$jscomp$57(this.player.elements.buttons.play, "click", this.player.togglePlay, "play");
n$jscomp$57(this.player.elements.buttons.restart, "click", this.player.restart, "restart");
n$jscomp$57(this.player.elements.buttons.rewind, "click", this.player.rewind, "rewind");
n$jscomp$57(this.player.elements.buttons.fastForward, "click", this.player.forward, "fastForward");
n$jscomp$57(this.player.elements.buttons.mute, "click", function() {
e$jscomp$180.player.muted = !e$jscomp$180.player.muted;
}, "mute");
n$jscomp$57(this.player.elements.buttons.captions, "click", this.player.toggleCaptions);
n$jscomp$57(this.player.elements.buttons.fullscreen, "click", function() {
e$jscomp$180.player.fullscreen.toggle();
}, "fullscreen");
n$jscomp$57(this.player.elements.buttons.pip, "click", function() {
e$jscomp$180.player.pip = "toggle";
}, "pip");
n$jscomp$57(this.player.elements.buttons.airplay, "click", this.player.airplay, "airplay");
n$jscomp$57(this.player.elements.buttons.settings, "click", function(t$jscomp$125) {
E$jscomp$0.toggleMenu.call(e$jscomp$180.player, t$jscomp$125);
});
n$jscomp$57(this.player.elements.settings.form, "click", function(t$jscomp$126) {
t$jscomp$126.stopPropagation();
if (u$jscomp$0.matches(t$jscomp$126.target, e$jscomp$180.player.config.selectors.inputs.language)) {
i$jscomp$74(t$jscomp$126, function() {
e$jscomp$180.player.language = t$jscomp$126.target.value;
}, "language");
} else {
if (u$jscomp$0.matches(t$jscomp$126.target, e$jscomp$180.player.config.selectors.inputs.quality)) {
i$jscomp$74(t$jscomp$126, function() {
e$jscomp$180.player.quality = t$jscomp$126.target.value;
}, "quality");
} else {
if (u$jscomp$0.matches(t$jscomp$126.target, e$jscomp$180.player.config.selectors.inputs.speed)) {
i$jscomp$74(t$jscomp$126, function() {
e$jscomp$180.player.speed = parseFloat(t$jscomp$126.target.value);
}, "speed");
} else {
E$jscomp$0.showTab.call(e$jscomp$180.player, t$jscomp$126);
}
}
}
});
n$jscomp$57(this.player.elements.inputs.seek, t$jscomp$122, function(t$jscomp$127) {
e$jscomp$180.player.currentTime = t$jscomp$127.target.value / t$jscomp$127.target.max * e$jscomp$180.player.duration;
}, "seek");
if (this.player.config.toggleInvert && !u$jscomp$0.is.element(this.player.elements.display.duration)) {
n$jscomp$57(this.player.elements.display.currentTime, "click", function() {
if (0 !== e$jscomp$180.player.currentTime) {
e$jscomp$180.player.config.invertTime = !e$jscomp$180.player.config.invertTime;
k$jscomp$0.timeUpdate.call(e$jscomp$180.player);
}
});
}
n$jscomp$57(this.player.elements.inputs.volume, t$jscomp$122, function(t$jscomp$128) {
e$jscomp$180.player.volume = t$jscomp$128.target.value;
}, "volume");
if (T$jscomp$0.isWebkit) {
n$jscomp$57(u$jscomp$0.getElements.call(this.player, 'input[type="range"]'), "input", function(t$jscomp$129) {
E$jscomp$0.updateRangeFill.call(e$jscomp$180.player, t$jscomp$129.target);
});
}
n$jscomp$57(this.player.elements.progress, "mouseenter mouseleave mousemove", function(t$jscomp$130) {
return E$jscomp$0.updateSeekTooltip.call(e$jscomp$180.player, t$jscomp$130);
});
if (this.player.config.hideControls) {
n$jscomp$57(this.player.elements.controls, "mouseenter mouseleave", function(t$jscomp$131) {
e$jscomp$180.player.elements.controls.hover = !e$jscomp$180.player.touch && "mouseenter" === t$jscomp$131.type;
});
n$jscomp$57(this.player.elements.controls, "mousedown mouseup touchstart touchend touchcancel", function(t$jscomp$132) {
e$jscomp$180.player.elements.controls.pressed = ["mousedown", "touchstart"].includes(t$jscomp$132.type);
});
n$jscomp$57(this.player.elements.controls, "focusin focusout", function(t$jscomp$133) {
e$jscomp$180.player.toggleControls(t$jscomp$133);
});
}
n$jscomp$57(this.player.elements.inputs.volume, "wheel", function(t$jscomp$134) {
var i$jscomp$76 = t$jscomp$134.webkitDirectionInvertedFromDevice;
var n$jscomp$60 = 0;
if (t$jscomp$134.deltaY < 0 || t$jscomp$134.deltaX > 0) {
if (i$jscomp$76) {
e$jscomp$180.player.decreaseVolume(.02);
n$jscomp$60 = -1;
} else {
e$jscomp$180.player.increaseVolume(.02);
n$jscomp$60 = 1;
}
}
if (t$jscomp$134.deltaY > 0 || t$jscomp$134.deltaX < 0) {
if (i$jscomp$76) {
e$jscomp$180.player.increaseVolume(.02);
n$jscomp$60 = 1;
} else {
e$jscomp$180.player.decreaseVolume(.02);
n$jscomp$60 = -1;
}
}
if (1 === n$jscomp$60 && e$jscomp$180.player.media.volume < 1 || -1 === n$jscomp$60 && e$jscomp$180.player.media.volume > 0) {
t$jscomp$134.preventDefault();
}
}, "volume", false);
}
}, {
key : "clear",
value : function() {
this.global(false);
}
}]), e$jscomp$173;
}();
var A$jscomp$0 = function() {
function e$jscomp$182(t$jscomp$135) {
l$jscomp$0(this, e$jscomp$182);
this.enabled = t$jscomp$135.config.storage.enabled;
this.key = t$jscomp$135.config.storage.key;
}
return r$jscomp$1(e$jscomp$182, [{
key : "get",
value : function(t$jscomp$136) {
if (!e$jscomp$182.supported) {
return null;
}
var i$jscomp$77 = window.localStorage.getItem(this.key);
if (u$jscomp$0.is.empty(i$jscomp$77)) {
return null;
}
var n$jscomp$61 = JSON.parse(i$jscomp$77);
return u$jscomp$0.is.string(t$jscomp$136) && t$jscomp$136.length ? n$jscomp$61[t$jscomp$136] : n$jscomp$61;
}
}, {
key : "set",
value : function(t$jscomp$137) {
if (e$jscomp$182.supported && this.enabled && u$jscomp$0.is.object(t$jscomp$137)) {
var i$jscomp$78 = this.get();
if (u$jscomp$0.is.empty(i$jscomp$78)) {
i$jscomp$78 = {};
}
u$jscomp$0.extend(i$jscomp$78, t$jscomp$137);
window.localStorage.setItem(this.key, JSON.stringify(i$jscomp$78));
}
}
}], [{
key : "supported",
get : function() {
try {
if (!("localStorage" in window)) {
return false;
}
return window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), true;
} catch (e$jscomp$183) {
return false;
}
}
}]), e$jscomp$182;
}();
var S$jscomp$0 = function() {
function e$jscomp$184(t$jscomp$138) {
var i$jscomp$79 = this;
l$jscomp$0(this, e$jscomp$184);
this.player = t$jscomp$138;
this.publisherId = t$jscomp$138.config.ads.publisherId;
this.enabled = t$jscomp$138.isHTML5 && t$jscomp$138.isVideo && t$jscomp$138.config.ads.enabled && u$jscomp$0.is.string(this.publisherId) && this.publisherId.length;
this.playing = false;
this.initialized = false;
this.elements = {
container : null,
displayContainer : null
};
this.manager = null;
this.loader = null;
this.cuePoints = null;
this.events = {};
this.safetyTimer = null;
this.countdownTimer = null;
this.managerPromise = new Promise(function(e$jscomp$185, t$jscomp$139) {
i$jscomp$79.on("loaded", e$jscomp$185);
i$jscomp$79.on("error", t$jscomp$139);
});
this.load();
}
return r$jscomp$1(e$jscomp$184, [{
key : "load",
value : function() {
var e$jscomp$186 = this;
if (this.enabled) {
if (u$jscomp$0.is.object(window.google) && u$jscomp$0.is.object(window.google.ima)) {
this.ready();
} else {
u$jscomp$0.loadScript(this.player.config.urls.googleIMA.api).then(function() {
e$jscomp$186.ready();
}).catch(function() {
e$jscomp$186.trigger("error", new Error("Google IMA SDK failed to load"));
});
}
}
}
}, {
key : "ready",
value : function() {
var e$jscomp$187 = this;
this.startSafetyTimer(12E3, "ready()");
this.managerPromise.then(function() {
e$jscomp$187.clearSafetyTimer("onAdsManagerLoaded()");
});
this.listeners();
this.setupIMA();
}
}, {
key : "setupIMA",
value : function() {
this.elements.container = u$jscomp$0.createElement("div", {
class : this.player.config.classNames.ads
});
this.player.elements.container.appendChild(this.elements.container);
google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED);
google.ima.settings.setLocale(this.player.config.ads.language);
this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container);
this.requestAds();
}
}, {
key : "requestAds",
value : function() {
var e$jscomp$188 = this;
var t$jscomp$140 = this.player.elements.container;
try {
this.loader = new google.ima.AdsLoader(this.elements.displayContainer);
this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function(t$jscomp$141) {
return e$jscomp$188.onAdsManagerLoaded(t$jscomp$141);
}, false);
this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function(t$jscomp$142) {
return e$jscomp$188.onAdError(t$jscomp$142);
}, false);
var i$jscomp$80 = new google.ima.AdsRequest;
i$jscomp$80.adTagUrl = this.tagUrl;
i$jscomp$80.linearAdSlotWidth = t$jscomp$140.offsetWidth;
i$jscomp$80.linearAdSlotHeight = t$jscomp$140.offsetHeight;
i$jscomp$80.nonLinearAdSlotWidth = t$jscomp$140.offsetWidth;
i$jscomp$80.nonLinearAdSlotHeight = t$jscomp$140.offsetHeight;
i$jscomp$80.forceNonLinearFullSlot = false;
this.loader.requestAds(i$jscomp$80);
} catch (e$jscomp$189) {
this.onAdError(e$jscomp$189);
}
}
}, {
key : "pollCountdown",
value : function() {
var e$jscomp$190 = this;
if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0])) {
return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
}
this.countdownTimer = setInterval(function() {
var t$jscomp$143 = u$jscomp$0.formatTime(Math.max(e$jscomp$190.manager.getRemainingTime(), 0));
var i$jscomp$81 = b$jscomp$0("advertisement", e$jscomp$190.player.config) + " - " + t$jscomp$143;
e$jscomp$190.elements.container.setAttribute("data-badge-text", i$jscomp$81);
}, 100);
}
}, {
key : "onAdsManagerLoaded",
value : function(e$jscomp$191) {
var t$jscomp$144 = this;
var i$jscomp$82 = new google.ima.AdsRenderingSettings;
i$jscomp$82.restoreCustomPlaybackStateOnAdBreakComplete = true;
i$jscomp$82.enablePreloading = true;
this.manager = e$jscomp$191.getAdsManager(this.player, i$jscomp$82);
this.cuePoints = this.manager.getCuePoints();
this.cuePoints.forEach(function(e$jscomp$192) {
if (0 !== e$jscomp$192 && -1 !== e$jscomp$192 && e$jscomp$192 < t$jscomp$144.player.duration) {
var i$jscomp$83 = t$jscomp$144.player.elements.progress;
if (i$jscomp$83) {
var n$jscomp$62 = 100 / t$jscomp$144.player.duration * e$jscomp$192;
var s$jscomp$39 = u$jscomp$0.createElement("span", {
class : t$jscomp$144.player.config.classNames.cues
});
s$jscomp$39.style.left = n$jscomp$62.toString() + "%";
i$jscomp$83.appendChild(s$jscomp$39);
}
}
});
this.manager.setVolume(this.player.volume);
this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function(e$jscomp$193) {
return t$jscomp$144.onAdError(e$jscomp$193);
});
Object.keys(google.ima.AdEvent.Type).forEach(function(e$jscomp$194) {
t$jscomp$144.manager.addEventListener(google.ima.AdEvent.Type[e$jscomp$194], function(e$jscomp$195) {
return t$jscomp$144.onAdEvent(e$jscomp$195);
});
});
this.trigger("loaded");
}
}, {
key : "onAdEvent",
value : function(e$jscomp$196) {
var t$jscomp$145 = this;
var i$jscomp$84 = this.player.elements.container;
var n$jscomp$63 = e$jscomp$196.getAd();
var s$jscomp$40 = function(e$jscomp$197) {
var i$jscomp$85 = "ads" + e$jscomp$197.replace(/_/g, "").toLowerCase();
u$jscomp$0.dispatchEvent.call(t$jscomp$145.player, t$jscomp$145.player.media, i$jscomp$85);
};
switch(e$jscomp$196.type) {
case google.ima.AdEvent.Type.LOADED:
this.trigger("loaded");
s$jscomp$40(e$jscomp$196.type);
this.pollCountdown(true);
if (!n$jscomp$63.isLinear()) {
n$jscomp$63.width = i$jscomp$84.offsetWidth;
n$jscomp$63.height = i$jscomp$84.offsetHeight;
}
break;
case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
s$jscomp$40(e$jscomp$196.type);
this.loadAds();
break;
case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
s$jscomp$40(e$jscomp$196.type);
this.pauseContent();
break;
case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
s$jscomp$40(e$jscomp$196.type);
this.pollCountdown();
this.resumeContent();
break;
case google.ima.AdEvent.Type.STARTED:
case google.ima.AdEvent.Type.MIDPOINT:
case google.ima.AdEvent.Type.COMPLETE:
case google.ima.AdEvent.Type.IMPRESSION:
case google.ima.AdEvent.Type.CLICK:
s$jscomp$40(e$jscomp$196.type);
}
}
}, {
key : "onAdError",
value : function(e$jscomp$198) {
this.cancel();
this.player.debug.warn("Ads error", e$jscomp$198);
}
}, {
key : "listeners",
value : function() {
var e$jscomp$199 = this;
var t$jscomp$146 = this.player.elements.container;
var i$jscomp$86 = void 0;
this.player.on("ended", function() {
e$jscomp$199.loader.contentComplete();
});
this.player.on("seeking", function() {
return i$jscomp$86 = e$jscomp$199.player.currentTime;
});
this.player.on("seeked", function() {
var t$jscomp$147 = e$jscomp$199.player.currentTime;
e$jscomp$199.cuePoints.forEach(function(n$jscomp$64, s$jscomp$41) {
if (i$jscomp$86 < n$jscomp$64 && n$jscomp$64 < t$jscomp$147) {
e$jscomp$199.manager.discardAdBreak();
e$jscomp$199.cuePoints.splice(s$jscomp$41, 1);
}
});
});
window.addEventListener("resize", function() {
e$jscomp$199.manager.resize(t$jscomp$146.offsetWidth, t$jscomp$146.offsetHeight, google.ima.ViewMode.NORMAL);
});
}
}, {
key : "play",
value : function() {
var e$jscomp$200 = this;
var t$jscomp$148 = this.player.elements.container;
if (!this.managerPromise) {
this.resumeContent();
}
this.managerPromise.then(function() {
e$jscomp$200.elements.displayContainer.initialize();
try {
if (!e$jscomp$200.initialized) {
e$jscomp$200.manager.init(t$jscomp$148.offsetWidth, t$jscomp$148.offsetHeight, google.ima.ViewMode.NORMAL);
e$jscomp$200.manager.start();
}
e$jscomp$200.initialized = true;
} catch (t$jscomp$149) {
e$jscomp$200.onAdError(t$jscomp$149);
}
}).catch(function() {
});
}
}, {
key : "resumeContent",
value : function() {
this.elements.container.style.zIndex = "";
this.playing = false;
if (this.player.currentTime < this.player.duration) {
this.player.play();
}
}
}, {
key : "pauseContent",
value : function() {
this.elements.container.style.zIndex = 3;
this.playing = true;
this.player.pause();
}
}, {
key : "cancel",
value : function() {
if (this.initialized) {
this.resumeContent();
}
this.trigger("error");
this.loadAds();
}
}, {
key : "loadAds",
value : function() {
var e$jscomp$201 = this;
this.managerPromise.then(function() {
if (e$jscomp$201.manager) {
e$jscomp$201.manager.destroy();
}
e$jscomp$201.managerPromise = new Promise(function(t$jscomp$150) {
e$jscomp$201.on("loaded", t$jscomp$150);
e$jscomp$201.player.debug.log(e$jscomp$201.manager);
});
e$jscomp$201.requestAds();
}).catch(function() {
});
}
}, {
key : "trigger",
value : function(e$jscomp$202) {
var t$jscomp$151 = this;
var i$jscomp$87 = arguments.length;
var n$jscomp$65 = Array(i$jscomp$87 > 1 ? i$jscomp$87 - 1 : 0);
var s$jscomp$42 = 1;
for (; s$jscomp$42 < i$jscomp$87; s$jscomp$42++) {
n$jscomp$65[s$jscomp$42 - 1] = arguments[s$jscomp$42];
}
var a$jscomp$27 = this.events[e$jscomp$202];
if (u$jscomp$0.is.array(a$jscomp$27)) {
a$jscomp$27.forEach(function(e$jscomp$203) {
if (u$jscomp$0.is.function(e$jscomp$203)) {
e$jscomp$203.apply(t$jscomp$151, n$jscomp$65);
}
});
}
}
}, {
key : "on",
value : function(e$jscomp$204, t$jscomp$152) {
return u$jscomp$0.is.array(this.events[e$jscomp$204]) || (this.events[e$jscomp$204] = []), this.events[e$jscomp$204].push(t$jscomp$152), this;
}
}, {
key : "startSafetyTimer",
value : function(e$jscomp$205, t$jscomp$153) {
var i$jscomp$88 = this;
this.player.debug.log("Safety timer invoked from: " + t$jscomp$153);
this.safetyTimer = setTimeout(function() {
i$jscomp$88.cancel();
i$jscomp$88.clearSafetyTimer("startSafetyTimer()");
}, e$jscomp$205);
}
}, {
key : "clearSafetyTimer",
value : function(e$jscomp$206) {
if (!u$jscomp$0.is.nullOrUndefined(this.safetyTimer)) {
this.player.debug.log("Safety timer cleared from: " + e$jscomp$206);
clearTimeout(this.safetyTimer);
this.safetyTimer = null;
}
}
}, {
key : "tagUrl",
get : function() {
var e$jscomp$207 = {
AV_PUBLISHERID : "58c25bb0073ef448b1087ad6",
AV_CHANNELID : "5a0458dc28a06145e4519d21",
AV_URL : location.hostname,
cb : Date.now(),
AV_WIDTH : 640,
AV_HEIGHT : 480,
AV_CDIM2 : this.publisherId
};
return "https://go.aniview.com/api/adserver6/vast/?" + u$jscomp$0.buildUrlParams(e$jscomp$207);
}
}]), e$jscomp$184;
}();
var P$jscomp$0 = {
setup : function() {
var e$jscomp$208 = this;
u$jscomp$0.toggleClass(this.elements.wrapper, this.config.classNames.embed, true);
P$jscomp$0.setAspectRatio.call(this);
if (u$jscomp$0.is.object(window.YT) && u$jscomp$0.is.function(window.YT.Player)) {
P$jscomp$0.ready.call(this);
} else {
u$jscomp$0.loadScript(this.config.urls.youtube.api).catch(function(t$jscomp$154) {
e$jscomp$208.debug.warn("YouTube API failed to load", t$jscomp$154);
});
window.onYouTubeReadyCallbacks = window.onYouTubeReadyCallbacks || [];
window.onYouTubeReadyCallbacks.push(function() {
P$jscomp$0.ready.call(e$jscomp$208);
});
window.onYouTubeIframeAPIReady = function() {
window.onYouTubeReadyCallbacks.forEach(function(e$jscomp$209) {
e$jscomp$209();
});
};
}
},
getTitle : function(e$jscomp$210) {
var t$jscomp$155 = this;
if (u$jscomp$0.is.function(this.embed.getVideoData)) {
var i$jscomp$89 = this.embed.getVideoData().title;
if (u$jscomp$0.is.empty(i$jscomp$89)) {
return this.config.title = i$jscomp$89, void k$jscomp$0.setTitle.call(this);
}
}
var n$jscomp$66 = this.config.keys.google;
if (u$jscomp$0.is.string(n$jscomp$66) && !u$jscomp$0.is.empty(n$jscomp$66)) {
var s$jscomp$43 = "https://www.googleapis.com/youtube/v3/videos?id=" + e$jscomp$210 + "&key=" + n$jscomp$66 + "&fields=items(snippet(title))&part=snippet";
u$jscomp$0.fetch(s$jscomp$43).then(function(e$jscomp$211) {
if (u$jscomp$0.is.object(e$jscomp$211)) {
t$jscomp$155.config.title = e$jscomp$211.items[0].snippet.title;
k$jscomp$0.setTitle.call(t$jscomp$155);
}
}).catch(function() {
});
}
},
setAspectRatio : function() {
var e$jscomp$212 = this.config.ratio.split(":");
this.elements.wrapper.style.paddingBottom = 100 / e$jscomp$212[0] * e$jscomp$212[1] + "%";
},
ready : function() {
var e$jscomp$213 = this;
var t$jscomp$156 = e$jscomp$213.media.getAttribute("id");
if (u$jscomp$0.is.empty(t$jscomp$156) || !t$jscomp$156.startsWith("youtube-")) {
var i$jscomp$90 = e$jscomp$213.media.getAttribute("src");
if (u$jscomp$0.is.empty(i$jscomp$90)) {
i$jscomp$90 = e$jscomp$213.media.getAttribute(this.config.attributes.embed.id);
}
var n$jscomp$67 = u$jscomp$0.parseYouTubeId(i$jscomp$90);
var s$jscomp$44 = u$jscomp$0.generateId(e$jscomp$213.provider);
var a$jscomp$28 = u$jscomp$0.createElement("div", {
id : s$jscomp$44
});
e$jscomp$213.media = u$jscomp$0.replaceElement(a$jscomp$28, e$jscomp$213.media);
e$jscomp$213.embed = new window.YT.Player(s$jscomp$44, {
videoId : n$jscomp$67,
playerVars : {
autoplay : e$jscomp$213.config.autoplay ? 1 : 0,
controls : e$jscomp$213.supported.ui ? 0 : 1,
rel : 0,
showinfo : 0,
iv_load_policy : 3,
modestbranding : 1,
disablekb : 1,
playsinline : 1,
widget_referrer : window ? window.location.href : null,
cc_load_policy : e$jscomp$213.captions.active ? 1 : 0,
cc_lang_pref : e$jscomp$213.config.captions.language
},
events : {
onError : function(t$jscomp$157) {
if (!u$jscomp$0.is.object(e$jscomp$213.media.error)) {
var i$jscomp$91 = {
code : t$jscomp$157.data
};
switch(t$jscomp$157.data) {
case 2:
i$jscomp$91.message = "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.";
break;
case 5:
i$jscomp$91.message = "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.";
break;
case 100:
i$jscomp$91.message = "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.";
break;
case 101:
case 150:
i$jscomp$91.message = "The owner of the requested video does not allow it to be played in embedded players.";
break;
default:
i$jscomp$91.message = "An unknown error occured";
}
e$jscomp$213.media.error = i$jscomp$91;
u$jscomp$0.dispatchEvent.call(e$jscomp$213, e$jscomp$213.media, "error");
}
},
onPlaybackQualityChange : function(t$jscomp$158) {
var i$jscomp$92 = t$jscomp$158.target;
e$jscomp$213.media.quality = i$jscomp$92.getPlaybackQuality();
u$jscomp$0.dispatchEvent.call(e$jscomp$213, e$jscomp$213.media, "qualitychange");
},
onPlaybackRateChange : function(t$jscomp$159) {
var i$jscomp$93 = t$jscomp$159.target;
e$jscomp$213.media.playbackRate = i$jscomp$93.getPlaybackRate();
u$jscomp$0.dispatchEvent.call(e$jscomp$213, e$jscomp$213.media, "ratechange");
},
onReady : function(t$jscomp$160) {
var i$jscomp$94 = t$jscomp$160.target;
P$jscomp$0.getTitle.call(e$jscomp$213, n$jscomp$67);
e$jscomp$213.media.play = function() {
i$jscomp$94.playVideo();
};
e$jscomp$213.media.pause = function() {
i$jscomp$94.pauseVideo();
};
e$jscomp$213.media.stop = function() {
i$jscomp$94.stopVideo();
};
e$jscomp$213.media.duration = i$jscomp$94.getDuration();
e$jscomp$213.media.paused = true;
e$jscomp$213.media.currentTime = 0;
Object.defineProperty(e$jscomp$213.media, "currentTime", {
get : function() {
return Number(i$jscomp$94.getCurrentTime());
},
set : function(t$jscomp$161) {
e$jscomp$213.media.seeking = true;
u$jscomp$0.dispatchEvent.call(e$jscomp$213, e$jscomp$213.media, "seeking");
i$jscomp$94.seekTo(t$jscomp$161);
}
});
Object.defineProperty(e$jscomp$213.media, "playbackRate", {
get : function() {
return i$jscomp$94.getPlaybackRate();
},
set : function(e$jscomp$214) {
i$jscomp$94.setPlaybackRate(e$jscomp$214);
}
});
Object.defineProperty(e$jscomp$213.media, "quality", {
get : function() {
return i$jscomp$94.getPlaybackQuality();
},
set : function(t$jscomp$162) {
u$jscomp$0.dispatchEvent.call(e$jscomp$213, e$jscomp$213.media, "qualityrequested", false, {
quality : t$jscomp$162
});
i$jscomp$94.setPlaybackQuality(t$jscomp$162);
}
});
var s$jscomp$45 = e$jscomp$213.config.volume;
Object.defineProperty(e$jscomp$213.media, "volume", {
get : function() {
return s$jscomp$45;
},
set : function(t$jscomp$163) {
s$jscomp$45 = t$jscomp$163;
i$jscomp$94.setVolume(100 * s$jscomp$45);
u$jscomp$0.dispatchEvent.call(e$jscomp$213, e$jscomp$213.media, "volumechange");
}
});
var a$jscomp$29 = e$jscomp$213.config.muted;
Object.defineProperty(e$jscomp$213.media, "muted", {
get : function() {
return a$jscomp$29;
},
set : function(t$jscomp$164) {
var n$jscomp$68 = u$jscomp$0.is.boolean(t$jscomp$164) ? t$jscomp$164 : a$jscomp$29;
a$jscomp$29 = n$jscomp$68;
i$jscomp$94[n$jscomp$68 ? "mute" : "unMute"]();
u$jscomp$0.dispatchEvent.call(e$jscomp$213, e$jscomp$213.media, "volumechange");
}
});
Object.defineProperty(e$jscomp$213.media, "currentSrc", {
get : function() {
return i$jscomp$94.getVideoUrl();
}
});
Object.defineProperty(e$jscomp$213.media, "ended", {
get : function() {
return e$jscomp$213.currentTime === e$jscomp$213.duration;
}
});
var l$jscomp$15 = i$jscomp$94.getAvailablePlaybackRates();
E$jscomp$0.setSpeedMenu.call(e$jscomp$213, l$jscomp$15);
if (e$jscomp$213.supported.ui) {
e$jscomp$213.media.setAttribute("tabindex", -1);
}
u$jscomp$0.dispatchEvent.call(e$jscomp$213, e$jscomp$213.media, "timeupdate");
u$jscomp$0.dispatchEvent.call(e$jscomp$213, e$jscomp$213.media, "durationchange");
clearInterval(e$jscomp$213.timers.buffering);
e$jscomp$213.timers.buffering = setInterval(function() {
e$jscomp$213.media.buffered = i$jscomp$94.getVideoLoadedFraction();
if (null === e$jscomp$213.media.lastBuffered || e$jscomp$213.media.lastBuffered < e$jscomp$213.media.buffered) {
u$jscomp$0.dispatchEvent.call(e$jscomp$213, e$jscomp$213.media, "progress");
}
e$jscomp$213.media.lastBuffered = e$jscomp$213.media.buffered;
if (1 === e$jscomp$213.media.buffered) {
clearInterval(e$jscomp$213.timers.buffering);
u$jscomp$0.dispatchEvent.call(e$jscomp$213, e$jscomp$213.media, "canplaythrough");
}
}, 200);
setTimeout(function() {
return k$jscomp$0.build.call(e$jscomp$213);
}, 50);
},
onStateChange : function(t$jscomp$165) {
var i$jscomp$95 = t$jscomp$165.target;
switch(clearInterval(e$jscomp$213.timers.playing), t$jscomp$165.data) {
case -1:
u$jscomp$0.dispatchEvent.call(e$jscomp$213, e$jscomp$213.media, "timeupdate");
e$jscomp$213.media.buffered = i$jscomp$95.getVideoLoadedFraction();
u$jscomp$0.dispatchEvent.call(e$jscomp$213, e$jscomp$213.media, "progress");
break;
case 0:
e$jscomp$213.media.paused = true;
if (e$jscomp$213.media.loop) {
i$jscomp$95.stopVideo();
i$jscomp$95.playVideo();
} else {
u$jscomp$0.dispatchEvent.call(e$jscomp$213, e$jscomp$213.media, "ended");
}
break;
case 1:
if (e$jscomp$213.media.seeking) {
u$jscomp$0.dispatchEvent.call(e$jscomp$213, e$jscomp$213.media, "seeked");
}
e$jscomp$213.media.seeking = false;
if (e$jscomp$213.media.paused) {
u$jscomp$0.dispatchEvent.call(e$jscomp$213, e$jscomp$213.media, "play");
}
e$jscomp$213.media.paused = false;
u$jscomp$0.dispatchEvent.call(e$jscomp$213, e$jscomp$213.media, "playing");
e$jscomp$213.timers.playing = setInterval(function() {
u$jscomp$0.dispatchEvent.call(e$jscomp$213, e$jscomp$213.media, "timeupdate");
}, 50);
if (e$jscomp$213.media.duration !== i$jscomp$95.getDuration()) {
e$jscomp$213.media.duration = i$jscomp$95.getDuration();
u$jscomp$0.dispatchEvent.call(e$jscomp$213, e$jscomp$213.media, "durationchange");
}
E$jscomp$0.setQualityMenu.call(e$jscomp$213, i$jscomp$95.getAvailableQualityLevels());
break;
case 2:
e$jscomp$213.media.paused = true;
u$jscomp$0.dispatchEvent.call(e$jscomp$213, e$jscomp$213.media, "pause");
}
u$jscomp$0.dispatchEvent.call(e$jscomp$213, e$jscomp$213.elements.container, "statechange", false, {
code : t$jscomp$165.data
});
}
}
});
}
}
};
var N$jscomp$0 = {
setup : function() {
var e$jscomp$215 = this;
u$jscomp$0.toggleClass(this.elements.wrapper, this.config.classNames.embed, true);
N$jscomp$0.setAspectRatio.call(this);
if (u$jscomp$0.is.object(window.Vimeo)) {
N$jscomp$0.ready.call(this);
} else {
u$jscomp$0.loadScript(this.config.urls.vimeo.api).then(function() {
N$jscomp$0.ready.call(e$jscomp$215);
}).catch(function(t$jscomp$166) {
e$jscomp$215.debug.warn("Vimeo API failed to load", t$jscomp$166);
});
}
},
setAspectRatio : function(e$jscomp$216) {
var t$jscomp$167 = u$jscomp$0.is.string(e$jscomp$216) ? e$jscomp$216.split(":") : this.config.ratio.split(":");
var i$jscomp$96 = 100 / t$jscomp$167[0] * t$jscomp$167[1];
var n$jscomp$69 = (240 - i$jscomp$96) / 4.8;
this.elements.wrapper.style.paddingBottom = i$jscomp$96 + "%";
this.media.style.transform = "translateY(-" + n$jscomp$69 + "%)";
},
ready : function() {
var e$jscomp$217 = this;
var t$jscomp$168 = this;
var i$jscomp$97 = {
loop : t$jscomp$168.config.loop.active,
autoplay : t$jscomp$168.autoplay,
byline : false,
portrait : false,
title : false,
speed : true,
transparent : 0,
gesture : "media"
};
var n$jscomp$70 = u$jscomp$0.buildUrlParams(i$jscomp$97);
var s$jscomp$46 = t$jscomp$168.media.getAttribute("src");
if (u$jscomp$0.is.empty(s$jscomp$46)) {
s$jscomp$46 = t$jscomp$168.media.getAttribute(this.config.attributes.embed.id);
}
var a$jscomp$30 = u$jscomp$0.parseVimeoId(s$jscomp$46);
var l$jscomp$16 = u$jscomp$0.createElement("iframe");
var r$jscomp$16 = "https://player.vimeo.com/video/" + a$jscomp$30 + "?" + n$jscomp$70;
l$jscomp$16.setAttribute("src", r$jscomp$16);
l$jscomp$16.setAttribute("allowfullscreen", "");
l$jscomp$16.setAttribute("allowtransparency", "");
l$jscomp$16.setAttribute("allow", "autoplay");
var o$jscomp$10 = u$jscomp$0.createElement("div");
o$jscomp$10.appendChild(l$jscomp$16);
t$jscomp$168.media = u$jscomp$0.replaceElement(o$jscomp$10, t$jscomp$168.media);
t$jscomp$168.embed = new window.Vimeo.Player(l$jscomp$16);
t$jscomp$168.media.paused = true;
t$jscomp$168.media.currentTime = 0;
t$jscomp$168.media.play = function() {
t$jscomp$168.embed.play().then(function() {
t$jscomp$168.media.paused = false;
});
};
t$jscomp$168.media.pause = function() {
t$jscomp$168.embed.pause().then(function() {
t$jscomp$168.media.paused = true;
});
};
t$jscomp$168.media.stop = function() {
t$jscomp$168.pause();
t$jscomp$168.currentTime = 0;
};
var c$jscomp$6 = t$jscomp$168.media.currentTime;
Object.defineProperty(t$jscomp$168.media, "currentTime", {
get : function() {
return c$jscomp$6;
},
set : function(e$jscomp$218) {
var i$jscomp$98 = t$jscomp$168.media.paused;
t$jscomp$168.media.seeking = true;
u$jscomp$0.dispatchEvent.call(t$jscomp$168, t$jscomp$168.media, "seeking");
t$jscomp$168.embed.setCurrentTime(e$jscomp$218);
if (i$jscomp$98) {
t$jscomp$168.pause();
}
}
});
var d$jscomp$2 = t$jscomp$168.config.speed.selected;
Object.defineProperty(t$jscomp$168.media, "playbackRate", {
get : function() {
return d$jscomp$2;
},
set : function(e$jscomp$219) {
t$jscomp$168.embed.setPlaybackRate(e$jscomp$219).then(function() {
d$jscomp$2 = e$jscomp$219;
u$jscomp$0.dispatchEvent.call(t$jscomp$168, t$jscomp$168.media, "ratechange");
}).catch(function(e$jscomp$220) {
if ("Error" === e$jscomp$220.name) {
E$jscomp$0.setSpeedMenu.call(t$jscomp$168, []);
}
});
}
});
var p$jscomp$3 = t$jscomp$168.config.volume;
Object.defineProperty(t$jscomp$168.media, "volume", {
get : function() {
return p$jscomp$3;
},
set : function(e$jscomp$221) {
t$jscomp$168.embed.setVolume(e$jscomp$221).then(function() {
p$jscomp$3 = e$jscomp$221;
u$jscomp$0.dispatchEvent.call(t$jscomp$168, t$jscomp$168.media, "volumechange");
});
}
});
var h$jscomp$8 = t$jscomp$168.config.muted;
Object.defineProperty(t$jscomp$168.media, "muted", {
get : function() {
return h$jscomp$8;
},
set : function(e$jscomp$222) {
var i$jscomp$99 = !!u$jscomp$0.is.boolean(e$jscomp$222) && e$jscomp$222;
t$jscomp$168.embed.setVolume(i$jscomp$99 ? 0 : t$jscomp$168.config.volume).then(function() {
h$jscomp$8 = i$jscomp$99;
u$jscomp$0.dispatchEvent.call(t$jscomp$168, t$jscomp$168.media, "volumechange");
});
}
});
var m$jscomp$2 = t$jscomp$168.config.loop;
Object.defineProperty(t$jscomp$168.media, "loop", {
get : function() {
return m$jscomp$2;
},
set : function(e$jscomp$223) {
var i$jscomp$100 = u$jscomp$0.is.boolean(e$jscomp$223) ? e$jscomp$223 : t$jscomp$168.config.loop.active;
t$jscomp$168.embed.setLoop(i$jscomp$100).then(function() {
m$jscomp$2 = i$jscomp$100;
});
}
});
var g$jscomp$2 = void 0;
t$jscomp$168.embed.getVideoUrl().then(function(e$jscomp$224) {
g$jscomp$2 = e$jscomp$224;
}).catch(function(t$jscomp$169) {
e$jscomp$217.debug.warn(t$jscomp$169);
});
Object.defineProperty(t$jscomp$168.media, "currentSrc", {
get : function() {
return g$jscomp$2;
}
});
Object.defineProperty(t$jscomp$168.media, "ended", {
get : function() {
return t$jscomp$168.currentTime === t$jscomp$168.duration;
}
});
Promise.all([t$jscomp$168.embed.getVideoWidth(), t$jscomp$168.embed.getVideoHeight()]).then(function(t$jscomp$170) {
var i$jscomp$101 = u$jscomp$0.getAspectRatio(t$jscomp$170[0], t$jscomp$170[1]);
N$jscomp$0.setAspectRatio.call(e$jscomp$217, i$jscomp$101);
});
t$jscomp$168.embed.setAutopause(t$jscomp$168.config.autopause).then(function(e$jscomp$225) {
t$jscomp$168.config.autopause = e$jscomp$225;
});
t$jscomp$168.embed.getVideoTitle().then(function(i$jscomp$102) {
t$jscomp$168.config.title = i$jscomp$102;
k$jscomp$0.setTitle.call(e$jscomp$217);
});
t$jscomp$168.embed.getCurrentTime().then(function(e$jscomp$226) {
c$jscomp$6 = e$jscomp$226;
u$jscomp$0.dispatchEvent.call(t$jscomp$168, t$jscomp$168.media, "timeupdate");
});
t$jscomp$168.embed.getDuration().then(function(e$jscomp$227) {
t$jscomp$168.media.duration = e$jscomp$227;
u$jscomp$0.dispatchEvent.call(t$jscomp$168, t$jscomp$168.media, "durationchange");
});
t$jscomp$168.embed.getTextTracks().then(function(e$jscomp$228) {
t$jscomp$168.media.textTracks = e$jscomp$228;
v$jscomp$0.setup.call(t$jscomp$168);
});
t$jscomp$168.embed.on("cuechange", function(e$jscomp$229) {
var i$jscomp$103 = null;
if (e$jscomp$229.cues.length) {
i$jscomp$103 = u$jscomp$0.stripHTML(e$jscomp$229.cues[0].text);
}
v$jscomp$0.setText.call(t$jscomp$168, i$jscomp$103);
});
t$jscomp$168.embed.on("loaded", function() {
if (u$jscomp$0.is.element(t$jscomp$168.embed.element) && t$jscomp$168.supported.ui) {
t$jscomp$168.embed.element.setAttribute("tabindex", -1);
}
});
t$jscomp$168.embed.on("play", function() {
if (t$jscomp$168.media.paused) {
u$jscomp$0.dispatchEvent.call(t$jscomp$168, t$jscomp$168.media, "play");
}
t$jscomp$168.media.paused = false;
u$jscomp$0.dispatchEvent.call(t$jscomp$168, t$jscomp$168.media, "playing");
});
t$jscomp$168.embed.on("pause", function() {
t$jscomp$168.media.paused = true;
u$jscomp$0.dispatchEvent.call(t$jscomp$168, t$jscomp$168.media, "pause");
});
t$jscomp$168.embed.on("timeupdate", function(e$jscomp$230) {
t$jscomp$168.media.seeking = false;
c$jscomp$6 = e$jscomp$230.seconds;
u$jscomp$0.dispatchEvent.call(t$jscomp$168, t$jscomp$168.media, "timeupdate");
});
t$jscomp$168.embed.on("progress", function(e$jscomp$231) {
t$jscomp$168.media.buffered = e$jscomp$231.percent;
u$jscomp$0.dispatchEvent.call(t$jscomp$168, t$jscomp$168.media, "progress");
if (1 === parseInt(e$jscomp$231.percent, 10)) {
u$jscomp$0.dispatchEvent.call(t$jscomp$168, t$jscomp$168.media, "canplaythrough");
}
});
t$jscomp$168.embed.on("seeked", function() {
t$jscomp$168.media.seeking = false;
u$jscomp$0.dispatchEvent.call(t$jscomp$168, t$jscomp$168.media, "seeked");
u$jscomp$0.dispatchEvent.call(t$jscomp$168, t$jscomp$168.media, "play");
});
t$jscomp$168.embed.on("ended", function() {
t$jscomp$168.media.paused = true;
u$jscomp$0.dispatchEvent.call(t$jscomp$168, t$jscomp$168.media, "ended");
});
t$jscomp$168.embed.on("error", function(e$jscomp$232) {
t$jscomp$168.media.error = e$jscomp$232;
u$jscomp$0.dispatchEvent.call(t$jscomp$168, t$jscomp$168.media, "error");
});
setTimeout(function() {
return k$jscomp$0.build.call(t$jscomp$168);
}, 0);
}
};
var x$jscomp$74 = u$jscomp$0.getBrowser();
var L$jscomp$0 = {
setup : function() {
if (this.media) {
if (u$jscomp$0.toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", this.type), true), u$jscomp$0.toggleClass(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), true), this.isEmbed && u$jscomp$0.toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", "video"), true), this.supported.ui && (u$jscomp$0.toggleClass(this.elements.container, this.config.classNames.pip.supported, d$jscomp$0.pip && this.isHTML5 && 
this.isVideo), u$jscomp$0.toggleClass(this.elements.container, this.config.classNames.airplay.supported, d$jscomp$0.airplay && this.isHTML5), u$jscomp$0.toggleClass(this.elements.container, this.config.classNames.stopped, this.config.autoplay), u$jscomp$0.toggleClass(this.elements.container, this.config.classNames.isIos, x$jscomp$74.isIos), u$jscomp$0.toggleClass(this.elements.container, this.config.classNames.isTouch, this.touch)), this.isVideo && (this.elements.wrapper = u$jscomp$0.createElement("div", 
{
class : this.config.classNames.video
}), u$jscomp$0.wrap(this.media, this.elements.wrapper)), this.isEmbed) {
switch(this.provider) {
case "youtube":
P$jscomp$0.setup.call(this);
break;
case "vimeo":
N$jscomp$0.setup.call(this);
case "mp4upload":
P$jscomp$0.setup.call(this);
break;
}
} else {
if (this.isHTML5) {
k$jscomp$0.setTitle.call(this);
}
}
} else {
this.debug.warn("No media element found!");
}
},
cancelRequests : function() {
if (this.isHTML5) {
u$jscomp$0.removeElement(this.media.querySelectorAll("source"));
this.media.setAttribute("src", this.config.blankVideo);
this.media.load();
this.debug.log("Cancelled network requests");
}
}
};
var M$jscomp$0 = {
insertElements : function(e$jscomp$233, t$jscomp$171) {
var i$jscomp$104 = this;
if (u$jscomp$0.is.string(t$jscomp$171)) {
u$jscomp$0.insertElement(e$jscomp$233, this.media, {
src : t$jscomp$171
});
} else {
if (u$jscomp$0.is.array(t$jscomp$171)) {
t$jscomp$171.forEach(function(t$jscomp$172) {
u$jscomp$0.insertElement(e$jscomp$233, i$jscomp$104.media, t$jscomp$172);
});
}
}
},
change : function(t$jscomp$173) {
var i$jscomp$105 = this;
if (u$jscomp$0.is.object(t$jscomp$173) && "sources" in t$jscomp$173 && t$jscomp$173.sources.length) {
L$jscomp$0.cancelRequests.call(this);
this.destroy.call(this, function() {
switch(u$jscomp$0.removeElement(i$jscomp$105.media), i$jscomp$105.media = null, u$jscomp$0.is.element(i$jscomp$105.elements.container) && i$jscomp$105.elements.container.removeAttribute("class"), i$jscomp$105.type = t$jscomp$173.type, i$jscomp$105.provider = u$jscomp$0.is.empty(t$jscomp$173.sources[0].provider) ? e$jscomp$8.html5 : t$jscomp$173.sources[0].provider, i$jscomp$105.supported = d$jscomp$0.check(i$jscomp$105.type, i$jscomp$105.provider, i$jscomp$105.config.inline), i$jscomp$105.provider + 
":" + i$jscomp$105.type) {
case "html5:video":
i$jscomp$105.media = u$jscomp$0.createElement("video");
break;
case "html5:audio":
i$jscomp$105.media = u$jscomp$0.createElement("audio");
break;
case "youtube:video":
case "vimeo:video":
case "mp4upload:video":
i$jscomp$105.media = u$jscomp$0.createElement("div", {
src : t$jscomp$173.sources[0].src
});
}
i$jscomp$105.elements.container.appendChild(i$jscomp$105.media);
if (u$jscomp$0.is.boolean(t$jscomp$173.autoplay)) {
i$jscomp$105.config.autoplay = t$jscomp$173.autoplay;
}
if (i$jscomp$105.isHTML5) {
if (i$jscomp$105.config.crossorigin) {
i$jscomp$105.media.setAttribute("crossorigin", "");
}
if (i$jscomp$105.config.autoplay) {
i$jscomp$105.media.setAttribute("autoplay", "");
}
if ("poster" in t$jscomp$173) {
i$jscomp$105.media.setAttribute("poster", t$jscomp$173.poster);
}
if (i$jscomp$105.config.loop.active) {
i$jscomp$105.media.setAttribute("loop", "");
}
if (i$jscomp$105.config.muted) {
i$jscomp$105.media.setAttribute("muted", "");
}
if (i$jscomp$105.config.inline) {
i$jscomp$105.media.setAttribute("playsinline", "");
}
}
k$jscomp$0.addStyleHook.call(i$jscomp$105);
if (i$jscomp$105.isHTML5) {
M$jscomp$0.insertElements.call(i$jscomp$105, "source", t$jscomp$173.sources);
}
i$jscomp$105.config.title = t$jscomp$173.title;
L$jscomp$0.setup.call(i$jscomp$105);
if (i$jscomp$105.isHTML5) {
if ("tracks" in t$jscomp$173) {
M$jscomp$0.insertElements.call(i$jscomp$105, "track", t$jscomp$173.tracks);
}
i$jscomp$105.media.load();
}
if (i$jscomp$105.isHTML5 || i$jscomp$105.isEmbed && !i$jscomp$105.supported.ui) {
k$jscomp$0.build.call(i$jscomp$105);
}
i$jscomp$105.fullscreen.update();
}, true);
} else {
this.debug.warn("Invalid source format");
}
}
};
return function() {
function n$jscomp$71(s$jscomp$47, a$jscomp$31) {
var r$jscomp$17 = this;
if (l$jscomp$0(this, n$jscomp$71), this.timers = {}, this.ready = false, this.loading = false, this.failed = false, this.touch = d$jscomp$0.touch, this.media = s$jscomp$47, u$jscomp$0.is.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || u$jscomp$0.is.nodeList(this.media) || u$jscomp$0.is.array(this.media)) && (this.media = this.media[0]), this.config = u$jscomp$0.extend({}, i$jscomp$3, a$jscomp$31, function() {
try {
return JSON.parse(r$jscomp$17.media.getAttribute("data-plyr-config"));
} catch (e$jscomp$234) {
return {};
}
}()), this.elements = {
container : null,
buttons : {},
display : {},
progress : {},
inputs : {},
settings : {
menu : null,
panes : {},
tabs : {}
},
captions : null
}, this.captions = {
active : null,
currentTrack : null
}, this.fullscreen = {
active : false
}, this.options = {
speed : [],
quality : []
}, this.debug = new h$jscomp$6(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", d$jscomp$0), !u$jscomp$0.is.nullOrUndefined(this.media) && u$jscomp$0.is.element(this.media)) {
if (this.media.plyr) {
this.debug.warn("Target already setup");
} else {
if (this.config.enabled) {
if (d$jscomp$0.check().api) {
this.elements.original = this.media.cloneNode(true);
var o$jscomp$11 = this.media.tagName.toLowerCase();
var c$jscomp$7 = null;
var p$jscomp$4 = null;
var m$jscomp$3 = null;
switch(o$jscomp$11) {
case "div":
if (c$jscomp$7 = this.media.querySelector("iframe"), u$jscomp$0.is.element(c$jscomp$7)) {
if (p$jscomp$4 = c$jscomp$7.getAttribute("src"), this.provider = u$jscomp$0.getProviderByUrl(p$jscomp$4), this.elements.container = this.media, this.media = c$jscomp$7, this.elements.container.className = "", m$jscomp$3 = u$jscomp$0.getUrlParams(p$jscomp$4), !u$jscomp$0.is.empty(m$jscomp$3)) {
var g$jscomp$3 = ["1", "true"];
if (g$jscomp$3.includes(m$jscomp$3.autoplay)) {
this.config.autoplay = true;
}
if (g$jscomp$3.includes(m$jscomp$3.playsinline)) {
this.config.inline = true;
}
if (g$jscomp$3.includes(m$jscomp$3.loop)) {
this.config.loop.active = true;
}
}
} else {
this.provider = this.media.getAttribute(this.config.attributes.embed.provider);
this.media.removeAttribute(this.config.attributes.embed.provider);
}
if (u$jscomp$0.is.empty(this.provider) || !Object.keys(e$jscomp$8).includes(this.provider)) {
return void this.debug.error("Setup failed: Invalid provider");
}
this.type = t$jscomp$1.video;
break;
case "video":
case "audio":
this.type = o$jscomp$11;
this.provider = e$jscomp$8.html5;
if (this.media.hasAttribute("crossorigin")) {
this.config.crossorigin = true;
}
if (this.media.hasAttribute("autoplay")) {
this.config.autoplay = true;
}
if (this.media.hasAttribute("playsinline")) {
this.config.inline = true;
}
if (this.media.hasAttribute("muted")) {
this.config.muted = true;
}
if (this.media.hasAttribute("loop")) {
this.config.loop.active = true;
}
break;
default:
return void this.debug.error("Setup failed: unsupported type");
}
this.supported = d$jscomp$0.check(this.type, this.provider, this.config.inline);
if (this.supported.api) {
this.listeners = new C$jscomp$0(this);
this.storage = new A$jscomp$0(this);
this.media.plyr = this;
if (!u$jscomp$0.is.element(this.elements.container)) {
this.elements.container = u$jscomp$0.createElement("div");
u$jscomp$0.wrap(this.media, this.elements.container);
}
this.elements.container.setAttribute("tabindex", 0);
k$jscomp$0.addStyleHook.call(this);
L$jscomp$0.setup.call(this);
if (this.config.debug) {
u$jscomp$0.on(this.elements.container, this.config.events.join(" "), function(e$jscomp$235) {
r$jscomp$17.debug.log("event: " + e$jscomp$235.type);
});
}
if (this.isHTML5 || this.isEmbed && !this.supported.ui) {
k$jscomp$0.build.call(this);
}
this.listeners.container();
this.listeners.global();
this.fullscreen = new y$jscomp$59(this);
this.ads = new S$jscomp$0(this);
} else {
this.debug.error("Setup failed: no support");
}
} else {
this.debug.error("Setup failed: no support");
}
} else {
this.debug.error("Setup failed: disabled by config");
}
}
} else {
this.debug.error("Setup failed: no suitable element passed");
}
}
return r$jscomp$1(n$jscomp$71, [{
key : "play",
value : function() {
var e$jscomp$236 = this;
return u$jscomp$0.is.function(this.media.play) ? this.ads.enabled && !this.ads.initialized ? this.ads.managerPromise.then(function() {
return e$jscomp$236.ads.play();
}).catch(function() {
return e$jscomp$236.media.play();
}) : this.media.play() : null;
}
}, {
key : "pause",
value : function() {
if (this.playing && u$jscomp$0.is.function(this.media.pause)) {
this.media.pause();
}
}
}, {
key : "togglePlay",
value : function(e$jscomp$237) {
if (u$jscomp$0.is.boolean(e$jscomp$237) ? e$jscomp$237 : !this.playing) {
this.play();
} else {
this.pause();
}
}
}, {
key : "stop",
value : function() {
if (this.isHTML5) {
this.media.load();
} else {
this.media.stop();
}
}
}, {
key : "restart",
value : function() {
this.currentTime = 0;
}
}, {
key : "rewind",
value : function(e$jscomp$238) {
this.currentTime = this.currentTime - (u$jscomp$0.is.number(e$jscomp$238) ? e$jscomp$238 : this.config.seekTime);
}
}, {
key : "forward",
value : function(e$jscomp$239) {
this.currentTime = this.currentTime + (u$jscomp$0.is.number(e$jscomp$239) ? e$jscomp$239 : this.config.seekTime);
}
}, {
key : "increaseVolume",
value : function(e$jscomp$240) {
var t$jscomp$174 = this.media.muted ? 0 : this.volume;
this.volume = t$jscomp$174 + (u$jscomp$0.is.number(e$jscomp$240) ? e$jscomp$240 : 1);
}
}, {
key : "decreaseVolume",
value : function(e$jscomp$241) {
var t$jscomp$175 = this.media.muted ? 0 : this.volume;
this.volume = t$jscomp$175 - (u$jscomp$0.is.number(e$jscomp$241) ? e$jscomp$241 : 1);
}
}, {
key : "toggleCaptions",
value : function(e$jscomp$242) {
if (this.supported.ui && u$jscomp$0.is.element(this.elements.buttons.captions)) {
var t$jscomp$176 = u$jscomp$0.is.boolean(e$jscomp$242) ? e$jscomp$242 : -1 === this.elements.container.className.indexOf(this.config.classNames.captions.active);
if (this.captions.active !== t$jscomp$176) {
this.captions.active = t$jscomp$176;
u$jscomp$0.toggleState(this.elements.buttons.captions, this.captions.active);
u$jscomp$0.toggleClass(this.elements.container, this.config.classNames.captions.active, this.captions.active);
u$jscomp$0.dispatchEvent.call(this, this.media, this.captions.active ? "captionsenabled" : "captionsdisabled");
}
}
}
}, {
key : "airplay",
value : function() {
if (d$jscomp$0.airplay) {
this.media.webkitShowPlaybackTargetPicker();
}
}
}, {
key : "toggleControls",
value : function(e$jscomp$243) {
var t$jscomp$177 = this;
if (u$jscomp$0.is.element(this.elements.controls) && this.supported.ui && !this.isAudio) {
var i$jscomp$106 = 0;
var n$jscomp$72 = e$jscomp$243;
var s$jscomp$48 = false;
if (!u$jscomp$0.is.boolean(e$jscomp$243)) {
if (u$jscomp$0.is.event(e$jscomp$243)) {
s$jscomp$48 = "enterfullscreen" === e$jscomp$243.type;
n$jscomp$72 = ["touchstart", "touchmove", "mouseenter", "mousemove", "focusin"].includes(e$jscomp$243.type);
if (["touchmove", "touchend", "mousemove"].includes(e$jscomp$243.type)) {
i$jscomp$106 = 2E3;
}
if (!(this.touch || "focusin" !== e$jscomp$243.type)) {
i$jscomp$106 = 3E3;
u$jscomp$0.toggleClass(this.elements.controls, this.config.classNames.noTransition, true);
}
} else {
n$jscomp$72 = u$jscomp$0.hasClass(this.elements.container, this.config.classNames.hideControls);
}
}
if (clearTimeout(this.timers.controls), n$jscomp$72 || this.paused || this.loading) {
if (u$jscomp$0.toggleClass(this.elements.container, this.config.classNames.hideControls, false) && u$jscomp$0.dispatchEvent.call(this, this.media, "controlsshown"), this.paused || this.loading) {
return;
}
if (this.touch) {
i$jscomp$106 = 3E3;
}
}
if (!(n$jscomp$72 && !this.playing)) {
this.timers.controls = setTimeout(function() {
if (!t$jscomp$177.elements.controls.pressed && !t$jscomp$177.elements.controls.hover || s$jscomp$48) {
if (!u$jscomp$0.hasClass(t$jscomp$177.elements.container, t$jscomp$177.config.classNames.hideControls)) {
u$jscomp$0.toggleClass(t$jscomp$177.elements.controls, t$jscomp$177.config.classNames.noTransition, false);
}
if (u$jscomp$0.toggleClass(t$jscomp$177.elements.container, t$jscomp$177.config.classNames.hideControls, true)) {
u$jscomp$0.dispatchEvent.call(t$jscomp$177, t$jscomp$177.media, "controlshidden");
if (t$jscomp$177.config.controls.includes("settings") && !u$jscomp$0.is.empty(t$jscomp$177.config.settings)) {
E$jscomp$0.toggleMenu.call(t$jscomp$177, false);
}
}
}
}, i$jscomp$106);
}
}
}
}, {
key : "on",
value : function(e$jscomp$244, t$jscomp$178) {
u$jscomp$0.on(this.elements.container, e$jscomp$244, t$jscomp$178);
}
}, {
key : "off",
value : function(e$jscomp$245, t$jscomp$179) {
u$jscomp$0.off(this.elements.container, e$jscomp$245, t$jscomp$179);
}
}, {
key : "destroy",
value : function(e$jscomp$246) {
var t$jscomp$180 = this;
var i$jscomp$107 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
if (this.ready) {
var n$jscomp$73 = function() {
document.body.style.overflow = "";
t$jscomp$180.embed = null;
if (i$jscomp$107) {
if (Object.keys(t$jscomp$180.elements).length) {
u$jscomp$0.removeElement(t$jscomp$180.elements.buttons.play);
u$jscomp$0.removeElement(t$jscomp$180.elements.captions);
u$jscomp$0.removeElement(t$jscomp$180.elements.controls);
u$jscomp$0.removeElement(t$jscomp$180.elements.wrapper);
t$jscomp$180.elements.buttons.play = null;
t$jscomp$180.elements.captions = null;
t$jscomp$180.elements.controls = null;
t$jscomp$180.elements.wrapper = null;
}
if (u$jscomp$0.is.function(e$jscomp$246)) {
e$jscomp$246();
}
} else {
t$jscomp$180.listeners.clear();
u$jscomp$0.replaceElement(t$jscomp$180.elements.original, t$jscomp$180.elements.container);
u$jscomp$0.dispatchEvent.call(t$jscomp$180, t$jscomp$180.elements.original, "destroyed", true);
if (u$jscomp$0.is.function(e$jscomp$246)) {
e$jscomp$246.call(t$jscomp$180.elements.original);
}
t$jscomp$180.ready = false;
setTimeout(function() {
t$jscomp$180.elements = null;
t$jscomp$180.media = null;
}, 200);
}
};
switch(this.stop(), this.provider + ":" + this.type) {
case "html5:video":
case "html5:audio":
clearTimeout(this.timers.loading);
k$jscomp$0.toggleNativeControls.call(this, true);
n$jscomp$73();
break;
case "youtube:video":
clearInterval(this.timers.buffering);
clearInterval(this.timers.playing);
if (null !== this.embed && u$jscomp$0.is.function(this.embed.destroy)) {
this.embed.destroy();
}
n$jscomp$73();
break;
case "vimeo:video":
if (null !== this.embed) {
this.embed.unload().then(n$jscomp$73);
}
n$jscomp$73();
break;
case "mp4upload:video":
if (null !== this.embed) {
this.embed.unload().then(n$jscomp$73);
}
setTimeout(n$jscomp$73, 200);
}
}
}
}, {
key : "supports",
value : function(e$jscomp$247) {
return d$jscomp$0.mime.call(this, e$jscomp$247);
}
}, {
key : "isHTML5",
get : function() {
return Boolean(this.provider === e$jscomp$8.html5);
}
}, {
key : "isEmbed",
get : function() {
return Boolean(this.isYouTube || this.isVimeo || this.ismp4upload);
}
}, {
key : "isYouTube",
get : function() {
return Boolean(this.provider === e$jscomp$8.youtube);
}
}, {
key : "isVimeo",
get : function() {
return Boolean(this.provider === e$jscomp$8.vimeo);
}
}, {
key : "ismp4upload",
get : function() {
return Boolean(this.provider === e$jscomp$8.vimeo);
}
}, {
key : "isVideo",
get : function() {
return Boolean(this.type === t$jscomp$1.video);
}
}, {
key : "isAudio",
get : function() {
return Boolean(this.type === t$jscomp$1.audio);
}
}, {
key : "paused",
get : function() {
return Boolean(this.media.paused);
}
}, {
key : "playing",
get : function() {
return Boolean(!this.paused && !this.ended && (!this.isHTML5 || this.media.readyState > 2));
}
}, {
key : "ended",
get : function() {
return Boolean(this.media.ended);
}
}, {
key : "currentTime",
set : function(e$jscomp$248) {
var t$jscomp$181 = 0;
if (u$jscomp$0.is.number(e$jscomp$248)) {
t$jscomp$181 = e$jscomp$248;
}
if (t$jscomp$181 < 0) {
t$jscomp$181 = 0;
} else {
if (t$jscomp$181 > this.duration) {
t$jscomp$181 = this.duration;
}
}
this.media.currentTime = parseFloat(t$jscomp$181.toFixed(4));
this.debug.log("Seeking to " + this.currentTime + " seconds");
},
get : function() {
return Number(this.media.currentTime);
}
}, {
key : "buffered",
get : function() {
var e$jscomp$249 = this.media.buffered;
return u$jscomp$0.is.number(e$jscomp$249) ? e$jscomp$249 : e$jscomp$249 && e$jscomp$249.length && this.duration > 0 ? e$jscomp$249.end(0) / this.duration : 0;
}
}, {
key : "seeking",
get : function() {
return Boolean(this.media.seeking);
}
}, {
key : "duration",
get : function() {
var e$jscomp$250 = parseInt(this.config.duration, 10);
var t$jscomp$182 = this.media ? Number(this.media.duration) : 0;
return Number.isNaN(e$jscomp$250) ? t$jscomp$182 : e$jscomp$250;
}
}, {
key : "volume",
set : function(e$jscomp$251) {
var t$jscomp$183 = e$jscomp$251;
if (u$jscomp$0.is.string(t$jscomp$183)) {
t$jscomp$183 = Number(t$jscomp$183);
}
if (!u$jscomp$0.is.number(t$jscomp$183)) {
t$jscomp$183 = this.storage.get("volume");
}
if (!u$jscomp$0.is.number(t$jscomp$183)) {
t$jscomp$183 = this.config.volume;
}
if (t$jscomp$183 > 1) {
t$jscomp$183 = 1;
}
if (t$jscomp$183 < 0) {
t$jscomp$183 = 0;
}
this.config.volume = t$jscomp$183;
this.media.volume = t$jscomp$183;
if (this.muted && t$jscomp$183 > 0) {
this.muted = false;
}
},
get : function() {
return Number(this.media.volume);
}
}, {
key : "muted",
set : function(e$jscomp$252) {
var t$jscomp$184 = e$jscomp$252;
if (!u$jscomp$0.is.boolean(t$jscomp$184)) {
t$jscomp$184 = this.storage.get("muted");
}
if (!u$jscomp$0.is.boolean(t$jscomp$184)) {
t$jscomp$184 = this.config.muted;
}
this.config.muted = t$jscomp$184;
this.media.muted = t$jscomp$184;
},
get : function() {
return Boolean(this.media.muted);
}
}, {
key : "hasAudio",
get : function() {
return !this.isHTML5 || (!!this.isAudio || (Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)));
}
}, {
key : "speed",
set : function(e$jscomp$253) {
var t$jscomp$185 = null;
if (u$jscomp$0.is.number(e$jscomp$253)) {
t$jscomp$185 = e$jscomp$253;
}
if (!u$jscomp$0.is.number(t$jscomp$185)) {
t$jscomp$185 = this.storage.get("speed");
}
if (!u$jscomp$0.is.number(t$jscomp$185)) {
t$jscomp$185 = this.config.speed.selected;
}
if (t$jscomp$185 < .1) {
t$jscomp$185 = .1;
}
if (t$jscomp$185 > 2) {
t$jscomp$185 = 2;
}
if (this.config.speed.options.includes(t$jscomp$185)) {
this.config.speed.selected = t$jscomp$185;
this.media.playbackRate = t$jscomp$185;
} else {
this.debug.warn("Unsupported speed (" + t$jscomp$185 + ")");
}
},
get : function() {
return Number(this.media.playbackRate);
}
}, {
key : "quality",
set : function(e$jscomp$254) {
var t$jscomp$186 = null;
if (u$jscomp$0.is.string(e$jscomp$254)) {
t$jscomp$186 = e$jscomp$254;
}
if (!u$jscomp$0.is.string(t$jscomp$186)) {
t$jscomp$186 = this.storage.get("quality");
}
if (!u$jscomp$0.is.string(t$jscomp$186)) {
t$jscomp$186 = this.config.quality.selected;
}
if (this.options.quality.includes(t$jscomp$186)) {
this.config.quality.selected = t$jscomp$186;
this.media.quality = t$jscomp$186;
} else {
this.debug.warn("Unsupported quality option (" + t$jscomp$186 + ")");
}
},
get : function() {
return this.media.quality;
}
}, {
key : "loop",
set : function(e$jscomp$255) {
var t$jscomp$187 = u$jscomp$0.is.boolean(e$jscomp$255) ? e$jscomp$255 : this.config.loop.active;
this.config.loop.active = t$jscomp$187;
this.media.loop = t$jscomp$187;
},
get : function() {
return Boolean(this.media.loop);
}
}, {
key : "source",
set : function(e$jscomp$256) {
M$jscomp$0.change.call(this, e$jscomp$256);
},
get : function() {
return this.media.currentSrc;
}
}, {
key : "poster",
set : function(e$jscomp$257) {
if (this.isHTML5 && this.isVideo) {
if (u$jscomp$0.is.string(e$jscomp$257)) {
this.media.setAttribute("poster", e$jscomp$257);
}
} else {
this.debug.warn("Poster can only be set on HTML5 video");
}
},
get : function() {
return this.isHTML5 && this.isVideo ? this.media.getAttribute("poster") : null;
}
}, {
key : "autoplay",
set : function(e$jscomp$258) {
var t$jscomp$188 = u$jscomp$0.is.boolean(e$jscomp$258) ? e$jscomp$258 : this.config.autoplay;
this.config.autoplay = t$jscomp$188;
},
get : function() {
return Boolean(this.config.autoplay);
}
}, {
key : "language",
set : function(e$jscomp$259) {
if (u$jscomp$0.is.string(e$jscomp$259) && (this.toggleCaptions(!u$jscomp$0.is.empty(e$jscomp$259)), !u$jscomp$0.is.empty(e$jscomp$259))) {
var t$jscomp$189 = e$jscomp$259.toLowerCase();
if (this.language !== t$jscomp$189) {
this.captions.language = t$jscomp$189;
v$jscomp$0.setText.call(this, null);
v$jscomp$0.setLanguage.call(this);
u$jscomp$0.dispatchEvent.call(this, this.media, "languagechange");
}
}
},
get : function() {
return this.captions.language;
}
}, {
key : "pip",
set : function(e$jscomp$260) {
var t$jscomp$190 = "picture-in-picture";
var i$jscomp$108 = "inline";
if (d$jscomp$0.pip) {
var n$jscomp$74 = u$jscomp$0.is.boolean(e$jscomp$260) ? e$jscomp$260 : this.pip === i$jscomp$108;
this.media.webkitSetPresentationMode(n$jscomp$74 ? t$jscomp$190 : i$jscomp$108);
}
},
get : function() {
return d$jscomp$0.pip ? this.media.webkitPresentationMode : null;
}
}], [{
key : "supported",
value : function(e$jscomp$261, t$jscomp$191, i$jscomp$109) {
return d$jscomp$0.check(e$jscomp$261, t$jscomp$191, i$jscomp$109);
}
}, {
key : "loadSprite",
value : function(e$jscomp$262, t$jscomp$192) {
return u$jscomp$0.loadSprite(e$jscomp$262, t$jscomp$192);
}
}]), n$jscomp$71;
}();
});
