window.addEventListener('load', function () {
  let loaderContainer = document.querySelector('.loader-container');
  loaderContainer.style.opacity = '0';
  setTimeout(function () {
    loaderContainer.style.display = 'none';
  }, 500);
});
