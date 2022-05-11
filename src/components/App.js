import React , {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
// import { useState } from "react/cjs/react.production.min";

function App() {
  const [apClass, setapClass] = useState(false)
  
  
  const appClass = apClass ? "App dark" : "App light"

  function handleDark(){
    apClass ? setapClass(false) : setapClass(true) 
  }

 


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDark}>{apClass === true ? "Dark Mode" : "Light Mode" }</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
