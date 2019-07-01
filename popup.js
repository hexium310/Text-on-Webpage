(function() {
  'use strict';

  document.getElementById('displayButton').addEventListener('click', () => {
    const text = document.getElementById('text').value;
    const color = document.getElementById('color').value;
    const rgbaR = document.getElementById('rgbaR').value;
    const rgbaG = document.getElementById('rgbaG').value;
    const rgbaB = document.getElementById('rgbaB').value;
    const rgbaA = document.getElementById('rgbaA').value;

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log(tabs[0].id);
      chrome.tabs.sendMessage(tabs[0].id, {
        text,
        color,
        rgba: `rgba(${rgbaR},${rgbaG},${rgbaB},${rgbaA})`,
      });
    });
  });
})();
