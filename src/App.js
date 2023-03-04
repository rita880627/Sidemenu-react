import React from "react";
import SideMenu from "./SideMenu";
import "./styles.css";

function App() {
  const menuConfig = [
    {
      title: "Home"
    },
    {
      title: "Services",
      subItems: ["Cooking", "Cleaning"]
    },
    {
      title: "Contact",
      subItems: ["Phone", "Mail"]
    }
  ];

  return (
    <div className="App">
      <SideMenu menuConfig={menuConfig} />
    </div>
  );
}

export default App;
