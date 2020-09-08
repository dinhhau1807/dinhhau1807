export const debounce = (immediateFunc, debounceFunc, wait) => {
  let timeout;

  return function executedFunction(...args) {
    if (immediateFunc) {
      immediateFunc();
    }

    const later = () => {
      clearTimeout(timeout);
      debounceFunc(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
