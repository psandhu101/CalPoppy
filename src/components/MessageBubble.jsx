    /** @jsxImportSource @emotion/react */
    // import { css } from "@emotion/react";
    // import { ThumbsUp, ThumbsDown } from "react-feather";
    // import { useSpring, animated } from '@react-spring/web';
    // import {Button} from 'react-bootstrap';
    // import 'bootstrap/dist/css/bootstrap.css';
    import '../style/chatMsg.css';
    import '../style/colors.css';

    export default function MessageBubble({
    text,
    /* senderID: SENDER_USER when false, SENDER_BOT when true */
    senderID,
    showFeedback,
    onFeedbackGiven,
    timestamp,
    })
    
    {

    return (

        /* wrapper div for messages */
        <div className = {`msgWrapper ${ senderID ? "msgWrapperBot" : "msgWrapperUser" } `}>
            {/* actual message text */}
            <p className = {` msg ${ senderID ? "msgBot" : "msgUser" } `}>
                {text}
            </p>
            <br></br>
            {/* feedback buttons */}
            { senderID && showFeedback && (
                <>
                <button type = "button" className = "feedbackIcon feedbackIconPos" onClick = {() => onFeedbackGiven(timestamp, true)}>
                    <i class = "bi bi-hand-thumbs-up"></i>
                </button>
                <button type = "button" className = "feedbackIcon feedbackIconNeg" onClick = {() => onFeedbackGiven(timestamp, true)}>
                    <i class="bi bi-hand-thumbs-down"></i>
                </button>
                </>
            )}
        </div>
    );
    }
