import Memes from "./Data";
import React,  {useState} from "react";
export default function Content(){
  const [image, setImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "./images/mt-fuji.jpg"
  })
  const[naming, setNaming] = useState({
    firstName: '',
    secondName: ''
  })

  function handleChange(e){
    const{name, value} = e.target
    setNaming(prevState=>({
        ...prevState,
        [name]: value
    }))
  }

        function handleClick(){
            let arr = Memes.map(meme=>meme.img)
            
            const memesArray = Math.floor(Math.random() * arr.length)
            setImage(prevState=> ({
                ...prevState, 
                randomImage: arr[memesArray]
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