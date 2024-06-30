import profilePic from './assets/profile.png'

function Card (){
     return(
  <div className='centred-card'>    
        <div className="card">
               <img className='card-img' src={profilePic} alt="profile picture" ></img>
               <h2 className='card-title'>bouguettaya sami</h2>
               <p className='card-texte'>I've 19 years old ,second year computer science student ,currently i'm learning React Js .  </p>
         </div>
         
  </div>
  );
} 

export default Card