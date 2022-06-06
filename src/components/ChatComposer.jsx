/* chat tab: bottom bar */

/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from "react";
import { Send } from "react-feather";
import "../style/chatComposer.css";
import "../style/text.css";

export default function ChatComposer({ onSend }) {

    let textFieldRef = useRef(null);

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
        <div className="menuBarStyle ChatComposer">
        <div className="contentStyle">
            <div
                className="scrollableY txtFieldStyle"
                ref={textFieldRef}
                contentEditable="true"
            >
            </div>
            <button className="sendButtonStyle">
                <i class="bi bi-keyboard"></i>
            </button>
            <button className="sendButtonStyle" onClick={() => sendMessage()}>
                <Send size={20} />
                <p className="buttonTextStyle">Send</p>
            </button>
        </div>
        </div>
    );
}