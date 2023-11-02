import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext();

const themes = {
    dark: {
        backgroundColor: '#262b42',
        color: 'white'
    },
    light: {
        backgroundColor: 'white',
        color: 'black'
    }
}

function ThemeProvider({children}) {
    const [isDark, setIsDark] = useState(false);
    const theme =  isDark ? themes.dark : themes.light;
    function toggleTheme(){
        localStorage.setItem("isDark", JSON.stringify(!isDark));
        setIsDark(!isDark); 
    }

    useEffect(() => {
        const isDark = localStorage.getItem("isDark") === "true";
        setIsDark(isDark);
    }, [])

    return (
        <ThemeContext.Provider value={[{theme, isDark}, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
        );
}

export { ThemeProvider }

ThemeProvider.propTypes = {
    children: PropTypes.element.isRequired
  }