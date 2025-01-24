import { useNavigate } from "react-router-dom";
import { colourTheme } from "../../state/Theme";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { ThemeButton } from "./ThemeButton";
import { HoverMechanic } from "../../state/HoveringMechanic";
import { PaymentModal } from "./PaymentModal";

import { memo } from "react";
import { ModalState } from "../../state/ModalState";

export const TopBar = memo(() => {
    const currentTheme = useRecoilValue(colourTheme);
    const setModalState = useSetRecoilState(ModalState);
    const [currentHover, setCurrentHover] = useRecoilState(HoverMechanic);
    const navigate = useNavigate();

    return (
        <div
            className={`flex p-4 font-custom justify-around items-center text-xl gap-2 font-semibold ${
                currentTheme === "dark"
                    ? "bg-black  text-white"
                    : "bg-amber-50 text-black"
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

            <div className="flex p-4">
                <div className="p-4 cursor-pointer hover:text-yellow-400 hover:underline">
                    <ThemeButton />
                </div>
                <div
                    className="flex cursor-pointer p-4 hover:text-yellow-400"
                    onMouseEnter={() => setCurrentHover(true)}
                    onMouseLeave={() => setCurrentHover(false)}
                >
                    <div
                        className={`overflow-hidden whitespace-nowrap transition-all ease-in-out duration-1000 ${
                            currentHover
                                ? "max-w-[200px] opacity-100"
                                : "max-w-0 opacity-0"
                        }`}
                    >
                        Buy me a
                    </div>
                    <div
                        className="pl-3 hover:underline"
                        onClick={() => {
                            setModalState(true);
                        }}
                    >
                        Coffee
                    </div>
                </div>
            </div>
        </div>
    );
});
