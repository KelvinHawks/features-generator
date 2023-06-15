import Memes from "./Data";
import React from "react";
export default function Content(){
  const [image, setImage] = React.useState("images/Victoria-Falls.webp")
        function handleClick(){
            let arr = Memes.map(item=> item.img)
            
            const memesArray = Math.floor(Math.random() * arr.length)
            setImage(arr[memesArray])
        }

    return(
    <div className="container-div-content">
        <div className="input-div" >
            <input type="text" placeholder="Make it"/>
            <input type="text" placeholder="MEME"/>
        </div>
        <button onClick={handleClick}>Get a new meme image <span><i className="fa-solid fa-image"></i></span></button>
        <div className="image-section">
             <img src={image} alt="meme"/>
             <h2 className="meme-header">Make it</h2>
             <h2 className="meme-footer">MEME</h2>
        </div>
       

    </div>
)
}