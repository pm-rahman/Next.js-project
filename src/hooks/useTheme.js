import ThemeContext from "@/context/ThemeContext";
import { useContext } from "react";

const useTheme = () => {
    const theme = useContext(ThemeContext);
    const isClient = typeof window !== "undefined"
    if(!isClient && !theme) return {}
    if(!theme){
        throw new Error("you must wrap your application with Theme provider or use the useTheme")
    }
    return theme;
};

export default useTheme;