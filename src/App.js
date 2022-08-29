import React from "react";
import{BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import CreateNewPost from "./components/posts/CreateNewPost";
import postDetails from "./components/posts/postDetails";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router >
      <div className="App">
        <Header />
    
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateNewPost />} />
        <Route path="/post" element={<postDetails />} /> 
     </Routes>
    <Footer />
      </div>
    </Router>
  );
}

export default App;
