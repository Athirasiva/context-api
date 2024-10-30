import { createContext, useState } from "react";

const ThemeContext = createContext()


function ThemeProvider(props){
    const [darkMode, setDarkmode]= useState(true)
     const toggleDarkmode = ()=>{
        setDarkmode(!darkMode)
     }
 return (
    <div>
        <ThemeContext.Provider value={{darkMode, toggleDarkmode}}>
            {props.children}
        </ThemeContext.Provider>
    </div>
 )
}
export {ThemeContext, ThemeProvider}