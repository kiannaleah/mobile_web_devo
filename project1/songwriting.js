/* Javascript for Generating Songwriting Prompts 
0. create arrays of options for each prompt
1.loop through check box options and find which one's were checked
2. for each checked box call the function 
(if no box is checked, return "error, select at least 1 prompt")
3. run each function to generate a random prompt from that section
4. Display results for each prompt selected 
*/

var words_prompts = [
"timeless", "quiet", "did you mean it?", "I hope you did", "talk", "long day", 
"forget", "king", "not anymore", "paint", "the color pink", "all day", "I hear you", 
"said", "awake", "shoes", "restless", "mirrior", "dandelions", "flawed", "blur",
"present", "before & after", "eyes", "insignificant"
];

var mood = [ "tired", "upbeat", "summer vibes", "tense", "anxious", "hopeful",
"heartbroken", "in love", "fragile", "romantic", "isolated", "nostalgic", "devoted",
"chill", "bright/colorful", "triumph", "dramatic", "introspective", "motivating", "yearning",
"serene"
];

var scene = [ "moving", "montage", "growing up", "an ending", "a beginning", 
"first kiss", "roadtrip", "morning", "walking in paris", "breakup", 
"wedding scene", "opening scene", "someone talking to a gravestone", 
"flashback to childhood", "an accusation", "someone brought to tears",
"two people talking while dancing", "meeting someone new"
];

var key_sig = [ "C Major", "G Major", "D Major","A Major","E Major","B Major", "F Major",
"E Minor", "B Minor", "F# Minor", "C# Minor", "G# Minor", "D# Minor", "A# Minor", 
"D Minor", "G Minor", "C Minor", "F Minor", "Bb Minor", "Eb Minor",
"Ab Minor"
];

var time_sig = [ "4/4", "3/4", "2/4", "6/8", "2/2"];

var bpm = [ "80-115", "90-110", "120", "120-160", "140", "66-76", 
"76-108", "60-66"
];

function checkedStatus() {
    //loop through all the check boxes and see which ones are checked
    

}


function random(){
    Math.floor(Math.random * Array.length)
}

