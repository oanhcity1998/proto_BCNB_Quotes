import React, { useEffect, useState } from 'react'
import './RandomQuotes.css'
import reload_icon from '../Assets/reload.png'
import Server_icon from '../Assets/logo.png'
import { TetHoliday } from '../TetHoliday/TetHoliday'
import { Clock } from '../Clock/Clock'

// import { use } from 'react'

export const Randomquotes = () => {

    const [quoteText, setQuoteText] = useState("");
    const [author, setauthor] = useState("");

    async function getQuotes() {
        try{
            const reponse = await fetch("https://proto-quotes-api.vercel.app/v1/quote");
            const data = await reponse.json();

            const {quote, author} = data;
            setQuoteText(`"${quote}"`)
            setauthor(`${author}`)
        }
        catch(error){
            console.error("Error fetching data:" , error)
        };
    }

    useEffect(() =>{
        getQuotes();
    }, []);
    
    // const random = () => {
    //     const select = quotes[Math.floor(Math.random()*quote.length)]
    //     setQuote(select);
    // }

    // const [quote, setQuote] = useState({
    //     text: "Default Text",
    //     author: "Default author",
    // });

  return (
    <div className='container'>
    <Clock/>
        <div className='quote_container'>
            <TetHoliday/>
            <div className="quote">{quoteText}</div>
            <div className='under_quote'>
                <div className='line_container'>
                    <div className="line"></div>
                </div>
                <div className="bottom">
                    <div className="icons">
                        <img className='server_icon' src={Server_icon} alt="" />
                        <img className='reload_icon' onClick={getQuotes} src={reload_icon} alt="" />
                    </div>
                    <div className="author">- {author} -</div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
