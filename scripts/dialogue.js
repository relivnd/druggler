import { speak } from "./dealerProjector.js";
import { dialogue } from "./dialogueContent.js";

let indexOfDialogue = 0;

document.getElementById('button1').onclick = _ => goForward();



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

