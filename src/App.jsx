import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { AboutScreen } from "./screens/AboutScreen/AboutScreen";
import { ContactScreen } from "./screens/ContactScreen/ContactScreen";
import { HomeScreen } from "./screens/HomeScreen/HomeScreen";
import { NotFoundScreen } from "./screens/NotFoundScreen/NotFoundScreen";
import { ProjectScreen } from "./screens/ProjectScreen/ProjectScreen";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/about" element={<AboutScreen />}></Route>
        <Route path="/projects" element={<ProjectScreen />}></Route>
        <Route path="/contact" element={<ContactScreen />}></Route>
        <Route path="*" element={<NotFoundScreen />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
