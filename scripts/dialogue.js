import { drawDealer } from "./dealerProjector.js";
import { dialogue } from "./dialogueContent.js";

let indexOfDialogue = 0;
let userName = "";

const input = document.querySelector('input');

document.getElementById('button1').onclick = _ => goForward();
document.getElementById('button2').onclick = _ => alternativeOption();
document.getElementById('textField').onchange = _ => updateUsername(document.getElementById('textField').textContent);

let i = 0;
let speed = 50;

const speak = (t) => {
    hideButtonsWhileSpeaking();
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
            updateButtonListener(dialogue.dialogue[indexOfDialogue]);
        } else {
            i++;
        }
    }
}

function goForward(){
    if (indexOfDialogue < dialogue.dialogue.length) {
        let speech             = dialogue.dialogue[indexOfDialogue].content;
        // document.getElementById("button1").style.display = "none";


        speak(speech);
        indexOfDialogue = indexOfDialogue +1;
    }else {
        indexOfDialogue = 0;
    }
}

function alternativeOption(){

}

const updateButtonListener = o => {
    document.getElementById("button1").style.display    = o.button1.visibility;
    document.getElementById("button1").innerHTML        = o.button1.value;
    document.getElementById("button2").style.display    = o.button2.visibility;
    document.getElementById("button2").innerHTML        = o.button2.value;
    document.getElementById("enterName").style.display  = o.textfield.visibility;
}

const hideButtonsWhileSpeaking = _ => {
    document.getElementById("button1").style.display = 'none';
    document.getElementById("button2").style.display = 'none';
}

const updateUsername = t => {
    userName =  t.target.value;
}

input.addEventListener('input', updateUsername);

const getUsername = _ => {
    return userName;
}