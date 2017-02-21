(function(global){
  'use strict';
  var body = document.querySelector('body');
  global.addEventListener('keydown', function(e) {
    if ( e.keyCode === 71 && e.shiftKey ) {
      body.classList.toggle('show-grid');
      body.classList.toggle('overlay');
    }
  });
})(this);
