// @ts-check
// NAME: toggleFriendActivity
// AUTHOR: MMA | TheGeeKing
// VERSION: 1.0
// DESCRIPTION: Toggle(Show/Hide) Friend Activity Tab

/// <reference path="../globals.d.ts" />

(function ToggleFriendActivity() {
  var checkExist = setInterval(function() {
    var elementExists = document.getElementsByClassName("main-buddyFeed-buddyFeedRoot");
    if (elementExists.length==1) {
       startUp();
       clearInterval(checkExist);
    }
  }, 0);
  
  function startUp(){
    if (Spicetify.LocalStorage.get("toggleFriendActivity_activity") == null){
      Spicetify.LocalStorage.set("toggleFriendActivity_activity", "1");
    }
    if(Spicetify.LocalStorage.get("toggleFriendActivity_activity")=="0"){
      document.getElementsByClassName("main-buddyFeed-buddyFeedRoot")[0].style.display = "none";
      document.getElementsByClassName("main-userWidget-box")[0].style.right = "120px";
    }
  }
  
  function toggleFriendActivity() {
    document.getElementsByClassName("main-buddyFeed-buddyFeedRoot")[0].style.display = document.getElementsByClassName("main-buddyFeed-buddyFeedRoot")[0].style.display === "none" ? "" : "none";
    document.getElementsByClassName("main-userWidget-box")[0].style.right = document.getElementsByClassName("main-userWidget-box")[0].style.right === "120px" ? "" : "120px";
    if(Spicetify.LocalStorage.get("toggleFriendActivity_activity")=="0"){
      Spicetify.LocalStorage.set("toggleFriendActivity_activity", "1");
    } else {
      Spicetify.LocalStorage.set("toggleFriendActivity_activity", "0");
    }

  }
  
  // UI Text
  const BUTTON_NAME_TEXT = "Toggle(Show/Hide) Friend Activity Tab";
  const BUTTON_ICON = `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`
  new Spicetify.Topbar.Button(
    BUTTON_NAME_TEXT,
    BUTTON_ICON,
    toggleFriendActivity
    );
})();
