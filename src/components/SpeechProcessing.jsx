import React from "react";
import Speech from "react-speech";

/******* TEXT TO SPEECH *******/

export const speechOut = (text) => {
    React.render(
        <Speech text="Welcome to react speech" />,
        document.getElementById('node')
    );
}





/******* SPEECH TO TEXT *******/

export const speechIn = () => {

}