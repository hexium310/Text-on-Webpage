(function() {
  'use strict';

  document.getElementById('displayButton').addEventListener('click', () => {
    const text = document.getElementById('text').value;
    const color = document.getElementById('color').value;
    const rgbaR = document.getElementById('rgbaR').value;
    const rgbaG = document.getElementById('rgbaG').value;
    const rgbaB = document.getElementById('rgbaB').value;
    const rgbaA = document.getElementById('rgbaA').value;

    chrome.tabs.executeScript({
      code: `
        var data = ${JSON.stringify({
          text,
          color,
          rgba: `rgba(${rgbaR},${rgbaG},${rgbaB},${rgbaA})`,
        })};
      `,
    }, () => {
      chrome.tabs.executeScript({ file: 'floating-window.js' });
      chrome.tabs.insertCSS({ file: 'floating-window.css' });
    });
  });
})();
