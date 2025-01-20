import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { About } from "./components/About";
import { RecoilRoot, useRecoilState } from "recoil";
import { colourTheme } from "../state/Theme";
import { TopBar } from "./components/TopBar";
function App() {
    return (
        <RecoilRoot>
            <TopBar></TopBar>
            <About></About>
        </RecoilRoot>
    );
}

export default App;
