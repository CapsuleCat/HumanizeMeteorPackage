NumberPreciseBinarySuffix = function(number, precision, roundCallback) {
  var _round = roundCallback || function(number, precision) {
    return parseFloat(number).toFixed(precision);
  };
  var CONVERT_THRESHOLD = 1024;
  var binaryPrefixes = [
      { size: 1125899906842624, pattern: 'PB' },
      { size: 1099511627776, pattern: 'TB' },
      { size: 1073741824, pattern: 'GB' },
      { size: 1048576, pattern: 'MB' },
      { size: 1024, pattern: 'kB' },
      { size: 0, pattern: 'bytes' },
  ];

  var execute = function () {
    var suffix = '';
    var prefix = number;

    for (var i = 0; i < binaryPrefixes.length; i++ ) {
      var size = binaryPrefixes[i].size;
      var pattern = binaryPrefixes[i].pattern;

      if (size <= number) {
        var value = (number >= CONVERT_THRESHOLD) ? number / ( 1.0 * size ) : number;
      
        suffix = pattern; 
        prefix = value;
        break;
      }
    }

    prefix = _round(prefix, precision);

    return prefix + ' ' + suffix;
  }

  return {
    execute: execute
  }
};
