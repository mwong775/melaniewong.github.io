import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { Link } from 'react-router-dom';

function Chatbot(props: any) {

    const theme = {
        background: "grey",
        fontFamily: "Arial, Helvetica, sans-serif",
        headerBgColor: "#199bfc",
        headerFontColor: "#fff",
        headerFontSize: "25px",
        botBubbleColor: "#fff",
        botFontColor: "#4c4c4c",
        userBubbleColor: "#199bfc",
        userFontColor: "#fff"
    };

    const config = {
        width: "300px",
        height: "400px",
        floating: true
    };

    const steps: any = [
        {
            id: "Greet",
            message: "Hello, Welcome to my website!",
            trigger: "Ask How to Help"
        },
        {
            id: "Ask How to Help",
            message: "How may I help you?",
            trigger: "Waiting User Input"
        },
        {
            id: "Waiting User Input",
            user: true,
            trigger: "Ask Highlights Inquiry",
        },
        {
            id: "Ask Highlights Inquiry",
            message: "Alright, I'm not that sophisticated..\nBut here are some interactive projects you could check out?",
            trigger: "Display Project Options",
        },
        {
            id: "Display Project Options",
            options: [
                {
                    value: "gifinder",
                    label: "GIFinder",
                    trigger: "Link to GIFinder"
                },
                {
                    value: "boba map",
                    label: "Boba Map",
                    trigger: "Link to Boba Map"
                }
            ]
        },
        {
            id: "Link to GIFinder",
            component: (
                <div>You can check out GIFinder right <Link to="/gifinder">here</Link>!</div>
            ),
            asMessage: true,
            trigger: "Ask How to Help Again"
        },
        {
            id: "Link to Boba Map",
            component: (
                <div>YOu can check out my new boba map over <Link to="/bobamap">here</Link>!</div>
            ),
            asMessage: true,
            trigger: "Ask How to Help Again"
        },
        {
            id: "Ask How to Help Again",
            message: "Anything else I can help you with?",
            trigger: "Waiting User Response"
        },
        {
            id: "Waiting User Response",
            user: true,
            trigger: "Done",
        },
        {
            id: "Done",
            message: "Alrighty then. Have a great day!",
            end: true
        }
    ];

    return (
        <ThemeProvider theme={theme}>
            <ChatBot steps={steps} {...config} />
        </ThemeProvider>
    );
}

export default Chatbot;