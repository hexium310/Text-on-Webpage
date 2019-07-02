(function() {
  'use strict';

  const cssState = { isInserted: false };
  const setCssState = (bool) => {
    cssState.isInserted = bool;
  };

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

        var isCSSInserted;
        isCSSInserted = isCSSInserted === undefined ? false : true;
      `,
    }, () => {
      chrome.tabs.executeScript({ file: 'floating-window.js' });
      !cssState.isInserted && chrome.tabs.insertCSS({ file: 'floating-window.css' }, () => {
        setCssState(true);
      });
    });
  });
})();
