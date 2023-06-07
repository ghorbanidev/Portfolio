import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Fab } from "@mui/material";
import { WbSunnyOutlined, NightlightOutlined } from "@mui/icons-material";
import mainContext from "../context";

const ThemeActionButton = () => {
    const theme = useTheme();
    const { handleThemeChange } = useContext(mainContext);

    return (
        <Box
            sx={{
                position: "absolute",
                display: {
                    xs: "none",
                    md: "block",
                },
            }}
        >
            <Fab
                aria-label="ThemeChanger"
                variant="circular"
                size="small"
                color="whitesmoke"
                onClick={handleThemeChange}
                sx={{ ml: 2, color: "whitesmoke" }}
            >
                {theme.palette.mode === "dark" ? (
                    <WbSunnyOutlined color="warning" />
                ) : (
                    <NightlightOutlined color="info" />
                )}
                {/* {theme.palette.mode === "dark" ? "تم روز" : "تم شب"} */}
            </Fab>
        </Box>
    );
};

export default ThemeActionButton;
