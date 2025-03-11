import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Contact } from "./pages/Contact";
import { Cart } from "./pages/Cart";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { Search } from "./pages/Search";
import Product from "./pages/Product";
import { CheckoutSuccess } from "./pages/CheckoutSuccess";

function App() {
  const location = useLocation();
  console.log(location);
  const params = new URLSearchParams(location.search);
  console.log(params);
  const searchTermFromURL = params.get("term") || "";
  console.log(searchTermFromURL);

  const [searchTerm, setSearchTerm] = useState(searchTermFromURL);

  useEffect(() => {
    setSearchTerm(searchTermFromURL);
  }, [searchTermFromURL]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            }
          ></Route>
          <Route
            path="product/:id"
            element={
              <Product searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            }
          ></Route>
          <Route
            path="search"
            element={
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            }
          ></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route
            path="checkout/thank-you"
            element={<CheckoutSuccess />}
          ></Route>
          <Route
            path="contact"
            element={
              <Contact searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            }
          ></Route>
          <Route path="*"></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
