import React from 'react'
import { Link } from "react-router-dom";
export default function Header(){
    return(
     <>
     <div> 

<div className="topmemubar" >
    <div className="div1oftomenubar">
     <i onClick="openmenu()"  className="fa-solid fa-bars"></i>
     <img src="/design copy website /Anime /zoro/source /img/new.png"/>
     </div>
     <div className="div2oftomenubar">
         <i className="fa-solid fa-magnifying-glass"></i>
         <div className="login">
             <Link to="/Login"><p>Login</p></Link>
         </div>
     </div>
</div>
<div className="controlmenubar">
    <div>
        <div><button onClick="closemenu()">Close Menu</button></div>
        <div className="menubar">
            
            <li><a href="#">Home</a></li>
             <li><a href="#">Dubbed Anime</a></li>
             <li><a href="#">Subbed Anime</a></li>
             <li><a href="#">Most popular</a></li>
             <li><a href="#">Movies</a></li>
             <li><a href="#">Tv series</a></li>
             <li><a href="#">OVAS</a></li>
               <li><a href="#">ONAs</a></li>
                <li><a href="#">Special</a></li>
                <li><a href="#">Events</a></li>
                   <li className="genredrop"><a href="#">Genre</a>
                   <div className="genredropitem">
                     <ul>
                    <li><a href="#" >Action</a></li>
                    <li><a href="#">Adventure</a></li>
                     <li><a href="#">cars</a></li>  
                     <li><a href="#">Comdy</a></li> 
                     <li><a href="#">Dementia</a></li>  
                     <li><a href="#">Drama</a></li>  
                     <li><a href="#">Demoms</a></li>  
                     <li><a href="#">Ecchi</a></li>
                      <li><a href="#">Fantasy</a></li>
                      <li><a href="#">Game</a></li>
                      </ul>
                   </div>
                   </li>   
                   
        </div>
    </div>
  </div>
</div>

     </>
       );
        
		     }