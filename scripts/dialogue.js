import { speak } from "./dealerProjector.js";
import { dialogue } from "./dialogueContent.js";

let indexOfDialogue = 0;

const speech = dialogue.dialogue[indexOfDialogue].content;
console.log("Aktuell in firstText: "+ speech);

document.getElementById('true').onclick = _ => speak(speech);

