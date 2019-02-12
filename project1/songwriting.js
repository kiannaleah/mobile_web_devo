/* Javascript for Generating Songwriting Prompts 
0. create arrays of options for each prompt
1.loop through check box options and find which one's were checked
2. for each checked box call the function 
(if no box is checked, return "error, select at least 1 prompt")
3. run each function to generate a random prompt from that section
4. Display results for each prompt selected 
*/

let songPrompts = {

word: [
"timeless", "quiet", "did you mean it?", "I hope you did", "talk", "long day", 
"forget", "king", "not anymore", "paint", "the color pink", "all day", "I hear you", 
"said", "awake", "shoes", "restless", "mirrior", "dandelions", "flawed", "blur",
"present", "before & after", "eyes", "insignificant"
],

mood: [ "tired", "upbeat", "summer vibes", "tense", "anxious", "hopeful",
"heartbroken", "in love", "fragile", "romantic", "isolated", "nostalgic", "devoted",
"chill", "bright/colorful", "triumph", "dramatic", "introspective", "motivating", "yearning",
"serene"
],

scene: [ "moving", "montage", "growing up", "an ending", "a beginning", 
"first kiss", "roadtrip", "morning", "walking in paris", "breakup", 
"wedding scene", "opening scene", "someone talking to a gravestone", 
"flashback to childhood", "an accusation", "someone brought to tears",
"two people talking while dancing", "meeting someone new"
],

key: [ "C Major", "G Major", "D Major","A Major","E Major","B Major", "F Major",
"E Minor", "B Minor", "F# Minor", "C# Minor", "G# Minor", "D# Minor", "A# Minor", 
"D Minor", "G Minor", "C Minor", "F Minor", "Bb Minor", "Eb Minor",
"Ab Minor"
],

time: [ "4/4", "3/4", "2/4", "6/8", "2/2"],

bpm: [ "80-115", "90-110", "120", "120-160", "140", "66-76", 
"76-108", "60-66"
],
}

//reference point for array of checkboxes
let prompts = document.forms['songForm'].elements['prompt[]'];

function checkedStatus() {
    
    let specificArray = [];
    
    //loop through all the check boxes and see which ones are checked
    for (i=0; i < prompts.length; i++) {
        if (prompts[i].checked) {
        //if checked find matching array from songPrompts object
         specificArray = songPrompts[prompts[i].value];
           //send specific songPrompt array into random prompt generator 
    selectRandom(specificArray);
        } 
}
}


function selectRandom(promptArray){
   //get a random prompt from the array
   const option = Math.floor(Math.random() * promptArray.length);
   //display random array element to user
   let item = document.createElement("li");
   item.innerHTML = promptArray[option];
   document.getElementById("display").appendChild(item);
}


    
