
import './App.css';
import {useState,React} from 'react'

function App() {
const [idcloth, setIdcloth] = useState(0)
  const wichPic=()=>{
    console.log(`hhhhhhhhhhhhhhh`, "hhhhhhhhhhhhhhh")
  }
  return (
   <>
   <div className="main">
     <div className="left"> 
     <div className="left_child">
       <button onclick={()=>wichPic}>
         {/* <img src="assast/images/1.jpg" height="300" alt="one"
         
         /> */}hhhhhhhhhhhhhh
       </button>
       <img src="assast/images/2.jpg" height="300" alt="one" />
     </div>
     <div className="left_child">
     <img src="assast/images/3.jpg" height="300" alt="one" />
       <img src="assast/images/4.jpg" height="300" width="170" alt="one"/>
     </div>
      </div>
     <div className="right">
       {idcloth==0 && <video width="400" height="600"
       autoPlay={true}
        loop muted >
       <source src="assast/videos/0.mp4" type="video/mp4"/>
       </video>}
       {idcloth==0 && <video width="400" height="600"
       autoPlay={true}
        loop muted >
       <source src="assast/videos/1.mp4" type="video/mp4"/>
       </video>}
       {idcloth==0 && <video width="400" height="600"
       autoPlay={true}
        loop muted >
       <source src="assast/videos/2.mp4" type="video/mp4"/>
       </video>}
       {idcloth==0 && <video width="400" height="600"
       autoPlay={true}
        loop muted >
       <source src="assast/videos/3.mp4" type="video/mp4"/>
       </video>}
       {idcloth==0 && <video width="400" height="600"
       autoPlay={true}
        loop muted >
       <source src="assast/videos/4.mp4" type="video/mp4"/>
       </video>}
       
     </div>
   </div>
   </>
  );
}

export default App;
