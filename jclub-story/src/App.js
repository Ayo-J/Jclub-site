
//import { Fragment } from 'react'; //this is jsx fragment
import { useState } from 'react';
import './App.css';
import Main from './Components/Main';
//import mydata from './Data/Mydata'; default export  

import {Mydata} from './Data/Mydata'; //named export


    <div className='Mainblock_container'>
    
    <Main/>
    

    </div>
    <button style={ 
      {
        fontSize: '20px',
        border: '2px solid black',
        padding: '10px 20px',
        borderRadius: '10px',
      }
     
    


    } 
    onClick={clickhandle}
    
    className="btn">Read More</button>

    </div>
  );
  
 
  
}

export default App;
