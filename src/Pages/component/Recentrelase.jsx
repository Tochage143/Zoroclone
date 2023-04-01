import React, { useState, useEffect } from 'react';

function RecentRelease() {
  return (
    <>
      <div className="box">
        <h1 className="RecentTitle">Recent release</h1>
        <div>
          <div className="gridfor">
            <List />
          </div>
        </div>
      </div>
    </>
  );
}

function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://wordywelcomepostscript.shashankktiwari.repl.co/recent-release')
      .then((response) => response.json())
      .then((animelist) => {
        setData(animelist);
      });
  }, []);

  return (
    <>
      {data.map((dataro) => (
        <div key={dataro.id} className="maindivanime">
          <div>
            <div className="anime_img">
              <img src={dataro.imgUrl} alt={dataro.name} />

              <div className="anime_detail">
                <span>{dataro.subOrDub}</span>

                <span className="epsiode">{dataro.episodeNum}</span>
              </div>
            </div>
            <div className="anime_title">
              <span className="anime_name"><b>{dataro.name}</b></span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default RecentRelease;
