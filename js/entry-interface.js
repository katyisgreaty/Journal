var Entry = require('./../js/entry.js').entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var body = $('#entry').val();
    var thisEntry = new Entry();
    var output = thisEntry.wordCount(body);
    $("#entries").append(output);
  });
});
