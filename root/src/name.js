/*!
 * {%= name %}
 * {%= description %}
 * {%= homepage %}
 * Author: {%= author_name %}
 * Author URL: {%= author_url %}
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */
/* globals define */

define(['jquery', 'jqueryui', 'bootstrap', 'jquery.alpha', 'jquery.beta'], function ($, window, document, undefined) {

 'use strict';

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

    });
    
});