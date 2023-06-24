import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import "./App.css"

function App() {
    return(
        <>
        <Header />
        <div className="main">
            <Sidebar />
            <Form />
        </div>
        </>
    )
}
  
export default App;
