StringHumanizer = function(text, capitalize, separator, forbiddenWords) {
  text = text || '';
  capitalize = (typeof capitalize === 'undefined' ? true : capitalize);
  separator = separator || '_';
  forbiddenWords = forbiddenWords || [ 'id' ];

  var _toTitleCase = function(str) {
    return str.replace(/(?:^|\s)\w/g, function(match) {
      return match.toUpperCase();
    });
  }

  var _replaceArray = function(replaceString, find, replace) {
    var regex; 
    for (var i = 0; i < find.length; i++) {
      regex = new RegExp(find[i], "g");
      replaceString = replaceString.replace(regex, replace);
    }
    return replaceString;
  };

  var execute = function() {
    text = text.trim().replace(new RegExp(separator, 'g'), ' ');
    text = _replaceArray(text, forbiddenWords, '').trim();

    text = text.toLowerCase();

    return capitalize ? _toTitleCase(text) : text;
  }

  return {
    execute: execute
  }
};
