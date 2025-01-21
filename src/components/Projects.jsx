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
                    : "bg-amber-50 text-black"
            }`}
        >
            <div className="cols-start-3 w-7/12 -translate-x-6 p-4">
                projects
                <div className="pl-8 p-4">
                    ├─web
                    <div className="flex pl-8 p-4 pb-2  ">
                        ├─
                        <a
                            href="https://amazon-cart-seven.vercel.app/ "
                            target="_blank"
                        >
                            <div className="hover:underline cursor-pointer hover:text-sky-300">
                                amazon-cart
                            </div>
                        </a>
                    </div>
                    <div className="flex pl-8 p-4 pt-2 pb-2 ">
                        ├─
                        <div
                            className="hover:underline cursor-pointer hover:text-sky-300"
                            onClick={() => window.location.reload()}
                        >
                            this-site
                        </div>
                    </div>
                    <div className="flex pl-8 p-4 pt-2 pb-2 ">
                        ├─
                        <div className="hover:underline cursor-pointer hover:text-sky-300">
                            heatmap (working on it)
                        </div>
                    </div>
                </div>
                <div className="pl-8 p-4">
                    ├─others
                    <div className="flex pl-8 p-4 pt-2 pb-2 ">
                        ├─
                        <div className="cursor-pointer hover:text-sky-300">
                            nothing
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
