//import Memes from "./Data";
import React,  {useEffect, useState} from "react";
export default function Content(){
  const [image, setImage] = useState({
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  const[naming, setNaming] = useState({
    firstName: '',
    secondName: ''
  })
  


 
  useEffect(()=>{
     fetch("https://api.imgflip.com/get_memes")
      .then(res=> res.json())
      .then(data=>setImage(data.data.memes))
  },[])

  function handleChange(e){
    const{name, value} = e.target
    setNaming(prevState=>({
        ...prevState,
        [name]: value
    }))
  }
console.log(image);
 
  function handleClick(){
      let memesArr = image
      const randomNumber = Math.floor(Math.random() * memesArr.length)
      const url = memesArr[randomNumber].url
      setImage(prevState=> ({
          ...prevState, 
          randomImage: url
      }))
  }

    return(
    <div className="container-div-content">
        <form className="input-div" >
            <input 
                type="text"
                placeholder="Make it"
                name="firstName"
                onChange={handleChange}
                />
                
            <input 
                type="text"
                placeholder="MEME"
                name="secondName"
                onChange={handleChange}
             />
        </form>
        <button onClick={handleClick}>Get a new meme image <span><i className="fa-solid fa-image"></i></span></button>
        <div className="image-section">
             <img src={image.randomImage} alt="meme"/>
             <h2 className="meme-header">{naming.firstName}</h2>
             <h2 className="meme-footer">{naming.secondName}</h2>
        </div>
       

    </div>
)
}