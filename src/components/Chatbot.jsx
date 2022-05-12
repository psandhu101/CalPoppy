/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import ChatComposer from "./ChatComposer";
import ChatWindow from "./ChatWindow";
import ChatHeader from "./ChatHeader";
// import axios from "axios";
import "../style/chatbot.css";

export default function Chatbot(props) {
    const SENDER_USER = "user";
    const SENDER_BOT = "bot";
    const AI_NO_ANS = "Sorry, I cannot answer that question! Please contact Jeanine Scaramozzino at swantonpoppycp@gmail.com for more info.";

    const [suggestionsOpen, setSuggestionsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [conversation, setConversation] = useState([]);
    const [responseCount, setResponseCount] = useState(0); // AI mocking
    const [initialResponse, setInitialResponse] = useState(0);
    const [feedbackReceived, setFeedbackReceived] = useState(0);

    /**
     * Toggles the suggestions
     */
    let onSuggestionClick = () => {
        setSuggestionsOpen((s) => !s);
    };
    /**
     * Every time the user sends a new question, get the answer from the API and
     * add it to the conversation.
     */
    useEffect(() => {
        console.log("Effect triggered")

        /* Runs on page refresh
        if (initialResponse === 0) {

            if ((sessionStorage.getItem("responseCount")) != null) {
                var messageCount = parseInt(sessionStorage.getItem("responseCount"));
            }
            else {
                messageCount = 0;
            }

            if (messageCount === responseCount) {
                setInitialResponse(1);
            }
            else {
                var data = sessionStorage.getItem("user");
                const myArray = data.split("%<data-break>%");
                setConversation([
                    ...conversation,
                    { text: myArray[responseCount], sender: SENDER_USER, timestamp: Date.now() },
                ]);
                setQuery(myArray[responseCount]);
            }
        }
        */
        if (query === "") return;


        //let payload = { message: query };

        /* --------------------------------------------------------*/
        /* AI mock */
        // function mockResponse() {
        //     let resp = "Placeholder response " + responseCount;
        //     //sessionStorage.setItem("responseCount", responseCount + 1);
        //     setResponseCount(responseCount + 1);
        //     return [{ text: resp }];
        // }
        /* --------------------------------------------------------*/


        async function AIResponse(question){

            console.log("Before Fetch", question)
            let response = await fetch("/api_call", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(question)
            })
            // Data is the AI response from Matthew.
            let data = await response.json()
            // assuming data
            let resp = (data.blah)? (data.blah + responseCount) : AI_NO_ANS
            //sessionStorage.setItem("responseCount", responseCount + 1);
            setResponseCount(responseCount + 1);
            return [{ text: resp }]

        }

        function sleep(ms) {
             return new Promise(resolve => setTimeout(resolve, ms));
        }

        async function postMessage() {
            try {
                // const response = await axios.post("api/webhooks/rest/webhook", payload);
                // const answerMessages = response.data.map(({ text }, i) => ({
                console.log("-1")

                const AIAns = await AIResponse(query);
                console.log("0")

                const answerMessages =  AIAns.map(({ text }, i) => ({
                    text,
                    sender: SENDER_BOT,
                    timestamp: Date.now() + i,
                    responseType: i === 0 ? "answer" : "followUp"
                }));
                console.log("1")

                setQuery(""); //TRIGGER
                console.log("2")

                setConversation([...conversation, ...answerMessages]); //
                console.log("3")

            } catch (err) {
                console.log("THIS IS BAD")
                console.error(err);
                return;
            }
        }
        console.log("Call post")
        postMessage();
    }, [query]);

    /**
     * Adds the user's message to the conversation, passes message to the bot
     */
    let sendMessage = (message) => {
        setConversation([
            ...conversation,
            { text: message, sender: SENDER_USER, timestamp: Date.now() },
        ]);
        setQuery(message);
        /* Launches on chat refresh
        // if (sessionStorage.getItem("user") == null) {
        //     sessionStorage.setItem("user", message);
        // }
        // else {
        //     var temp = sessionStorage.getItem("user");
        //     sessionStorage.setItem("user", temp + "%<data-break>%" + message);
        // }
        // sessionStorage.setItem("responseCount", responseCount + 1);
        */
    };

    /**
     * Handles user feedback about chatbot answer accuracy.
     */
    function onFeedbackGiven(id, isPositive) {
        // We're gonna need a real endpoint, but for testing purposes:
        let answerIndex = conversation.findIndex(
            (message) => message.timestamp === id
        );

        conversation[answerIndex].feedback = isPositive;
        setFeedbackReceived(feedbackReceived + 1);

        if (answerIndex === -1) return;
        // const payload = {
        //     sentiment: isPositive ? "positive" : "negative",
        //     question: conversation[answerIndex - 1].text,
        //     answer: conversation[answerIndex].text,
        // };
        // axios.post("log/query", payload);

        // useEffect(() => {}, []);
    }

    return (
        <main className="Chatbot chatbotStyle">
            <ChatHeader
                onSuggestionClick={onSuggestionClick}
                suggestionsOpen={suggestionsOpen}
            />
            <ChatWindow
                conversation={conversation}
                suggestionsOpen={suggestionsOpen}
                onSend={sendMessage}
                onSuggestionClick={onSuggestionClick}
                onFeedbackGiven={onFeedbackGiven}
            />
            {!suggestionsOpen && <ChatComposer onSend={sendMessage} />}
        </main>
    );
}