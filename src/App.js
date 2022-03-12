import React from "react"
import './App.css';

import Navbar from './component/Header';

import Meme from './component/Meme';


function App() {

//  const [setAddItem, setItem] = React.useState(["Things1", "Things 2"])

//  function addItem(){
//    setItem(function(prev){
//       return [...prev, `Things ${prev.length + 1}`] 
//    })
//  }

  return (

    <div>
        <Navbar />
        <Meme />
{/*          
        <button onClick={addItem}>Add Item</button>
      <h1>{setAddItem}</h1> */}
    </div>
  );
}

export default App;
