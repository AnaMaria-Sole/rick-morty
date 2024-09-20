import { useState, useEffect } from 'react'
import { api } from './assets/api'
import Body from './components/Body'

import './App.css'

function App() {
    const [char, setChar] = useState([])
    useEffect(()=>{
      async function teste (){
        try{
          const response = await api.get()
          setChar(response.data.results)
        }
        catch(error){
          console.log(error);
        }
      }teste()
      
    },[])
    return (
      <Body charList={char}/>
    )
  }
  
  export default App
