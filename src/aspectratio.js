/*
 * aspectratio
 * https://github.com/lgoldstien/jquery-aspectratio
 *
 * latest version and complete README available on Github:
 * https://github.com/lgoldstien/jquery-aspectratio
 *
 * Copyright (C) 2013 Lawrence Goldstien <@lgoldstien>
 * Licensed under the MIT license.
 */

(function($) {
    // Collection method.
    $.fn.aspectratio = function() {
        // The collection method returns the aspect ratio of all elements
        // Height and width of the window
        var height         = $(this).innerHeight();
        var width          = $(this).innerWidth();

        // Return the ratio object
        return getAspectRatio(width, height);
    };

    // Static method.
    $.aspectratio = function() {
        // The static function deals only with the viewport
        // Height and width of the window
        var height        = $(window).innerHeight();
        var width         = $(window).innerWidth();

        // Return the ratio object
        return getAspectRatio(width, height);
    };

    function getAspectRatio (width, height) {
        var gcd, ratio = {};

        // The greatest common denominator
        gcd            = width % height;

        // The decimal ratio
        ratio.dec      = (width / height).toFixed(6);

        // Width and height ratio
        ratio.width    = (width / gcd).toFixed(6);
        ratio.height   = (height / gcd).toFixed(6);

        // Return ratio if needed
        return ratio;
    }

}(jQuery));
