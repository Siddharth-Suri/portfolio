import { useRecoilState, useRecoilValue } from "recoil";
import { colourTheme } from "../../state/Theme";
import { useMemo } from "react";
import { memo } from "react";
export const About = memo(() => {
    const currentTheme = useRecoilValue(colourTheme);

    return (
        <div
            className={`flex font-custom justify-around h-screen w-full text-center text-lg items-start  ${
                currentTheme === "dark"
                    ? "bg-black  text-white"
                    : "bg-white text-black"
            }`}
        >
            <div className="p-5">
                halo , this is siddharth i am an undergrad in my sophomore year
                <br></br> of university ; i enjoy reading, coding and watching
                movies
            </div>
        </div>
    );
});
