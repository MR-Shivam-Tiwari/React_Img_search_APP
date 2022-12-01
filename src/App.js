import React, { useState } from "react";
import axios from 'axios'
import './App.css'


function App(){
    const[photo , setPhoto] = useState("");
 const [result , setresult] = useState([])

    const SearchImg = () =>{
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=GrLthNqqcnWLrEsOwC3D8XoOaxEHHtdkeyRfjF6cQ0I`)
        .then((Response)=>{
         
            setresult(Response.data.results)
        })
    }



    return(
        <>
        <div className='container'>
          <h1>Live Photo Search</h1>
        
          <input type="text"  value={photo} onChange={(e) => {
                        setPhoto(e.target.value)
                    }} placeholder="Search Free Image"/>
          <button type='submit' onClick={SearchImg}>Search</button>
        </div>
    
    
        
        <div className="container_2">
                    <div className='row'>
                        {result.map((value) => {
                            return (
                                <div className='col'>
                                        <img src={value.urls.small} alt='' />
                                </div>
                            )
                        })}
                    </div>
                  
        </div>
        </>
      )
    }
    


export default App;
