import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { About } from "./components/About";
import { RecoilRoot } from "recoil";
function App() {
    return (
        <RecoilRoot>
            <div>
                <About></About>
            </div>
        </RecoilRoot>
    );
}

export default App;
