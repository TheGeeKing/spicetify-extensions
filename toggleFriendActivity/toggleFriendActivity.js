// @ts-check
// NAME: toggleFriendActivity
// AUTHOR: TheGeeKing
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
    if (Spicetify.LocalStorage.get("activity") == null){
      Spicetify.LocalStorage.set("activity", "1");
    }
    if(Spicetify.LocalStorage.get("activity")=="0"){
      document.getElementsByClassName("main-buddyFeed-buddyFeedRoot")[0].style.display = "none";
      document.getElementsByClassName("main-userWidget-box")[0].style.right = "120px";
    }
  }
  
  function toggleFriendActivity() {
    document.getElementsByClassName("main-buddyFeed-buddyFeedRoot")[0].style.display = document.getElementsByClassName("main-buddyFeed-buddyFeedRoot")[0].style.display === "none" ? "" : "none";
    document.getElementsByClassName("main-userWidget-box")[0].style.right = document.getElementsByClassName("main-userWidget-box")[0].style.right === "120px" ? "" : "120px";
    if(Spicetify.LocalStorage.get("activity")=="0"){
      Spicetify.LocalStorage.set("activity", "1");
    } else {
      Spicetify.LocalStorage.set("activity", "0");
    }

  }
  
  // UI Text
  const BUTTON_NAME_TEXT = "Toggle(Show/Hide) Friend Activity Tab";
  const BUTTON_ICON = `<p style="font-size:8px">Activity</p>`
  new Spicetify.Topbar.Button(
    BUTTON_NAME_TEXT,
    BUTTON_ICON,
    toggleFriendActivity
    );
})();
