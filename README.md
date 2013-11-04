# jQuery-AspectRatio

Get the apsect ratio of the viewport using a jquery module.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/lgoldstien/jquery-aspectratio/master/dist/aspectratio.min.js
[max]: https://raw.github.com/lgoldstien/jquery-aspectratio/master/dist/aspectratio.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/aspectratio.min.js"></script>
<script>
jQuery(function($) {
  $.aspectratio(); 
  /**
   * runs on the window (viewport)
   * returns { dec: "decimal ratio", height: "y aspect ratio", width: "x aspect ratio" }
   */
  $("selector").aspectratio();
  /**
   * runs on the selector element
   * returns { dec: "decimal ratio", height: "y aspect ratio", width: "x aspect ratio" }
   */
});
</script>
```

## Release History
_0.2.0_
* Changed to a grunt based project
* Added basic assertion tests
* Converted to full jquery plugin

_0.1.0_
* Initial release
