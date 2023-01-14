import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { version, useEffect } from 'react';
import {
  BrowserRouter as Router,Routes,Route,// Navigate,
  useNavigate
} from "react-router-dom";
// import Success from "./pages/Success";
// import { useSelector } from "react-redux";

const App = () => {
  const user = true;
      
  return (
    <Router>
      {/* <Routes> */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
        {/* {user ? <Navigate to="/" /> : <Login />} */}
        </Route>
        <Route path="/register">
          {/* {user ? <Navigate to="/" /> : <Register />} */}
        </Route>
      {/* </Routes> */}
    </Router>
  );
};

export default App;