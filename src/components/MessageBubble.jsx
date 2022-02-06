    /** @jsxImportSource @emotion/react */
    // import { css } from "@emotion/react";
    import { ThumbsUp, ThumbsDown } from "react-feather";
    // import { useSpring, animated } from '@react-spring/web';
    import {Button} from 'react-bootstrap';
    import 'bootstrap/dist/css/bootstrap.css';
    import '../style/chat.css';
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
    // const SENDER_USER = false;
    // const SENDER_BOT = true;

    // const animWrapperStyle = useSpring({
    //     from: { opacity: 0 },
    //     to: { opacity: 1 },
    // });

    // const animTextStyle = useSpring({
    //     from: { opacity: 0, fontSize: '5px' },
    //     to: { opacity: 1, fontSize: '20px' },
    // });

    // const messageCss = (theme) =>
    //     css`
    //     display: inline-block;
    //     color: ${senderID ? theme.color.primary : theme.color.secondary};
    //     padding: 20px 14px;
    //     text-align: left;
    //     padding: 20px 14px;
    //     background: ${senderID ? theme.color.secondary : theme.color.primary};
    //     box-shadow: ${theme.shadow.message};
    //     border-radius: 37px 37px ${senderID ? "37px 7px" : "7px 37px"};
    //     border: 1px solid rgba(34, 34, 34, 0.2);
    //     border-color: ${senderID && "transparent"};
    //     margin-right: ${showFeedback ? "20px" : 0};
    //     `;
        
    // const messageWrapperCss = css`
    //     width: max-content;
    //     max-width: 70%;
    //     margin: 20px 0;
    //     align-self: ${!senderID && "flex-end"};
    // `;

    // const feedbackIconCss = css`
    //     display: inline-block;
    //     margin: 0 5px;
    //     cursor: pointer;
    //     vertical-align: middle;
    //     fill: transparent;
    //     transition: fill 0.4s, transform 0.4s;
    // `;

    // const positiveFeedbackHover = (theme) => css`
    //     &:hover {
    //     fill: ${theme.color.accent};
    //     transform: translateY(-2px);
    //     }
    // `;

    // const negativeFeedbackHover = (theme) => css`
    //     &:hover {
    //     fill: ${theme.color.error};
    //     transform: translateY(2px);
    //     }
    // `;

    return (
        // <animated.div style={animWrapperStyle} css={messageWrapperCss}>
        // <animated.p style={animTextStyle} css={messageCss}>{text}</animated.p>
        // {showFeedback && (
        //     <>
        //     <ThumbsDown
        //         css={[feedbackIconCss, negativeFeedbackHover]}
        //         onClick={() => onFeedbackGiven(timestamp, false)}
        //     />
        //     <ThumbsUp
        //         css={[feedbackIconCss, positiveFeedbackHover]}
        //         onClick={() => onFeedbackGiven(timestamp, true)}
        //     />
        //     </>
        // )}
        // </animated.div>

        /* wrapper div for messages */
        <div className = {`msgWrapper ${ senderID ? "msgWrapperBot" : "msgWrapperUser" } `}>
            {/* actual message text */}
            <p className = {` msg ${ senderID ? "msgBot" : "msgUser" } `}>
                {text}
            </p>
            {/* feedback buttons */}
            { senderID && showFeedback && (
                <>
                {/* TODO: use bootstrap glyphicons for feedback */}
                    <ThumbsUp className = "feedbackIcon feedbackIconPos" onClick = {() => onFeedbackGiven(timestamp, true)} />
                    <ThumbsDown className = "feedbackIcon feedbackIconNeg" onClick = {() => onFeedbackGiven(timestamp, false)} />
                </>
            )}
        </div>
    );
    }
