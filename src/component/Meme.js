import React from "react"

import "../App.css"


function Meme(){

    const [memeImage, setMemeImage] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "https://i.imgflip.com/1bij.jpg"

        }
    )

    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function getMemeImage(){
       const randomNumber = Math.floor(Math.random() * allMemeImages.length);
       const url = allMemeImages[randomNumber].url
       setMemeImage(function(prevMeme){
           return {
               ...prevMeme,
               randomImage: url

           }
       })
      
    }

    function handleChange(event){
        const {name, value} = event.target;
        setMemeImage(prevmemeImage => {
            return{
                ...prevmemeImage, 
                [name] : value

            }
        })
    }
    return(
        <main >
            <div className="form">
               <input type="text" placeholder="Top text" className="form-input" name="topText" onChange={handleChange} value={memeImage.topText}  /> 
               <input type="text" placeholder="Bottom text" className="form-input" name="bottomText" value={memeImage.bottomText} onChange={handleChange} /> 
               <button className="form-button" onClick={getMemeImage}>Get a new meme image</button>
            </div>

            <div className="meme">
                <img src={memeImage.randomImage} className="meme-image" alt="meme__image" />
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>               
        </main>

        

    )
}

export default Meme