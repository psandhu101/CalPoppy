/* chat tab: bottom bar */

/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import { Send } from "react-feather";
import "../style/chatComposer.css";
import "../style/text.css";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

export default function ChatComposer({ onSend }) {

    let textFieldRef = useRef(null);

    // keyboard functionality
    const [onscreenKey, setOnscreenKey] = useState(false);
    const [input, setInput] = useState("");
    const [layout, setLayout] = useState("default");
    const keyboard = useRef();

    const onChange = input => {
        setInput(input);
        // textFieldRef.current.innerText = input;
        console.log("Input changed", input);
    };

    const handleShift = () => {
        const newLayoutName = layout === "default" ? "shift" : "default";
        setLayout(newLayoutName);
    };

    const onKeyPress = (button, input) => {
        console.log("Button pressed", button);

        /**
         * If you want to handle the shift and caps lock buttons
         */
        if (button === "{shift}" || button === "{lock}") handleShift();
        if (button === "{enter}") sendMessage(input);
    };

    const onChangeInput = event => {
        const input = event.target.value;
        setInput(input);
        keyboard.current.setInput(input);
    };

    // Takes the message from the content editable field and sends it out
    function sendMessage() {
        const emptyField = /^\s*$/g;
        if (onscreenKey) {
           console.log("input (send msg): ", input); 
        }
        console.log("text field (send msg): ", textFieldRef);
        if (
            !textFieldRef.current ||
            emptyField.test(textFieldRef.current.innerText)
        ) {
            onSend(input);
            console.log("keyboard:", keyboard);
            setInput("");
            return;
        }
        let message = textFieldRef.current.innerText.trim();
        textFieldRef.current.innerText = "";
        onSend(message);
    }

    // Send Message on Enter Pressed
    useEffect(() => {
        const textField = textFieldRef.current;
        console.log("text field: ", textField);
        if (!textField) {return};
        const onEnter = (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                sendMessage();
            }
        };

        if (!onscreenKey) {
            textField.addEventListener("keypress", onEnter);
            return () => textField.removeEventListener("keypress", onEnter);
        }
        return;
    });

    return (
        <div>
            <div className="menuBarStyle ChatComposer">
                <div className="contentStyle">
                    {!onscreenKey && 
                        <div
                            className="scrollableY txtFieldStyle"
                            ref={textFieldRef}
                            contentEditable="true"
                        ></div>
                    }
                    {onscreenKey && (
                        <input
                            className="scrollablyY txtFieldStyle"
                            value={input}
                            onChange={onChangeInput}
                        />
                    )}
                    <button className="sendButtonStyle" onClick={() => setOnscreenKey(!onscreenKey)}>
                        <i class="bi bi-keyboard"></i>
                    </button>
                    <button className="sendButtonStyle" onClick={() => sendMessage()}>
                        <Send size={20} />
                        <p className="buttonTextStyle">Send</p>
                    </button>
                </div>
            </div>

            {onscreenKey && (
                <Keyboard
                    keyboardRef={r => (keyboard.current = r)}
                    layoutName={layout}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                />
            )}
            
        </div>
    );
}