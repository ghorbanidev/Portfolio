import { useTheme } from "@emotion/react";
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { grey } from "@mui/material/colors";

const PagesContainer = ({ children }) => {

    const theme = useTheme()

    return (
        <Grid xs={12} sm={12} md={9} lg={10} xl={10} sx={{ backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[50] }}>
            {children}
        </Grid>
    )
}

export default PagesContainer;