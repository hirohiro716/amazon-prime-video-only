// ==UserScript==
// @name         Amazon Prime Video Only
// @namespace    https://github.com/hirohiro716/
// @version      0.1
// @description  Block everything except Video.
// @author       hiro
// @match        https://www.amazon.co.jp/*
// @icon         https://www.amazon.co.jp/favicon.ico
// @grant        none
// @updateURL    https://github.com/hirohiro716/amazon-prime-video-only/raw/main/amazon-prime-video-only.user.js
// @downloadURL  https://github.com/hirohiro716/amazon-prime-video-only/raw/main/amazon-prime-video-only.user.js
// ==/UserScript==

const hide = () => {
    if (window.location.href.includes("/gp/video/") === false) {
        document.querySelector("body").style.display = "none";
    }
}
setInterval(hide, 500);
