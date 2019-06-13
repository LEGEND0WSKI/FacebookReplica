import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
import Home from './Home/Home'
import Body from './Body/Body'





function App() {
  const jsonArray =[{
    "name":'Vishal',
    "dp": "",
    "post":"",
    "likes":"200",
    "comments":"?"
  }
  ];

  return (
    <div>
    <header>
      <Header/>
      <Home/>
      <Body/>
    </header>
    </div>
  );
}

export default App;
