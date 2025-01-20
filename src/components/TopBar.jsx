import { colourTheme } from "../../state/Theme";
import { useRecoilState } from "recoil";
export function TopBar() {
    const [currentTheme, setCurrentTheme] = useRecoilState(colourTheme);
    return (
        <div
            className={`flex p-4 font-custom justify-around items-center text-xl gap-2 ${
                currentTheme === "dark"
                    ? "bg-black  text-white"
                    : "bg-white text-black"
            }`}
        >
            <div className="flex">
                <div className="p-4 cursor-pointer hover:text-fuchsia-400 hover:underline">
                    Projects
                </div>
                <div className="p-4 cursor-pointer hover:text-fuchsia-400 hover:underline">
                    About
                </div>
            </div>
            <div className="p-4 cursor-pointer hover:text-yellow-300 hover:underline">
                Coffeee
            </div>
        </div>
    );
}
