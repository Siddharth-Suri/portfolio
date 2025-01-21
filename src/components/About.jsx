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
            <div className="p-5 text-start">
                halo , this is siddharth i am an undergrad in my sophomore year
                of university
                <br></br>
                <br></br>i enjoy:
                <div className="pl-5">
                    <br></br>
                    <ul className="list-disc pl-5">
                        <li>books</li>
                        <li>music</li>
                        <li>movies</li>
                    </ul>
                </div>
            </div>
        </div>
    );
});
