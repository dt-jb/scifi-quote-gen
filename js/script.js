/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


//Creates array of quotes from which to generate and display one at random.
let quotes = [
  {
    quote: 'I do not fear computers. I fear the lack of them.',
    source: 'Isaac Asimov',
    citation: '"The Age of Miracle Chips," <i>Time</i>',
    year: 1978,
    nationality: 'Russian American',
    occupation: 'writer and professor'
  },

  {
    quote: 'There never can be a man so lost as one who is lost in the vast and intricate corridors of his own lonely mind, where none may reach and none may save.',
    source: 'Isaac Asimov',
    citation: '<i>Pebble in the Sky</i>',
    year: 1950,
    nationality: 'Russian American',
    occupation: 'writer and professor'
  },

  {
    quote: 'We earth men have a talent for ruining big, beautiful things.',
    source: 'Ray Bradbury',
    citation: '<i>The Martian Chronicles</i>',
    year: 1950,
    //nationality: 'American',
    occupation: 'author and screenwriter'
  },

  {
    quote: 'We are an impossibility in an impossible universe.',
    source: 'Ray Bradbury',
    //nationality: 'American',
    occupation: 'author and screenwriter'
  },

  {
    quote: 'It is not easy to see how the more extreme forms of nationalism can long survive when men have seen the Earth in its true perspective as a single small globe against the stars.',
    source: 'Sir Arthur C. Clarke',
    citation: '<i>The Exploration of Space</i>',
    year: 1951,
    nationality: 'English',
    occupation: 'science-fiction writer, inventor, and undersea explorer'
  },

  {
    quote: 'Deep in the human unconscious is a pervasive need for a logical universe that makes sense. But the real universe is always one step beyond logic.',
    source: 'Frank Herbert',
    citation: '<i>Dune</i>',
    year: 1965,
    nationality: 'American',
    occupation: 'science-fiction writer'
  },
  {
    quote: 'Science is magic that works.',
    source: 'Kurt Vonnegut',
    citation: '<i>Cat\'s Cradle</i>',
    year: 1963,
    nationality: 'American',
    occupation: 'writer'
  },
  {
    quote: 'Looking at these stars suddenly dwarfed my own troubles and all the gravities of terrestrial life.',
    source: 'H. G. Wells',
    citation: '<i>The Time Machine</i>',
    year: 1895,
    nationality: 'English',
    occupation: 'science-fiction writer'
  },
  {
    quote: 'The gods do not protect fools. Fools are protected by more capable fools.',
    source: 'Larry Niven',
    citation: '<i>Ringworld</i>',
    year: 1970,
    nationality: 'American',
    occupation: 'science-fiction writer'
  },
  {
    quote: 'Love is that condition in which the happiness of another person is essential to your own.',
    source: 'Robert A. Heinlein',
    citation: '<i>Stranger in a Strange Land</i>',
    year: 1961,
    nationality: 'English',
    occupation: 'science-fiction writer and aeronautical engineer'
  }
];
console.log(quotes);


//Selects a quote from the quotes array at random
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}


//printQuote() takes random quote object and structures the html by retrieving object properties and placing with html tags
function printQuote() {
  let randomQuote = getRandomQuote();
  let newQuote = '';

  newQuote += "<p class=\"quote\">" + randomQuote.quote + "</p>";
  newQuote += "<p class=\"source\">" + randomQuote.source + ", ";

  if (randomQuote.hasOwnProperty('nationality')) {
    newQuote += randomQuote.nationality;
  }
  if (randomQuote.hasOwnProperty('occupation')) {
    newQuote += " " + randomQuote.occupation + "</span>";
  }
  if (randomQuote.hasOwnProperty('citation')) {
    newQuote += "<span class=\"citation\">" + randomQuote.citation + "</span>";
    newQuote += "<span class=\"year\">" + randomQuote.year + "</span></p>";
  } else {
    document.getElementById("quote-box").innerHTML = newQuote;
  }
  document.getElementById("quote-box").innerHTML = newQuote;
}
/*
function printQuote() {
  let randomQuote = getRandomQuote();
  let newQuote = '';

  newQuote += "<p class=\"quote\">" + randomQuote.quote + "</p>";
  newQuote += "<p class=\"source\">" + randomQuote.source + ", ";
  newQuote += randomQuote.nationality;
  newQuote += " " + randomQuote.occupation + "</span>";

  if (randomQuote.hasOwnProperty('citation')) {
    newQuote += "<span class=\"citation\">" + randomQuote.citation + "</span>";
    newQuote += "<span class=\"year\">" + randomQuote.year + "</span></p>";
  } else {
    document.getElementById("quote-box").innerHTML = newQuote;
  }
  document.getElementById("quote-box").innerHTML = newQuote;
}
*/
printQuote();

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
