import React, { useState, useEffect, useCallback } from "react";

/* implemented with Web Speech API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API */
const synth = window.speechSynthesis;

/******* TEXT TO SPEECH *******/

/* borrowed from Victor Novais: https://dev.to/vicnovais/creating-a-speech-synthesizer-using-web-speech-api-and-react-4iii */
// function SelectVoice() {
//     const [voices, setVoices] = useState<SpeechSynthesisVoice>([]);

//     const populateVoiceList = useCallback(() => {
//         const newVoices = synth.getVoices();
//         setVoices(newVoices);
//     }, []);
    
//     useEffect(() => {
//         populateVoiceList();
//         if (synth.onvoiceschanged !== undefined) {
//             synth.onvoiceschanged = populateVoiceList;
//         }
//     }, [populateVoiceList]);

//     return (
//         <select
//             value={selected}
//             onChange={(e) => setSelected(parseInt(e.target.value))}
//         >
//             {voices.map((voice, index) => (
//                 <option key={index} value={index}>
//                     {voice.name} ({voice.lang}) {voice.default && ' [Default]'}
//                 </option>
//             ))}
//         </select>
//     );
// }

export const speechOut = (text) => {
    const utter = new SpeechSynthesisUtterance(text);
    // const voice = <SelectVoice />

    /* check that Web Speech API is supported */
    if (!synth) {
        console.log("Sorry, your browser doesn't support Web Speech API.")
    }

    synth.speak(utter);
    console.log("Poppy is speaking:", text);
}





/******* SPEECH TO TEXT *******/

export const speechIn = () => {

}