import React, { useState, useEffect } from 'react';

function Animebox() {
  return (
    <div className="twodivfor">
      
      <Topanime data="top-airing"/>
	    <Topanime data="popular" />
    </div>
  );
}

function Topanime({ data }) {
  const [topanime, setTopanime] = useState([]);

  useEffect(() => {
    fetch(`https://gogoanime.consumet.stream/${data}`)
      .then((response) => response.json())
      .then((animelist) => {
        setTopanime(animelist);
	      console.log(animelist);
      });
  }, [data]);

  return (
    <div className="topairmaindiv">
      <div className="topairmaindiv_title">
        <h1>{`Top ${data}`}</h1>
      </div>
      <div className={`mainfor${data}`}>
        {topanime.map((call) => (
          <div key={call.animeTitle} className="topairmaindiv_animediv">
            <div className="img">
              <img src={call.animeImg} alt={call.animeTitle} />
            </div>
            <div className="topairmaindiv_animediv_detail">
              <h1>{call.animeTitle}</h1>
              <ul>
                <li>TV</li>
                <li>ep5</li>
                <li>24</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Animebox;
