var wrapper = function (command) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    
    args = [null].concat(args)

    var instance = new (Function.prototype.bind.apply(command, args));

    return instance.execute();
  }
}

Humanize = {
  Number: {
    ordinalize: wrapper(NumberOrdanilize),
    ordinal: wrapper(NumberOrdinal),
    toRoman: wrapper(NumberRomanize),
    fromRoman: wrapper(NumberUnromanize),
    binarySuffix: wrapper(NumberBinarySuffix),
    preciseBinarySuffix: wrapper(NumberPreciseBinarySuffix),
  },
  String: {
    humanize: wrapper(StringHumanizer),
    truncate: wrapper(StringTruncate)
  }
}