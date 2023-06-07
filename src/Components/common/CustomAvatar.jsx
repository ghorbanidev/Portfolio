import { Avatar } from "@mui/material";

const CustomAvatar = ({ avatar, variant, size, fallback }) => {
    return (
        <>
            <Avatar
                src={avatar}
                variant={variant}
                sx={{
                    height: size,
                    width: size,
                    margin: "0 auto",
                    display: {
                        xl: "block",
                        lg: "block",
                        md: "block",
                        sm: "none",
                        xs: "none",
                    },
                    border: "3px solid #8be9fd"
                }}
            >
                {fallback}
            </Avatar>
        </>
    );
};

export default CustomAvatar;
