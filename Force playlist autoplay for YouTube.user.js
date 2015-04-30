// ==UserScript==
// @version     1.0.1
// @name        Force playlist autoplay for YouTube
// @match       *://www.youtube.com/*
// @run-at      document-start
// @grant       none
// @noframes
// ==/UserScript==
(function ytapl() {
    'use strict';
    var injection;
    if (document.querySelector('[name="html5player/html5player"]')) {
        window.location.reload(false);
    } else if (!document.getElementById('ytapl')) {
        injection = document.createElement('script');
        injection.id = 'ytapl';
        injection.textContent = '(' + ytapl + '())';
        document.documentElement.appendChild(injection);
        return;
    }
    function playerReady(api) {
        function playerState(state) {
            if (state === 0) {
                api.nextVideo();
            }
        }
        if (typeof api === 'object' && !document.getElementById('c4-player')) {
            api.addEventListener('onStateChange', playerState, false);
        }
    }
    window.onYouTubePlayerReady = playerReady;
}());