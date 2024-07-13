  function ProfilPicture (){

    const imgUrl = './src/assets/profile.png'
  
    const handelClick = (e) => e.target.style.display = "none";

    return(<img  onClick={(e) => handelClick(e) } src={imgUrl}></img>)

  }

  export default ProfilPicture