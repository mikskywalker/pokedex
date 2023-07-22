import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import store from "./redux/store"; // Import the store with TypeScript types

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="blogs" element={<Blogs />} /> */}
            {/* <Route path="contact" element={<Contact />} /> */}
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
