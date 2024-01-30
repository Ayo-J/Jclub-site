const name = "Jclub"
const what = " A japanese learning site"

const myobj = {
  name : `${name}`,//use backtic kye combination to use variables
  what : `${what}`,


}

// eslint-disable-next-line no-unused-vars
function Main(props){
  console.log(props)

 

  //props mean properties and it is an object that holds the values of the attributes that are passed to the component

  return(
    <div className="Navbar"> 
    <ul>
      <li>Home of {myobj.name}</li>
      <li>About = {what}</li>
      <li>Services</li>
      <li>Contact</li>
    
    </ul>

    {props.children}

   

    </div>
  )

}



export default Main;