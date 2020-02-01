export default {
  bind(el, binding) {
    document.addEventListener('keydown', close);
    function close(evt) {
      if (event.keyCode === 27) {
        binding.value();
        if (typeof binding.value !== 'function') {
          throw new Error('Argument must be a function');
        }
      }
    }
  },
  unbind() {
    document.removeEventListener('keydown', close);
  }
};
