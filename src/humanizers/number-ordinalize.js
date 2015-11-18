NumberOrdanilize = function(number) {
  number = parseInt(number);
  ordinalize = new NumberOrdinal(number);

  var execute = function () {
    return number + ordinalize.execute();
  }

  return {
    execute: execute
  };
};
