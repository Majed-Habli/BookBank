import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/signin/signin";
import Register from "./pages/signup/signup";
import Dashboard from "./pages/dashboard/dashboard";
import PageLayout from "./utils/layout/pageLayout";
import Liked from "./pages/liked/liked";
import List from "./pages/mylist/mylist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/register" element={<Register />} />

        <Route path="/user" element={<PageLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/user/liked" element={<Liked />} />
          <Route path="/user/myList" element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
