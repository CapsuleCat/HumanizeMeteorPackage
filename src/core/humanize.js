var wrapper = function (command) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    
    args = [null].concat(args)

    var instance = new (Function.bind.apply(command, args));

    return instance.execute();
  }
}

Humanize = {
  Number: {
    ordinalize: wrapper(NumberOrdanilize),
    ordinal: wrapper(NumberOrdinal),
    toRoman: wrapper(NumberRomanize),
    fromRoman: wrapper(NumberUnromanize)
  },
  String: {
    humanize: wrapper(StringHumanizer),
    truncate: wrapper(StringTruncate)
  }
}