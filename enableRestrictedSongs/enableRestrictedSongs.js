// @ts-check
// NAME: enableRestrictedSongs
// AUTHOR: MMA | TheGeeKing
// VERSION: 1.0
// DESCRIPTION: Enable Restricted Songs that are greyed out

/// <reference path="../globals.d.ts" />

(function EnableRestrictedSongs() {
  function enableRestrictedSongs() {
    var restrictedElements = document.querySelectorAll(".main-trackList-disabled")
    restrictedElements.forEach(restrictedElement => restrictedElement.classList.remove("main-trackList-disabled"));
  }
  
  // UI Text
  const BUTTON_NAME_TEXT = "Enable Restricted Songs that are greyed out";
  const BUTTON_ICON = `<p style="font-size:6.5px">Unrestrict</p>`
  new Spicetify.Topbar.Button(
    BUTTON_NAME_TEXT,
    BUTTON_ICON,
    enableRestrictedSongs
    );
})();
