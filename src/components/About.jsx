import { useRecoilState } from "recoil";
import { colourTheme } from "../../state/Theme";

export function About() {
    const [currentTheme, setCurrentTheme] = useRecoilState(colourTheme);

    return (
        <div>
            <div className="font-custom">
                hello , this is siddharth
                <br></br>i usually work with frontend or things that i am
                interested in
            </div>
        </div>
    );
}
