import { drawDealer } from "./dealerProjector.js";
import { dialogue } from "./dialogueContent.js";

let indexOfDialogue = 0;
let k = 0;
let userName = "Stranger";
let userLocation = "";

const input = document.querySelector('input');

document.getElementById('button1').onclick = _ => goForward();
document.getElementById('button2').onclick = _ => alternativeOption();
document.getElementById('textField').onchange = _ => updateUsername(document.getElementById('textField').textContent);

let i = 0;
let speed = 50;

const speak = (t) => {
    hideInteractionElementsWhileSpeaking();
    document.getElementById("textBubble").innerHTML = "";
    let text = t;
    let IntervalID = setInterval(typewriter, 50);
    document.getElementById("textBubble").innerHTML="";
    function typewriter() {
        document.getElementById("textBubble").innerHTML += text.charAt(i);
        drawDealer(i % 2 !== 0);
        if (i >= text.length){
            clearInterval(IntervalID);
            i = 0;
            updateElementsListener(dialogue.dialogue[indexOfDialogue]);
        } else {
            i++;
        }
    }
}

function goForward(){
    if (indexOfDialogue < dialogue.dialogue.length) {
        checkRadioButtons();
        let speech = checkForSpecialty(dialogue.dialogue[indexOfDialogue].content);
        speak(speech);
        indexOfDialogue = indexOfDialogue +1;
    }else {
        indexOfDialogue = 0;
    }
}

function alternativeOption(){
    window.location.href = 'https://www.google.com';
}

const updateElementsListener = o => {
    document.getElementById("button1").style.display        = o.button1.visibility;
    document.getElementById("button1").innerHTML            = o.button1.value;
    document.getElementById("button2").style.display        = o.button2;
    document.getElementById("enterName").style.display      = o.textfield.visibility;
    document.getElementById("graph1").style.display         = o.graph1;
    document.getElementById("graph2").style.display         = o.graph2;
    document.getElementById("graph3").style.display         = o.graph3;
    document.getElementById("graph4").style.display         = o.graph4;
    document.getElementById("graph5").style.display         = o.graph5;
    document.getElementById("enterCountry").style.display   = o.radiobutton;
    document.getElementById("credits").style.display        = o.credits;
}

const hideInteractionElementsWhileSpeaking = _ => {
    document.getElementById("button1").style.display        = 'none';
    document.getElementById("button2").style.display        = 'none';
    document.getElementById("enterName").style.display      = 'none';
    document.getElementById("enterCountry").style.display   ='none';
}

const updateUsername = t => {
    userName =  t.target.value;
}

const checkForSpecialty = t => {
    let s = t;
    s = s.replace(/NAME/, userName);
    s = s.replace(/LOCATION/, userLocation);
    if (s.includes("COUNTRYJOKE")){
        if (userLocation === "Switzerland"){
            s = s.replace(/COUNTRYJOKE/, "Do you know why do many Swiss people have such big noses? The air is free!");
        }else if (userLocation === "Japan"){
            s = s.replace(/COUNTRYJOKE/, "My Japanese friend told me a Perl Harbor joke. I told him he bombed it.");
        } else if (userLocation === "Norway"){
        s = s.replace(/COUNTRYJOKE/, "What car does a norwegian man drive? A fjord focus!");
        } else if (userLocation === "USA"){
            s = s.replace(/COUNTRYJOKE/, "What’s the difference between America and a bottle of milk? – In 200 years the milk will have developed a culture.");
        }else {
            s = s.replace(/COUNTRYJOKE/, "Why doesn't England have a designated kidney bank? They have a Liverpool.");
        }
    }
    return s;
}

const checkRadioButtons = _ => {
    let ele = document.getElementsByName('countries');
    for(k = 0; k < ele.length; k++){
        if(ele[k].checked){
            userLocation = ele[k].value;
        }
    }
    console.log(userLocation);
}

input.addEventListener('input', updateUsername);

//TODO: Credits Styling

//TODO: Layout of Components

//TODO: Update Charts

