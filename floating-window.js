(() => {
  const oldFloatingWindow = document.getElementById('textOnWebpageExtensionFloatingWindow');
  oldFloatingWindow && oldFloatingWindow.remove();

  const windowMenuBar = document.createElement('div');
  windowMenuBar.setAttribute('id', 'textOnWebpageExtensionWindowMenuBar');
  windowMenuBar.setAttribute('class', 'text-on-webpage-extension-window-menu-bar');

  const collapsingButton = document.createElement('div');
  collapsingButton.setAttribute('id', 'textOnWebpageExtensionCollapsingButton');
  collapsingButton.setAttribute('class', 'text-on-webpage-extension-collapsing-button');
  collapsingButton.textContent = '−';

  const expandingButton = document.createElement('div');
  expandingButton.setAttribute('id', 'textOnWebpageExtensionExpandingButton');
  expandingButton.setAttribute('class', 'text-on-webpage-extension-expanding-button');
  expandingButton.textContent = '−';

  const closingButton = document.createElement('div');
  closingButton.setAttribute('id', 'textOnWebpageExtensionClosingButton');
  closingButton.setAttribute('class', 'text-on-webpage-extension-closing-button');
  closingButton.textContent = '×';

  windowMenuBar.insertAdjacentElement('beforeend', collapsingButton);
  windowMenuBar.insertAdjacentElement('beforeend', expandingButton);
  windowMenuBar.insertAdjacentElement('beforeend', closingButton);

  const contents = document.createElement('div');
  contents.setAttribute('id', 'textOnWebpageExtensionContents');
  contents.setAttribute('class', 'text-on-webpage-extension-contents');
  contents.insertAdjacentHTML('beforeend', data.text.replace(/\n/g, '<br>'));

  const floatingWindow = document.createElement('div');
  floatingWindow.setAttribute('id', 'textOnWebpageExtensionFloatingWindow');
  floatingWindow.setAttribute('class', 'text-on-webpage-extension-floating-window');
  floatingWindow.style.color = data.color;
  floatingWindow.style.backgroundColor = data.rgba;
  floatingWindow.insertAdjacentElement('beforeend', windowMenuBar);
  floatingWindow.insertAdjacentElement('beforeend', contents);

  document.body.insertAdjacentElement('beforeend', floatingWindow);

  closingButton.addEventListener('click', () => {
    floatingWindow.remove();
  });

  collapsingButton.addEventListener('click', () => {
    contents.style.display = 'none';
    collapsingButton.style.display = 'none';
    expandingButton.style.display = 'block';
  });

  expandingButton.addEventListener('click', () => {
    contents.style.display = 'block';
    expandingButton.style.display = 'none';
    collapsingButton.style.display = 'block';
  });
})();
