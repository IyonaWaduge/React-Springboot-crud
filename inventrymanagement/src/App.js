import "./App.css";
import LoginForm from "./components/pages/LoginForm";
import Home from "./components/pages/Home";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddItem from "./components/pages/AddItem";
import EditItem from "./components/pages/EditItem";
import DeleteItem from "./components/pages/DeleteItem";
import UpdateItemPopup from "./components/pages/UpdateItemPopup";
import Homenew from "./components/pages/Homenew";
import DeleteItemPopup from "./components/pages/DeleteItemPopup";
import DeletePopupmessage from "./components/pages/DeletePopupmessage";
import UpdatePopup from "./components/pages/UpdatePopup";


function App() {
  
  return (
    <Router>
      <div className="App">
        
        {/* <LoginForm /> */}
        <div className="home">
          <Routes>
            <Route exact path="/" element={<LoginForm/>}/>
            <Route exact path="/Home" element={<Home/>}/>
            <Route exact path="/AddItem" element={<AddItem/>}/>
            <Route exact path="/EditItem/:id" element={<EditItem/>}/>
            <Route exact path="/DeleteItem/:id" element={<DeleteItem/>}/>
            <Route exact path="/UpdateItemPopup/:id" element={<UpdateItemPopup/>}/>
            <Route exact path="/Homenew" element={<Homenew/>}/>
            <Route exact path="/DeleteItemPopup" element={<DeleteItemPopup/>}/>
            <Route exact path="/DeletePopupmessage" element={<DeletePopupmessage/>}/>
            <Route exact path="/UpdatePopup" element={<UpdatePopup/>}/>
            
   
           
          </Routes>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
