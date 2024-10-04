 let input = document.getElementById("textarea");

input.addEventListener("input", function () {
  let word_count = document.getElementById("word_count");
  let char_count = document.getElementById("char_count");
  let sentence_count = document.getElementById("sentence_count");

  let total_text = input.value;

  let total_char = total_text.length;
  char_count.innerHTML = total_char;


  // for words
  let total_words = total_text.length;
  total_words = total_text.split(" ").length -1;
  word_count.innerHTML = total_words;

  // for sentence
  let total_sentence = total_text.length;
  total_sentence = total_text.split(".").length -1;
  sentence_count.innerHTML = total_sentence;

});
