import { GitHub, Instagram, Telegram, WhatsApp } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

const SocialMediaIcons = () => {
    return (
        <Box component="div" sx={{ m: "0 auto", textAlign: "center" }}>
            <IconButton aria-label="Github">
                <a href="https://github.com/younes-ghorbany" target='_blank' rel='noopener noreferrer'>
                    <GitHub sx={{ color: "text.primary" }} />
                </a>
            </IconButton>
            <IconButton aria-label="Instagram">
                <a href="https://github.com/younes-ghorbany" target='_blank' rel='noopener noreferrer'>
                    <Instagram sx={{ color: "text.primary" }} />
                </a>
            </IconButton>
            <IconButton aria-label="Telegram">
                <a href="https://github.com/younes-ghorbany" target='_blank' rel='noopener noreferrer'>
                    <Telegram sx={{ color: "text.primary" }} />
                </a>
            </IconButton>
            <IconButton aria-label="Whatsapp">
                <a href="https://github.com/younes-ghorbany" target='_blank' rel='noopener noreferrer'>
                    <WhatsApp sx={{ color: "text.primary" }} />
                </a>
            </IconButton>
        </Box>
    )
}

export default SocialMediaIcons;