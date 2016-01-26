/*!
 * {%= name %}
 * {%= description %}
 * {%= homepage %}
 * Author: {%= author_name %}
 * Author URL: {%= author_url %}
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

 /*██████████████████████████████████████████████████████████
 █ This is a combination of jQuery UI Widget + RequireJS module boilerplate (for 1.8/9+)
 █ and (jQuery mobile) jQuery UI Widget-factory plugin boilerplate (for 1.8/9+),
 █ from https://github.com/jquery-boilerplate/jquery-patterns
 █ RW 2016
███████████████████████████████████████████████████████████*/
 
// Note from James:
//
// This assumes you are using the RequireJS+jQuery file, and
// that the following files are all in the same directory:
//
// - require-jquery.js
// - jquery-ui.custom.min.js (custom jQuery UI build with widget factory)
// - templates/
//    - asset.html
// - ao.myWidget.js

// Then you can construct the widget like so:

// {%= js_safe_name %}.js file:

(function () {
   'use strict';

  // Uncomment this version for a sample using templates
  // define(["jquery", "text!templates/asset.html", "jquery-ui.custom.min","jquery.tmpl"], function ($, assetHtml) {
  define(["jquery", "jqueryui"], function ($, window, document, undefined) {

      // define your widget under a namespace of your choice
      // 'ao' is used here as a demonstration
      $.widget( "{%= js_safe_name %}", {

          // Options to be used as defaults
          options: {
              foo: true,
              bar: false
          },

          // Set up widget (e.g. create element, apply theming,
          // bind events, etc.)
          _create: function () {

              // _create will automatically run the first time
              // this widget is called. Put the initial widget
              // set-up code here, then you can access the element
              // on which the widget was called via this.element.
              // The options defined above can be accessed via
              // this.options

              //this.element.addStuff();
              //this.element.addStuff();
              //this.element.tmpl(assetHtml).appendTo(this.content);
          },

          // Destroy an instantiated plugin and clean up modifications
          // that the widget has made to the DOM
          destroy: function () {
              //t his.element.removeStuff();
              // For UI 1.8, destroy must be invoked from the base
              // widget
              $.Widget.prototype.destroy.call( this );
              // For UI 1.9, define _destroy instead and don't worry
              // about calling the base widget
          },

          // Private methods/props start with underscores
          _dosomething: function(){  },

          // Public methods like these below can can be called
                  // externally:
          // $("#myelem").foo( "enable", arguments );

          enable: function() {  },

          methodB: function ( event ) {
              // _trigger dispatches callbacks the plugin user can
              // subscribe to
              //signature: _trigger( "callbackName" , [eventObject],
              // [uiObject] )
              console.log("methodB called");
              console.log(event);
          },

          methodA: function ( event ) {
              this._trigger("dataChanged", event, {
                  key: "someValue"
              });
          },

          //Respond to any changes the user makes to the option method
          _setOption: function ( key, value ) {
              switch (key) {
              case "someValue":
                  //this.options.someValue = doSomethingWith( value );
                  console.log(value);
                  break;
              default:
                  //this.options[ key ] = value;
                  break;
              }

              // For UI 1.8, _setOption must be manually invoked from
              // the base widget
              $.Widget.prototype._setOption.apply( this, arguments );
              // For UI 1.9 the _super method can be used instead
              //this._super( "_setOption", key, value );
          }

          //somewhere assetHtml would be used for templating, depending
          // on your choice.
      });
  })( jQuery, window, document );
}());

// If you are going to use the RequireJS optimizer to combine files
// together, you can leave off the "ao.myWidget" argument to define:
// define(["jquery", "text!templates/asset.html", "jquery-ui.custom.min"], …



//usage: $("#myelem").foo( options );

/* Some additional notes - delete this section before using the boilerplate.

 We can also self-init this widget whenever a new page in jQuery Mobile is created. 
 jQuery Mobile's "page" plugin dispatches a "create" event when a jQuery Mobile page 
 (found via data-role=page attr) is first initialized.

We can listen for that event (called "pagecreate" ) and run our plugin automatically
 whenever a new page is created.

$(document).bind("pagecreate", function (e) {
    // In here, e.target refers to the page that was created
    // (it's the target of the pagecreate event)
    // So, we can simply find elements on this page that match a
    // selector of our choosing, and call our plugin on them.
    // Here's how we'd call our "foo" plugin on any element with a
    // data-role attribute of "foo":
    $(e.target).find("[data-role='foo']").foo(options);

    // Or, better yet, let's write the selector accounting for the configurable
    // data-attribute namespace
    $(e.target).find(":jqmData(role='foo')").foo(options);
});

That's it. Now you can simply reference the script containing your widget and pagecreate 
binding in a page running jQuery Mobile site, and it will automatically run like any 
other jQM plugin.
 */
