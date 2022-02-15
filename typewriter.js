const newSentence = "hello there from lighthouse labs";

const typewriter = function(sentence) {
  //printing one chacarter at a time
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, i * 50);

    //implement a new line after all characters are printed
    if (i === sentence.length - 1) {
      setTimeout(() => {
        process.stdout.write("\n");
      }, i * 50);
    }
  }
};

typewriter(newSentence);