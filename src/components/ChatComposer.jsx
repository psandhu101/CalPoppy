/* chat tab: bottom bar */

/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import { Send } from "react-feather";
import "../style/chatComposer.css";
import "../style/text.css";
import React, { Component } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

export default function ChatComposer({ onSend }) {

    const [keyboard, setKeyboard] = useState(false);

    let textFieldRef = useRef(null);

    // keyboard functions (straight from documentation)
    function onChange(input){
        document.querySelector(".input").value = input;
        console.log("Input changed", input);
    }

    function onKeyPress(button){
        console.log("Button pressed", button);
    }

    // Takes the message from the content editable field and sends it out
    function sendMessage() {
        const emptyField = /^\s*$/g;
        if (
            !textFieldRef.current ||
            emptyField.test(textFieldRef.current.innerText)
        )
        return;
        let message = textFieldRef.current.innerText.trim();
        textFieldRef.current.innerText = "";
        onSend(message);
    }

    // Send Message on Enter Pressed
    useEffect(() => {
        const textField = textFieldRef.current;
        if (!textField) return;
        const onEnter = (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                sendMessage();
            }
        };
        textField.addEventListener("keypress", onEnter);
        return () => textField.removeEventListener("keypress", onEnter);
    });

    return (
        <div>
            <div className="menuBarStyle ChatComposer">
                <div className="contentStyle">
                    <div
                        className="scrollableY txtFieldStyle"
                        ref={textFieldRef}
                        contentEditable="true"
                    >
                    </div>
                    <button className="sendButtonStyle" onClick={() => setKeyboard(!keyboard)}>
                        <i class="bi bi-keyboard"></i>
                    </button>
                    <button className="sendButtonStyle" onClick={() => sendMessage()}>
                        <Send size={20} />
                        <p className="buttonTextStyle">Send</p>
                    </button>
                </div>
            </div>

            const keyboard = new Keyboard({
                onChange: input => onChange(input),
                onKeyPress: button => onKeyPress(button)
            });
        </div>
    );
}