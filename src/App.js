import "./App.css";
import { useState } from "react";
import Search from "./pages/search";
import Home from "./pages/home";
import { Route,Routes } from "react-router-dom";


function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    // <div className="app">
    //   {showSearchPage ? (
    //     <Search/>
        
    //   ) : (
    //     <Home/>

    //   )}
    // </div>
    <div className="app">
<Routes>
<Route
      exact
      path="/"
      element= {<Home/>}
    />
    <Route
      exact
      path="/search"
      element={ <Search  />}
    />
</Routes>
  </div>
    );
}

export default App;
