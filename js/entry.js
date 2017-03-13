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

Entry.prototype.getTeaser = function(body) {
  var firstEight = [];
  var words = body.split(" ");
  for (var k = 0; k <= 7; k++) {
    firstEight.push(words[k]);
  }
  return firstEight;
};

exports.entryModule = Entry;
