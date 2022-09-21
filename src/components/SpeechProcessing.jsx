import React from "react";
import { synth } from "../App";

/******* TEXT TO SPEECH *******/

export const speechOut = (text) => {
    const synth = window.SpeechSynthesis;
    const poppy = new SpeechSynthesisUtterance(text);

    synth.speak(poppy);
    console.log("Poppy is speaking");
}





/******* SPEECH TO TEXT *******/

export const speechIn = () => {

}