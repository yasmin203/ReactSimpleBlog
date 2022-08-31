import React from "react";
import{BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import CreateNewPost from "./components/posts/CreateNewPost";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import PostSingle from "./components/posts/PostSingle";

function App() {
  return (
    <Router >
      <div className="App">
        <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateNewPost />} />
        <Route path="/post/:id"  element={<PostSingle />} /> 
     </Routes>
    <Footer />
      </div>
    </Router>
  );
}

export default App;
