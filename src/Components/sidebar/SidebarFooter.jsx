
import { Box, Typography } from '@mui/material';
import { FavoriteRounded, CopyrightRounded } from '@mui/icons-material';

const SidebarFooter = () => {
    return (
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "end", alignItems: "center", height: 95 }}>
            <Typography variant="subtitle2" color="text.primary" >
                طراحی شده با {" "}
                <FavoriteRounded sx={{ verticalAlign: "middle", color: "tomato", height: 20 }} />
            </Typography>
            <Typography sx={{ mt: 2 }} variant="caption" color="text.primary">
                کپی رایت 1401 {" "}
                <CopyrightRounded sx={{ verticalAlign: "middle", height: 16 }} />
            </Typography>
        </Box>
    )
}

export default SidebarFooter;