// ==UserScript==
// @name         GitHub pages source code
// @version      1
// @description  הצגת מקור הדף בלחיצה על Alt-S-C
// @match        https://*.github.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.io
// @grant        none
// ==/UserScript==

const userName = location.host.split('.')[0];
const userProfile = `https://github.com/${userName}`;
const repoName = location.pathname.split('/')[1] || location.host;

const pressedKeys = new Set();

document.addEventListener('keydown', event => {
  pressedKeys.add(event.code);

  if (event.altKey && pressedKeys.has('KeyS') && pressedKeys.has('KeyC')) {
    event.preventDefault();
    window.open(`${userProfile}/${repoName}`);
    pressedKeys.clear();
  }
});

document.addEventListener('keyup', event => {
  pressedKeys.delete(event.code);
});
