import React, { createContext, useContext } from "react";

export default themeContext = createContext({
    themeMode : "light",
    lightTheme : () => {},
    darkTheme : () => {}
})

export default themeContextProvider = themeContext.Provider

export default useTheme= () => {
    return useContext(themeContext)
}