import React from "react";
import Speech from "react-speech";

/******* TEXT TO SPEECH *******/

export const speechOut = (text) => {
    console.log("Poppy is speaking");
    return <Speech text="text" />;
}





/******* SPEECH TO TEXT *******/

export const speechIn = () => {

}