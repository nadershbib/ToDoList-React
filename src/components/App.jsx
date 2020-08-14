import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    if(inputText===""){
      return "";
    }
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
    document.getElementById("in").focus()
  }

 function enterPressed(event) {
    var code = event.keyCode || event.which;
    if(code === 13) { 
       if(inputText===""){
         return "";
       }
      setItems(prevItems => {
        return [...prevItems, inputText];
      });
      setInputText("");
     document.getElementById("in").focus()

    } 
}

function deleteItem(id){
  setItems(prevItems=>{
     return prevItems.filter((item,index)=>{
        return index!==id;
     })
  })
}
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input id="in" onChange={handleChange} type="text" value={inputText} onKeyPress={enterPressed} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem,index) => (
            <li key={index} onClick={()=>deleteItem(index)}>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
