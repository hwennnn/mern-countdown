import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./pages/navbar";
import ItemList from "./pages/item-list";
import CreateItem from "./pages/create-item";
import EditItem from "./pages/edit-item";

function App() {

  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ItemList} />
        <Route path="/edit/:id" component={EditItem} />
        <Route path="/create" component={CreateItem} />
      </div>
    </Router>
  );
}

export default App;
