import { createTheme } from "@mui/material";

//* Create Custom Theme
export const lightTheme = createTheme({
    direction: "rtl",

    palette: {
        mode: "light",
        primary: {
            // main: "#8be9fd"
            main: "#90CAF9"
        },
        secondary: {
            main: "#bd93f9"
        }
    },

    typography: {
        fontFamily: 'tanha, vazir, roboto',
    },
})

export const darkTheme = createTheme({
    direction: "rtl",

    palette: {
        mode: "dark",
        primary: {
            // main: "#8be9fd"
            main: "#90CAF9"
        },
        secondary: {
            main: "#bd93f9"
        }
    },

    typography: {
        fontFamily: 'tanha, vazir, roboto',
    },
})