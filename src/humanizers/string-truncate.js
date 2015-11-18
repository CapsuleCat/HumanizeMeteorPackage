StringTruncate = function(text, charactersCount, append) {
  var append = append || '';

  var _trimToWord = function(text, charactersCount) {
    var breakpoint = 0;

    if (charactersCount < 0 || charactersCount > text.length) {
      breakpoint = text.length;
    } else {
      breakpoint = text.indexOf(' ', charactersCount);

      if (-1 === breakpoint) {
        breakpoint = text.length;
      }
    }

    return text.substring(0, breakpoint);
  }

  var execute = function() {
    if (charactersCount < 0 || text.length <= charactersCount) {
      return text;
    }

    var truncatedText = _trimToWord(text, charactersCount).trimRight();

    return (truncatedText === text) ? truncatedText : truncatedText + append;
  }

  return {
    execute: execute
  }
};
