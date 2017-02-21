(function(global){
  'use strict';

  var body = document.body;
  document.onkeydown = function(event) {
    // shift + G -> Toogle Grid
    if ( event.shiftKey && event.keyCode === 71 ) {
      body.classList.toggle('show-grid');
    }
  };

})(this);
