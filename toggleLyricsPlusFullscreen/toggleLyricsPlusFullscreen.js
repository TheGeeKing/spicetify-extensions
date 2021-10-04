// @ts-check
// NAME: toggleLyricsPlusFullscreen
// AUTHOR: MMA | TheGeeKing
// VERSION: 1.0
// DESCRIPTION: Toggle Fullscreen for Lyrics Plus

/// <reference path="../globals.d.ts" />

(function ToggleLyricsPlusFullscreen() {
  function toggleLyricsPlusFullscreen() {
    document.getElementsByClassName("Root__nav-bar")[0].style.display = document.getElementsByClassName("Root__nav-bar")[0].style.display === "none" ? "" : "none";
    document.getElementsByClassName("main-buddyFeed-buddyFeedRoot")[0].style.display = document.getElementsByClassName("main-buddyFeed-buddyFeedRoot")[0].style.display === "none" ? "" : "none";
    document.getElementsByClassName("main-coverSlotExpanded-container")[0].style.display = document.getElementsByClassName("main-coverSlotExpanded-container")[0].style.display === "block" ? "" : "block";
    document.getElementsByClassName("main-userWidget-box")[0].style.display = document.getElementsByClassName("main-userWidget-box")[0].style.display === "none" ? "" : "none";
    document.getElementsByClassName("main-topBar-back")[0].style.display = document.getElementsByClassName("main-topBar-back")[0].style.display === "none" ? "" : "none";
    document.getElementsByClassName("main-topBar-forward")[0].style.display = document.getElementsByClassName("main-topBar-forward")[0].style.display === "none" ? "" : "none";
    document.getElementsByClassName("main-topBar-container")[0].style.left = document.getElementsByClassName("main-topBar-container")[0].style.left === "30px" ? "" : "30px";
    if(document.fullscreenElement!==null){document.exitFullscreen()}else{document.documentElement.requestFullscreen()}
  }
  
  // UI Text
  const BUTTON_NAME_TEXT = "Toggle Fullscreen for Lyrics Plus";
  const BUTTON_ICON = `<p style="font-size:14px">LPF</p>`
  new Spicetify.Topbar.Button(
    BUTTON_NAME_TEXT,
    BUTTON_ICON,
    toggleLyricsPlusFullscreen
    );
})();
