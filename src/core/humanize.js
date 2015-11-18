var wrapper = function (command) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    
    var instance;
    function F() {
        // command returns **this**
        return command.apply(this, args);
    }
    F.prototype = command.prototype;
    instance = new F();
    instance.command = command;

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