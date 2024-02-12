import React, { useEffect, useState } from "react";
import axios from "axios";
export function Chat_console(){
	const [data, setdata] = useState("Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.")
//	useEffect(()=>{
//		axios.post("http://127.0.0.1:8000/chat/ttot",{text:"hi how are you"})
//			.then((r)=>{
//
//				console.log(r.data)
//				setdata(r.data.text)})
//
//	},[])
	return(
		<div className="chat_container">
		<h1>{data}</h1>
		<div className="input">

		<textarea rows="10" cols="90"></textarea>
		</div>


		</div>
	)
}
