/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import memesData from "../memesData";


export default function Meme(){
    const [meme, setMeme] = useState({
        topText : "",
        bottomText : "",
        randomImage : "https://i.imgflip.com/1g8my4.jpg"
        }
     
    )
    const[allMemeImages, setAllMemeImages] = useState(memesData)
    
    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
         const url = memesArray[randomNumber].url

        //save the random url in state
        setMeme(prevMeme =>({
            ...prevMeme,
            randomImage : url
        }))
    }

    
    function handleChange(event){

       const{name,value} = event.target
       setMeme(prevMeme => {
        return{...prevMeme,
        [name]: value
        }
        
       })

    }

    return(   
        <main>
        <div className="form">
            <input 
            type="text"
            className="form--inputs" 
            placeholder="Top text"
            name="topText"
            value={meme.topText}
            onChange = {handleChange}

            />

            <input 
            type="text" 
            className="form--inputs" 
            placeholder="Bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange = {handleChange}

            />

            <button className="form--button"
            onClick={getMemeImage}>
            Get a new meme image  🖼
            </button>
        </div>

        <div className="meme">
        <img src={meme.randomImage} alt="meme--image" className="meme--image"/>
        <h3 className="top--text">{meme.topText}</h3>
        <h3 className="bottom--text">{meme.bottomText}</h3>
        </div>
       
        </main>
    )
}