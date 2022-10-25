import { useEffect, useState } from "react";

function Activites(){
    const [advice, setAdvice] = useState('');

    const getAdvice = async () =>{
        const response = await fetch("https://www.boredapi.com/api/activity/");
        const res = await response.json();
        setAdvice(res)
    }

    useEffect(() =>{
        getAdvice()
    }, [])

    
    return(
        <div className="div-advices">
            <p className="advice">{advice.activity}</p>
            <p className="source">source: {advice.link} </p>
            <p className="source">participants: {advice.participants}</p>
            <button className="btn" onClick={getAdvice}>Get an adcice!</button>
        </div>
    )
}


export default Activites;