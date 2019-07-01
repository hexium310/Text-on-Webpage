(() => {
  const oldFloatingWindow = document.getElementById('textOnWebpageExtensionFloatingWindow');
  oldFloatingWindow && oldFloatingWindow.remove();

  const floatingWindow = document.createElement('div');

  const closingButton = document.createElement('div');
  closingButton.setAttribute('id', 'textOnWebpageExtensionClosingButton');
  closingButton.setAttribute('class', 'text-on-webpage-extension-closing-button');
  closingButton.textContent = '×';

  floatingWindow.appendChild(closingButton);
  floatingWindow.setAttribute('id', 'textOnWebpageExtensionFloatingWindow');
  floatingWindow.setAttribute('class', 'text-on-webpage-extension-floating-window');
  floatingWindow.innerHTML += data.text.replace(/\n/g, '<br>');
  floatingWindow.style.color = data.color;
  floatingWindow.style.backgroundColor = data.rgba;

  document.body.appendChild(floatingWindow);

  document.getElementById('textOnWebpageExtensionClosingButton').addEventListener('click', () => {
    document.getElementById('textOnWebpageExtensionFloatingWindow').remove();
  });
})();
