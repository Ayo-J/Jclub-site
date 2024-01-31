const name = "Jclub"
const what = " A japanese learning site"

const myobj = {
  name : `${name}`,//use backtic kye combination to use variables
  what : `${what}`,


}

// eslint-disable-next-line no-unused-vars
function Main({name,what,id}){
 

 

  //props mean properties and it is an object that holds the values of the attributes that are passed to the component

  return(
    <div className="Navbar"> 
    <ul>
      <li>{name}</li>
      <li>{what}</li>
      <li>{id}</li>
      
    
    </ul>



   

    </div>
  )

}



export default Main;