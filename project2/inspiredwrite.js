/*
Inspired Write (Write with a quote as your inspiration)
--I want to do a page animation where after the page loads,
vector graphics of stars and glitter or something like that 
come down around the title--
1. pull quote from API when generate quote prompt comes up
2. Create text box note taking area 
3. Code that saves and stores entry
4. make it display old journal entries on other page
5. code that lets you see an entire old entry when title is clicked
ALSO create deocration animation for heading on illustrator and put it in
*/

//get quote from API
const API_KEY = "f08fa284bfmsh444f1a1e0572292p1ac7f4jsnfe63d66f7001";
const URL = "https://qvoca-bestquotes-v1.p.rapidapi.com/quote";
function getQuote(URL) {
  var myHeaders = new Headers();
  myHeaders.append("RapidAPIProject", "default-application_3723");
  myHeaders.append("X-RapidAPI-Key", API_KEY);
  var myInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default"
  };
  return fetch(URL, myInit)
    .then(function(response) {
      return response.json();
    })
    .catch(function(error) {
      console.log(error);
    });
}

async function quoteButton() {
  const quote = await getQuote(URL);
  console.log(quote);
  displayQuote(quote);
}

//function to display quote
function displayQuote(quote) {
  let item = document.getElementById("quotePrompt");
  item.setAttribute("data-id", quote.id);
  item.innerHTML = `${quote.message} - ${quote.author}`;
}

//local storage

//save button
function saveButton() {
  let eNotes = JSON.parse(localStorage.getItem("notes"));
  if (!eNotes) {
    eNotes = [];
  }
  const quoteElement = document.getElementById("quotePrompt");
  console.dir(quoteElement);
  const savedNote = {
    saveQuote: quoteElement.innerHTML,
    saveTitle: document.getElementById("title").value,
    saveEntry: document.getElementById("entry").value
  };
  eNotes.push(savedNote);

  localStorage.setItem("notes", JSON.stringify(eNotes));
}

//display note titles on links page
function displayOldEntry() {
  let saved = JSON.parse(localStorage.getItem("notes"));
  console.log(saved);
  for (i = 0; i < saved.length; i++) {
    let item = document.createElement("a");
    item.setAttribute("href", "displayNote.html");
    item.innerHTML = `${saved[i].saveTitle}`;
    document.getElementById("linksToOld").appendChild(item);
  }
}

function oldEntry() {
    
  
let saved = JSON.parse(localStorage.getItem("notes"));
  
  for (i = 0; i < saved.length; i++) {
    if (saved[i].saveTitle == title) {
      let oldTitle = document.createElement("h2");
      let oldQuote = document.createElement("p");
      let oldEntry = document.createElement("p");
      oldTitle.innerHTML = `${saved[i].saveTitle}`;
      oldQuote.innerHTML = `${saved[i].saveQuote}`;
      oldEntry.innerHTML = `${saved[i].saveEntry}`;
      document.getElementById("noteTitle").appendChild(oldTitle);
      document.getElementById("noteQuote").appendChild(oldQuote);
      document.getElementById("noteEntry").appendChild(oldEntry);
    }
  }
}
