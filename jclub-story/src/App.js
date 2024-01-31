
//import { Fragment } from 'react'; //this is jsx fragment
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
  const Mainblock = Mydata.map(({name,what,id})=>{
    return <Main key={id} name={name} what={what} id={id}/>
  }
  );
  return (
    <div className="App">
      <h1>My first react app</h1>
    



      {/* <Newblock/> {this is the functional component using named export} */}


    <div className='Mainblock_container'>
      {Mainblock}
    <Main/>
    <Main/>
    <Main/>
    <Main/>

    </div>

    </div>
  );
  
 
  
}

export default App;
