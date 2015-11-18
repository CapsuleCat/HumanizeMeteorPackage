NumberUnromanize = function (roman) {
  var ROMAN_STRING_MATCHER = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  var map = {
      'M': 1000,
      'CM': 900,
      'D': 500,
      'CD': 400,
      'C': 100,
      'XC': 90,
      'L': 50,
      'XL': 40,
      'X': 10,
      'IX': 9,
      'V': 5,
      'IV': 4,
      'I': 1,
  };

  var execute = function () {
    if (roman.length === 0 || ! roman.match(ROMAN_STRING_MATCHER)) {
      return;
    }

    total = 0;
    var i = roman.length;
    while (i > 0) {
      var digit = map[roman[--i]];
      if (i > 0) {
        var previousDigit = map[roman[i - 1]];
        if (previousDigit < digit) {
          digit -= previousDigit;
          --i;
        }
      }

      total += digit;
    }
    return total;
  }

  return {
    execute: execute
  }
}