import { memo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ModalState } from "../../state/ModalState";
import { colourTheme } from "../../state/Theme";
import cafe from "../assets/cafe.png";
import bag from "../assets/coffee-bag.png";
import cup from "../assets/coffee-cup.png";
export const PaymentModal = memo(() => {
    const [currentModal, setCurrentModal] = useRecoilState(ModalState);
    const currentTheme = useRecoilValue(colourTheme);

    const closeModal = () => {
        setCurrentModal(false);
    };

    return (
        currentModal && (
            <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
                <div
                    className={`p-6 h-auto w-auto rounded-lg shadow-lg ${
                        currentTheme === "dark"
                            ? "bg-amber-950 text-white"
                            : "bg-amber-100 text-black"
                    }`}
                >
                    <div className="flex rounded-lg p-1 gap-2">
                        <div
                            className="flex m-2 cursor-pointer transition ease-in-out duration-250  hover:text-rose-500"
                            onClick={closeModal}
                        >
                            🇽​
                        </div>
                        <div className="text-xl   font-custom m-2">
                            Coffee Shop
                        </div>
                    </div>

                    <div className="justify-between">
                        <div className="flex justify-between pt-4 p-1 pl-1 pb-2 gap-8">
                            <div className="flex">
                                <img className=" h-8 w-8" src={cup}></img>
                                <div className="p-1"> - 1 coffee</div>
                            </div>
                            <div
                                className={`p-2 rounded-xl font-sans text-sm shadow-md  ${
                                    currentTheme === "dark"
                                        ? "bg-gray-500 transition-all ease-in duration-150 text-white hover:bg-slate-600 cursor-pointer hover:shadow-black"
                                        : "bg-amber-300 text-black transition-all ease-in duration-150 hover:bg-amber-400 cursor-pointer hover:shadow-orange-950"
                                }`}
                            >
                                click to buy
                            </div>
                        </div>
                        <div className="flex justify-between pt-4 p-1 pl-1 pb-2 gap-8">
                            <div className="flex">
                                <img className=" h-8 w-8" src={bag}></img>
                                <div className="p-1"> - 3 coffee</div>
                            </div>
                            <div
                                className={`p-2 rounded-xl font-sans text-sm shadow-md  ${
                                    currentTheme === "dark"
                                        ? "bg-gray-500 transition-all ease-in duration-150 text-white hover:bg-slate-600 cursor-pointer hover:shadow-black"
                                        : "bg-amber-300 text-black transition-all ease-in duration-150 hover:bg-amber-400 cursor-pointer hover:shadow-orange-950"
                                }`}
                            >
                                click to buy
                            </div>
                        </div>
                        <div className="flex justify-between pt-4 p-1 pl-1 pb-2 gap-8">
                            <div className="flex">
                                <img className=" h-8 w-8" src={cafe}></img>
                                <div className="p-1"> - 5 coffee</div>
                            </div>
                            <div
                                className={`p-2 rounded-xl font-sans text-sm shadow-md  ${
                                    currentTheme === "dark"
                                        ? "bg-gray-500 transition-all ease-in duration-150 text-white hover:bg-slate-600 cursor-pointer hover:shadow-black"
                                        : "bg-amber-300 text-black transition-all ease-in duration-150 hover:bg-amber-400 cursor-pointer hover:shadow-orange-950"
                                }`}
                            >
                                click to buy
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
});
