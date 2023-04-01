import Header from './component/Header';
import React from 'react';
import Animebox  from './component/Animebox';
import Recentrelase from './component/Recentrelase';

function Home() {
  return (
    <>
      <Header/>
	<Animebox/>
	    <Recentrelase/>
    </>
  );
}

export default Home;