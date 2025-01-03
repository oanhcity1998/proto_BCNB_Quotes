import React, { useEffect, useState } from 'react'
import './RandomQuotes.css'
import reload_icon from '../Assets/reload.png'
import Otto_icon from '../Assets/Otto.png'
// import { use } from 'react'

export const Randomquotes = () => {

    const [quoteText, setQuoteText] = useState("");
    const [author, setauthor] = useState("");

    async function getQuotes() {
        try{
            const reponse = await fetch("https://quotes-api-self.vercel.app/quote");
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
        <div className="quote">{quoteText}</div>
        <div>
            <div className="line"></div>
            <div className="bottom">
                <div className="icons">
                    <img className='Otto_icon' src={Otto_icon} alt="" />
                    <img className='reload_icon' onClick={getQuotes} src={reload_icon} alt="" />
                </div>
                <div className="author">- {author} -</div>
                
            </div>
        </div>
        
    </div>
  )
}
