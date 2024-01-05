import React,{ useState } from 'react';

export default function NotificationCard({ text,visible }) {
    const notificationCardStyle = {
        visibility: ((visible===true) ? 'visible' : 'hidden'),
        borderRadius: "5px",
        display: "inline-flex", 
        alignItems: "center",   
        justifyContent: "center",
        textAlign: "center",
        padding: "15px",
        backgroundColor: "#2B3246",
        cursor: "pointer",
        color: "rgb(82, 125, 243)",
        margin: "20px",
        maxWidth: "550px",
        wordWrap: "break-word"
    };
    
    return (

            <div style={notificationCardStyle} >
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 416.979 416.979" xmlSpace="preserve" height="40px" width="55px" fill="grey">
                    <g>
                        <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85   c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786   c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576   c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765   c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"/>
                    </g>
                </svg>
                &nbsp; &nbsp;
                <span>{text}</span>
            </div>
        );
}