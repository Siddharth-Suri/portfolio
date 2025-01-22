import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { About } from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { TopBar } from "./components/TopBar";
import { Projects } from "./components/Projects";
function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <TopBar></TopBar>
                <Routes>
                    <Route path="/about" element={<About></About>}></Route>
                    <Route path="/" element={<Projects></Projects>}></Route>
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;
