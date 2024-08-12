import './App.css';
import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';

import NameList from './NameList';

export default function App() {
  const [UserInput, setUserInput] = useState('');

  const [NameList, setNameList] = useState([]);
  const UserInputValue = (event) => {
    for (let i = 0; i <= NameList.length; i++) {
      if (event.target.value == NameList[i]) {
        alert('List already exist');
        event.target.value = '';
      }
      
    }
    
    setUserInput(event.target.value);
    
    
  }

  function TakeUserInput(event) {
    setUserInput('');
    // if(event.target.value=='')
    //   {
    //      alert('Please enter value');
         
         
    //   }
    
      setNameList([...NameList, UserInput]);
      event.target.value='Hii';
    
      
      
    
  }


  function RemoveListData(Index) {
    setNameList(NameList.filter((_, i) => i !== Index));
  }

  return (
    <div>


      <div className="w-screen h-screen bg-purple-500 flex justify-center items-center ">
        <div className="w-[80%] h-auto bg-white py-3 px-3 text-center">
          <h3>ToDoList App</h3>
          <div className="flex justify-center items-center">

            <input type="text" name="NameOfItem" placeholder="Enter your list" className="my-5 p-1 border-2 border-purple-500 rounded" onChange={UserInputValue} />

            <button className="bg-purple-500 py-1 mx-1 px-2 rounded text-white" onClick={TakeUserInput}>Add To List</button>

          </div>
          <div>
            <ul>
              {

                NameList.map((Value, Index) => {
                  return (
                    <li key={Index} className="my-1 py-2 px-2 bg-purple-500 rounded text-white flex"><span className="mx-3 text-red-500 bg-white rounded-full px-2 flex justify-center items-center pointer font-bold cursor-pointer" onClick={() => RemoveListData(Index)}>x</span>{Value}</li>
                  )
                })
              }

            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}


