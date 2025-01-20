import { useRecoilState } from "recoil";
import { colourTheme } from "../../state/Theme";

export function About() {
    const [currentTheme, setCurrentTheme] = useRecoilState(colourTheme);

    return (
        <div
            className={`flex font-custom justify-center min-h-screen w-full text-center text-lg items-center  ${
                currentTheme === "dark"
                    ? "bg-black  text-white"
                    : "bg-white text-black"
            }`}
        >
            <div className="-translate-y-10">
                halo , this is siddharth i am an undergrad in my sophomore year
                <br></br> of university ; i enjoy reading, coding and watching
                movies
            </div>
        </div>
    );
}
