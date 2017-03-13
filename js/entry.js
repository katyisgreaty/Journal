function Entry(){}

Entry.prototype.wordCount = function(body) {
  var output = 0;
  var words = body.split(" ");
  for (var i = 1; i <= words.length; i++) {
    output += 1;
  }
  return output;
};

exports.entryModule = Entry;
