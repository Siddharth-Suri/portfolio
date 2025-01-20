import { useNavigate } from "react-router-dom";
import { colourTheme } from "../../state/Theme";
import { useRecoilState, useRecoilValue } from "recoil";
import { memo } from "react";

export const Projects = memo(() => {
    const navigate = useNavigate();
    const currentTheme = useRecoilValue(colourTheme);

    return (
        <div
            className={`flex p-4 h-screen font-custom justify-center   text-xl gap-2 font-semibold ${
                currentTheme === "dark"
                    ? "bg-black  text-white"
                    : "bg-white text-black"
            }`}
        >
            <div className="cols-start-3 w-7/12 -translate-x-6 p-4">
                projects
                <div className="pl-8 p-4">
                    ├─web
                    <div className="flex pl-8 p-4 pb-2   cursor-pointer">
                        ├─
                        <div className="hover:underline hover:text-teal-300">
                            amazon-cart
                        </div>
                    </div>
                    <div className="flex pl-8 p-4 pt-2 pb-2  cursor-pointer">
                        ├─
                        <div className="hover:underline hover:text-teal-300">
                            this-site
                        </div>
                    </div>
                    <div className="flex pl-8 p-4 pt-2 pb-2   cursor-pointer">
                        ├─
                        <div className="hover:underline hover:text-teal-300">
                            heatmap
                        </div>
                    </div>
                </div>
                <div className="pl-8 p-4">├─others</div>
            </div>
        </div>
    );
});
