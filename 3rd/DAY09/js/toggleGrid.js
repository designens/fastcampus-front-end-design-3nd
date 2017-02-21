(function(global){
  'use strict';

  var body = document.body;
  document.onkeydown = function(event) {
    if ( event.shiftKey && event.keyCode === 71 ) {
      body.classList.toggle('show-grid');
    }
  };

})(this);
