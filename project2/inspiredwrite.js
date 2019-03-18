/*
Inspired Write (Write with a quote as your inspiration)
--I want to do a page animation where after the page loads,
vector graphics of stars and glitter or something like that 
come down around the title--
1. pull quote from API when generate quote prompt comes up
2. Create text box note taking area 
3. Code that temporarily saves entry
4. make it display old journal entries when new prompt is loaded
5. create deocration animation for heading on illustrator and put it in
*/

//Note setup code
const jTitle = document.querySelector('.title');
const jEntry = document.querySelector('.entry');
const defaultTitle = 'Title For Your Writing'
const defaultEntry = 'Write your own thoughts and INSPIRE...'


let save = () => {
     localStorage['entry'] = jEntry.innerHTML;
    localStorage['title'] = jTitle.innerHTML;
 }

//launch function...does it work for mobile?
jTitle.onkeyup = () => save();
jEntry.onkeyup = () => save();

//get quote from API 

const url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
function getJSON(url) {
    return fetch(url)
    .then(function(response) {
        if(!response.ok) {
            throw Error(response.statusText);
        } else {
            return response.json()
    }
})
    .catch(function(error) {
console.log(error);
    })
}

