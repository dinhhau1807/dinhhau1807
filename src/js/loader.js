window.addEventListener('load', function () {
  let preloadedAvatar = document.querySelector('.preloaded-avatar');
  preloadedAvatar.style.display = 'none';

  let loaderContainer = document.querySelector('.loader-container');
  loaderContainer.style.opacity = '0';
  setTimeout(function () {
    loaderContainer.style.display = 'none';
  }, 500);
});
