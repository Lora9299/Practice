// Task 8: Word Counter
// Create a function that takes a sentence and returns:
// Total number of words
// Number of unique words
// The most frequently used word
// Return these in an object

function wordCounter(sentence) {
  const words = sentence.trim().split(/\s+/);

  const uniqueWords = new Set(words); //set - special object that keeps unique values

  const wordCounts = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  }

  let mostFrequent = "";
  let max = 0;

  const keys = Object.keys(wordCounts);
  for (let i = 0; i < keys.length; i++) {
    const word = keys[i];
    const count = wordCounts[word];

    if (count > max) {
      mostFrequent = word;
      max = count;
    }
  }

  return {
    totalWords: words.length,
    Unique: uniqueWords.size,
    word: mostFrequent,
    count: max,
  };
}

let sentence1 = wordCounter("this is a sentence to test out this function");
console.log(sentence1);
