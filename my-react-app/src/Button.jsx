

function Button (){

   
    const handelClick = (e) => e.target.textContent = "OUCH!" ;
       
    
    return(<button onClick ={(e) => handelClick(e)}> Click me </button>)
}

export default Button