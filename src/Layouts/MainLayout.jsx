import { ThemeProvider } from "@mui/material/styles"
import rtlPlugin from "stylis-plugin-rtl"
import { CacheProvider } from "@emotion/react"
import { HelmetProvider } from "react-helmet-async"
import createCatch from "@emotion/cache"
import { prefixer } from "stylis"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { lightTheme, darkTheme} from './Theme';

//* Create RTL Catch
const catchRTL = createCatch({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
})

const MainLayout = ({ children, mode }) => {
    
    const theme = mode === "dark"?darkTheme : lightTheme
    
    return (
        <CacheProvider value={catchRTL}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Grid container sx={{ height: "100vh" }}>
                        {children}
                    </Grid>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MainLayout;