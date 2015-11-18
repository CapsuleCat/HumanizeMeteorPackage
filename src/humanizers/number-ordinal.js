NumberOrdinal = function(number) {
  number = parseInt(number);

  var execute = function () {
    var abs = Math.abs(number);

    if ([11, 12, 13].indexOf(abs % 100) === -1) {
      switch (abs % 10) {
        case 1:  return 'st';
        case 2:  return 'nd';
        case 3:  return 'rd';
        default: return 'th';
      }
    } else {
      return 'th';
    }
  }

  return {
    execute: execute
  };
};
