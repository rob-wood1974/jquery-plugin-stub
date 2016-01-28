$.fn.beta = function() {
    'use strict';
    var betadiv = $('<span style="position:absolute;right:960px;">Beta is Go!</span>');
    this.append(betadiv);
    betadiv.animate({
      right: "12px"
    }, 1000, function() {});
    return this;
};
