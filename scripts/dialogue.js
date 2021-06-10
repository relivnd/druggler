import { drawDealer } from "./dealerProjector.js";
import { dialogue } from "./dialogueContent.js";

let indexOfDialogue = 0;

document.getElementById('button1').onclick = _ => goForward();

let i = 0;
let speed = 50;

const speak = (t) => {
    document.getElementById("textBubble").innerHTML = "";
    let text = t;
    let IntervalID = setInterval(typewriter, 50);
    document.getElementById("textBubble").innerHTML="";
    function typewriter() {
        document.getElementById("textBubble").innerHTML += text.charAt(i);
        drawDealer(i % 2 !== 0 ? mouthOpen : mouthClose);
        if (i >= text.length){
            clearInterval(IntervalID);
            i = 0;
        } else {
            i++;
        }
    }
}

function goForward(){
    if (indexOfDialogue < dialogue.dialogue.length) {
        let speech             = dialogue.dialogue[indexOfDialogue].content;
        // document.getElementById("button1").style.display = "none";


        speak(speech, button1Listener);
        indexOfDialogue = indexOfDialogue +1;
    }else {
        indexOfDialogue = 0;
    }
}

const button1Listener = _ => {
    document.getElementById("button1").style.display = dialogue.dialogue[indexOfDialogue].button1.visibility;
    document.getElementById("button1").innerHTML     = dialogue.dialogue[indexOfDialogue].button1.value;
}

