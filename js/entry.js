function Entry(){}

Entry.prototype.wordCount = function(body) {
  var output = 0;
  var words = body.split(" ");
  for (var i = 1; i <= words.length; i++) {
    output += 1;
  }
  return output;
};

Entry.prototype.charCount = function(body) {
  var vowels = ["a", "e", "i", "o", "u"];
  var count = 0;

  for (var j = 0; j <= body.length; j++) {
    if (vowels.indexOf(body[j]) != -1) {
      count += 1;
    }
  }
  return count;
};

exports.entryModule = Entry;
