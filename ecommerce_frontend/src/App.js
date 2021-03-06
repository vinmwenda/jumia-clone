import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Components/Screens/HomeScreen";

import Account from "./Components/Screens/Account";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ProductDetailsContainer from "./Components/Screens/ProductDetailsContainer";
import { useDispatch } from "react-redux";
import FormInput from "./Components/Screens/FormInput";
import Cart from "./Components/Screens/Cart";
import { getCartDetails } from "./store/actions";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let params = useParams();
  useEffect(() => {
    dispatch(getCartDetails());
  }, []);
  //saveState(useSelector((state) => (state = state.products.details)));
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route
          path=":name"
          element={
            <ProductDetailsContainer router={{ location, navigate, params }} />
          }
        />
        <Route path="/account" element={<Account />} />
        <Route path="/account/create" element={<FormInput />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
