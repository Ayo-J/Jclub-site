
//import { Fragment } from 'react'; //this is jsx fragment
import { useState } from 'react';
import './App.css';
import Main from './Components/Main';
//import mydata from './Data/Mydata'; default export  

import {Mydata} from './Data/Mydata'; //named export

//export default can one time in a file but named export can be multiple times in a file

//this is functional component
//  const Newblock = ()=>{
//     return(
//       <Fragment>{ /*jsx fragment*/}
//       {Mydata.map(({name,what,id})=>{
//         return <Main key={id} name={name} what={what} id={id}/>
//       }
//       )}
//       </Fragment>
//     )
//   }
  



    
 
function App() {

  const [myVar,setmyVar] = useState('Ayodya')
  


  const clickhandle = ()=>{
    setmyVar('Weerabahu')
    
    console.log(myVar);
    
  }
  
  return (
    <div className="App">
      <h1>{myVar}</h1>
    



      {/* <Newblock/> {this is the functional component using named export} */}


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
