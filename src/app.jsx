import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Chat_console } from "./components/chat.jsx";
import "./assests/main.css"
const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Chat_console/>}/>
    </Routes>
    
    </BrowserRouter>
)
