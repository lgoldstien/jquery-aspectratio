/**
 * AspectRatio
 *
 * Requirements:
 * - jQuery 1.9.0+
 *
 * latest version and complete README available on Github:
 * https://github.com/lgoldstien/jquery-aspectratio
 *
 * Copyright 2013 @lgoldstien
 * Licensed under the MIT license.
 *
 */
(function($,window,document,Math) {

    var _height,
        _width,
        _gcd,
        _ratio = {};

    $.aspectRatio = function( elem ) {
        // Height and width of the window
        _height         = $(window).innerHeight();
        _width          = $(window).innerWidth();

        // The greatest common denominator
        _gcd            = _width % _height;

        // The decimal ratio
        _ratio.dec      = _width / _height;

        // Width and height ratio
        _ratio.width    = _width / _gcd;
        _ratio.height   = _height / _gcd;

        return _ratio;
    };

})(jQuery,window,document,Math);