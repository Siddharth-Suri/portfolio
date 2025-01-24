import { useNavigate } from "react-router-dom";
import { colourTheme } from "../../state/Theme";
import { useRecoilValue } from "recoil";

import { memo } from "react";
import { PaymentModal } from "./PaymentModal";

export const Projects = memo(() => {
    const navigate = useNavigate();
    const currentTheme = useRecoilValue(colourTheme);

    return (
        <div
            className={` grid grid-cols-8 auto-rows-min min-h-screen p-2 overflow-auto font-custom  items-start  text-xl font-semibold ${
                currentTheme === "dark"
                    ? "bg-black  text-white"
                    : "bg-amber-50 text-black"
            }`}
        >
            <div className=" p-4 col-span-3 col-start-3 row-start-1 ">
                ├─projects
                <div className="pl-8 p-2">
                    ├─web
                    <div className="flex pl-8 p-2 pb-2  ">
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
            </div>

            <div className=" p-4 col-span-3 col-start-3">
                ├─others
                <div className="flex pl-8 p-4 pt-2 pb-2 ">
                    ├─
                    <div className="cursor-pointer hover:underline hover:text-sky-300">
                        nothing
                    </div>
                </div>
            </div>
            <div className=" p-4 col-span-3 col-start-3 ">
                ├─socials
                <div className="flex pl-8 p-4 pt-2 pb-2  ">
                    ├─
                    <a href="https://github.com/Siddharth-Suri" target="_blank">
                        <div className="cursor-pointer hover:underline hover:text-sky-300">
                            github
                        </div>
                    </a>
                </div>
                <div className="flex pl-8 p-4 pt-2 pb-2 ">
                    ├─
                    <a
                        href="https://www.linkedin.com/in/siddharth-suri-334529287/"
                        target="_blank"
                    >
                        <div className="cursor-pointer hover:underline hover:text-sky-300">
                            linkedin
                        </div>
                    </a>
                </div>
            </div>
            <div className="p-4 col-span-3 col-start-3">
                <PaymentModal></PaymentModal>
            </div>
        </div>
    );
});
