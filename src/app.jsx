import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter,Route,Routes } from "react-router-dom";
function Home(){
    return(
        <h1>Hello world</h1>
    )
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
    </Routes>
    
    </BrowserRouter>
)