/** @jsxImportSource @emotion/react */
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
