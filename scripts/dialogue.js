import { speak } from "./dealerProjector.js";
import { dialogue } from "./dialogueContent.js";

let indexOfDialogue = 0;

document.getElementById('startGoonButton').onclick = _ => goForward();


function goForward(){
    if (indexOfDialogue > dialogue.dialogue.length) {
        const speech = dialogue.dialogue[indexOfDialogue].content;
        //const button1Visibility = dialogue.dialogue[indexOfDialogue].button1.visibility;
        //const button1Content = dialogue.dialogue[indexOfDialogue].button1.value;

        speak(speech);

        //document.getElementById("button1").style.visibility = button1Visibility;
        //document.getElementById("button1").innerHTML += button1Content;

        indexOfDialogue = indexOfDialogue +1;
    }else {
        indexOfDialogue = 0;
    }
}

