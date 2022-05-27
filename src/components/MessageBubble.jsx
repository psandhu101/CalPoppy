/** @jsxImportSource @emotion/react */
import '../style/chatMsg.css';
import '../style/colors.css';
import { Volume2 } from 'react-feather';

export default function MessageBubble({
    text,
    /* senderID: SENDER_USER when false, SENDER_BOT when true */
    senderID,
    showFeedback,
    onFeedbackGiven,
    feedback,
    timestamp,
}) {

    return (

        /* wrapper div for messages */
        <div className={`msgWrapper ${senderID ? "msgWrapperBot" : "msgWrapperUser"} `}>
            {/* actual message text */}
            <p className={` msg ${senderID ? "msgBot" : "msgUser"} `}>
                {text}
            </p>
            <br></br>
            {/* feedback buttons */}
            {senderID && showFeedback && (
                <>
                    <button type="button"
                        className={` feedbackIcon ${typeof feedback !== "undefined" && feedback ? "feedbackIconPos" : ""} `}
                        onClick={() => onFeedbackGiven(timestamp, true)}>
                        <i class="bi bi-hand-thumbs-up"></i>
                    </button>
                    <button type="button"
                        className={` feedbackIcon ${typeof feedback !== "undefined" && !feedback ? "feedbackIconNeg" : ""} `}
                        onClick={() => onFeedbackGiven(timestamp, false)}>
                        <i class="bi bi-hand-thumbs-down"></i>
                    </button>
                </>
            )}
            {/* play bot message */}
            {senderID && true (
                <button type="button">
                    <Volume2 size={20} />
                </button>
            )}
        </div>
    );
}
