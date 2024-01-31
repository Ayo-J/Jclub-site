import { Fragment } from "react";




// eslint-disable-next-line no-unused-vars
function Main({name,what,id}){
  
 
  //props mean properties and it is an object that holds the values of the attributes that are passed to the component

  return(
   <div className="Mainblock_img">
    <img src="https://source.unsplash.com/random/600x600"
     alt="random"/>
    <h2>{name}</h2>
    <p>{what}</p>
    <div>

    </div>
   </div>
  )

}



export default Main;