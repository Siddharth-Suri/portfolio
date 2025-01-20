import { useNavigate } from "react-router-dom";
import { colourTheme } from "../../state/Theme";
import { useRecoilState, useRecoilValue } from "recoil";
import { memo } from "react";
export const TopBar = memo(() => {
    const currentTheme = useRecoilValue(colourTheme);
    const navigate = useNavigate();
    return (
        <div
            className={`flex p-4 font-custom justify-around items-center text-xl gap-2 font-semibold ${
                currentTheme === "dark"
                    ? "bg-black  text-white"
                    : "bg-white text-black"
            }`}
        >
            <div className="flex">
                <div
                    className="p-4 cursor-pointer hover:text-fuchsia-400 hover:underline"
                    onClick={() => navigate("/")}
                >
                    Projects
                </div>
                <div
                    className="p-4 cursor-pointer hover:text-fuchsia-400 hover:underline"
                    onClick={() => navigate("/about")}
                >
                    About
                </div>
            </div>
            <div className="p-4 cursor-pointer hover:text-yellow-400 hover:underline">
                Coffeee
            </div>
        </div>
    );
});
