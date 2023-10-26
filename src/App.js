import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignUp from "./pages/SignUpPage/SignUp";
import NotFound from "./NotFound";
import Login from "./pages/LoginPage/Login";
import NoticeDetail from "./pages/NoticeDetail";
import NoticeList from "./pages/NoticeList";
import RegisterPage from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/main" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/NoticeDetail" element={<NoticeDetail />}></Route>
        <Route path="/NoticeList" element={<NoticeList />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
