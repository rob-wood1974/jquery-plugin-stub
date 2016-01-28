$.fn.alpha = function() {
    'use strict';
    var alphadiv = $('<span style="position:absolute;left:960px;">Alpha is Go!</span>');
    this.append(alphadiv);
    alphadiv.animate({
      left: "12px"
    }, 1000, function() {});
    return this;
};