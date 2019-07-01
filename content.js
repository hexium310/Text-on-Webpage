(() => {
  const oldFloatingWindow = document.getElementById('textOnWebpageExtensionFloatingWindow');
  oldFloatingWindow && oldFloatingWindow.remove();

  const floatingWindow = document.createElement('div');

  const closingButton = document.createElement('div');
  closingButton.setAttribute('id', 'textOnWebpageExtensionClosingButton');
  closingButton.textContent = '×';
  closingButton.style.fontSize = 'large';
  closingButton.style.fontWeight = 'bold';
  closingButton.style.marginLeft = 'auto';
  closingButton.style.cursor = 'pointer';

  floatingWindow.appendChild(closingButton);
  floatingWindow.setAttribute('id', 'textOnWebpageExtensionFloatingWindow');
  floatingWindow.innerHTML += data.text.replace(/\n/g, '<br>');
  floatingWindow.style.display = 'flex';
  floatingWindow.style.flexDirection = 'column';
  floatingWindow.style.color = data.color;
  floatingWindow.style.backgroundColor = data.rgba;
  floatingWindow.style.position = 'absolute';
  floatingWindow.style.top = '100px';
  floatingWindow.style.right = '20px';
  floatingWindow.style.fontSize = 'small';
  floatingWindow.style.zIndex = 1000;

  document.body.appendChild(floatingWindow);

  document.getElementById('textOnWebpageExtensionClosingButton').addEventListener('click', () => {
    document.getElementById('textOnWebpageExtensionFloatingWindow').remove();
  });
})();
