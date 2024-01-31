
import './App.css';
import Main from './Components/Main';
//import mydata from './Data/Mydata'; default export  

import {mydata} from './Data/Mydata'; //named export

//export default can one time in a file but named export can be multiple times in a file
const MainBlock = mydata.map(({name,what,id})=>{
       
         
  return<Main key={id} name={name} what={what} id={id}/>;
 
    
   
 })
function App() {
 MainBlock();
  return (
  

    <>
   



 </>


    
  );
}

export default App;
