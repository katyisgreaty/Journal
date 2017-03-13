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
  var punctuation = [".", "!", "?"];
  for (var k = 0; k < body.length; k++) {
    if ((punctuation.indexOf(body[k])) != -1) {
      var slice_location = k;
      var first_sentence = body.slice(0,slice_location + 1);
      var sentence_words = first_sentence.split(" ");
      if (sentence_words.length <= 8) {
        return sentence_words.join(" ");
      } else {
        var newArray = []
        for(i = 0; i < 8; i++)
        {
          newArray.push(sentence_words[i]);
        }
        return newArray.join(" ");
      }
      break;
    }
  }
};


exports.entryModule = Entry;
