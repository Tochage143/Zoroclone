import React from 'react';

import { Link } from "react-router-dom";
export default function Mainpages(){
    return(
         <header>
<div className="onediv">
  <div className="menu_bar">
      <ul>
         <li>
           <a href="#">Home</a>
          </li>
         <li>
           <a href="#">Movies</a>
           </li>
         <li>
           <a href="#">Tv series</a>
           </li>
          <li> 
          <a href="#">Most popular</a>
          </li>
         <li>
           <a href="#">Top Airing</a>
           </li>
      </ul>
  </div>
  <div className="controlmain">
  
<div className="imghome">
     <a href="/design copy website /Anime /zoro/file/home/home.html"> <img  src="/design copy website /Anime /zoro/source /img/new.png"/></a>
</div>
  <div className="maindivsearch">
    
  <div className="searchbox">
    <div>
        <input type="text" placeholder="Search"/>
        
    </div>
    </div>
    <div className="icons">
     <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  
    </div>
    
    <div className="boxtopanime">
      <ul>
        <li><b>Top search:</b></li>
        <li><a href="#">One piece,</a></li>
         <li><a href="#">Chainsaw Man,</a></li>
          <li><a href="#">Blue Lock,</a></li>
           <li><a href="#">Naruto: Shippuden,</a></li>
            <li><a href="#">Boruto: Naruto Next Generations,</a></li>
             <li><a href="#">My Hero Academia Season 6,</a></li>
              <li><a href="#">Spy x Family, Part 2,</a></li>
               <li><a href="#">Bleach: Thousand-Year Blood War Arc,</a></li>
                <li><a href="#">Bleach,</a></li>
                 <li><a href="#">One Piece Film: Red,</a></li>
      </ul>
    </div> 
    </div>
    <div className="zoroimg">
      <div className="one">
      <img/>
      </div>
    </div>
    
</div>
<div>
  <div className="zorodown">
 <div className="child"> <Link className="a" to="/Home">view Full Site <span><i className="fa-solid fa-arrow-right"></i> </span></Link></div>
  </div>
</div>
</header>
    

        );
		  }