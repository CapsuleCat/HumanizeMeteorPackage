NumberBinarySuffix = function(number) {

  var execute = function () {
    var e = NumberPreciseBinarySuffix(number, 2, function(number, precision) {
      return +parseFloat(number).toFixed(precision);
    });

    return e.execute();
  }
  
  return {
    execute: execute
  }
}