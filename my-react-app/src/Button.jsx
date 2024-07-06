

function Button (){

   
    const handelClick = (e) => console.log(e)
       
    
    return(<button onClick={(e) => handelClick(e)}> Click me </button>)
}

export default Button