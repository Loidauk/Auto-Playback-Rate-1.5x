// ==UserScript==
// @name         Auto Playback Rate 1.5x
// @namespace    https://github.com
// @version      0.9
// @description  Automatically set playback rate to 1.5x
// @author       Loidauk / TellerMoose
// @match        https://mcloud.bz/*
// @match        https://vid2a41.site/*
// @match        https://megacloud.tv/*
// @match        https://81u6xl9d.xyz/*
// @match        https://vidco.pro/*
// @match        https://embtaku.pro/*
// @match        https://embtaku.com/*
// @match        https://awish.pro/*
// @match        https://megaf.cc/*
// @icon         https://static.vecteezy.com/system/resources/previews/003/833/977/non_2x/fast-delivery-icon-with-timer-fast-stopwatch-line-icon-fast-delivery-shipping-service-sign-speed-clock-symbol-urgency-deadline-time-management-competition-sign-stock-vector.jpg
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    // Function to set playback rate
    function setPlaybackRate(rate) {
        let video = document.querySelector('video');
        if (video) {
            video.playbackRate = rate;
            console.log(`Playback rate set to ${rate}`);
        } else {
            console.log("Video element not found.");
        }
    }

    // Wait for the video element to load and then set the playback rate
    function waitForVideo() {
        let video = document.querySelector('video');
        if (video) {
            setPlaybackRate(1.5); // Set your desired playback rate here
        } else {
            setTimeout(waitForVideo, 1000); // Check again in 1 second
        }
    }

    // Initiate the wait for video function
    waitForVideo();
})();
