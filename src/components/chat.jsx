import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
export function Chat_console(){
	const [data, setdata] = useState([])
	const inputref=useRef("")
	function get_ttot(){
		let input_text=inputref.current.value
		axios.post("http://127.0.0.1:8000/chat/ttot",{text:input_text})
			.then((r)=>{
				//implement proper way to handle req errors
				if(r.status!=200){
					alert(r.data)
					console.log("error")

				}

				setdata([...data,[input_text,r.data.text]])})

	}
	console.log(data)

	return(
		<div className="chat_page">
		<div className="chat_container">
		<div className="content">

		{data.map((e)=>{
			return(
				<div>
				<p><i>{e[0]}</i></p>
				<p>{e[1]}</p>

				</div>	
			)


		})}
		</div>	
		<div className="input">

		<textarea rows="10"  ref={inputref}  cols="90"></textarea>
		<button onClick={get_ttot} type="">submit</button>
		</div>
		</div>


		</div>
	)
}
