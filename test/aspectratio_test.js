(function($) {

  module("Element Tests", {});

  test('Gets correct element aspect ratios.', function () {
    expect(2);
    deepEqual(
      $('#test1').aspectratio(),
      { dec: "1.333333", height: "3.000000", width: "4.000000" },
      "This element should return an aspect ratio of 4:3 or 1.33333"
    );
    deepEqual(
      $('#test2').aspectratio(),
      { dec: "1.250000", height: "4.000000", width: "5.000000" },
      "This element should return an aspect ratio of 5:4 or 1.25"
    );
  });

}(jQuery));
