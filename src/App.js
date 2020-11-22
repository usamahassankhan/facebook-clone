import Widgets from "./Widgets";
import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
import {useStateValue}from "./StateProvider";
function App() {
  const [{user},dispatch]=useStateValue();
  return (
    <div className="app">
      {
        !user?(
       <Login/>
        ):
        (
          <login>
          <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
          </login>
        ) 
      }

    </div>
  );
}

export default App;
