import { Helmet } from "react-helmet-async";
import {
    Card,
    CardContent
} from "@mui/material";
import { ForumRounded } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { grey } from "@mui/material/colors";
import CustomDivider from './../Components/common/CustomDivider';
import { CommentsSlider } from "../Components/pages";

const Comments = ({ helmetTitle }) => {

    const theme = useTheme()

    return (
        <Card
            sx={{
                height: "100vh",
                backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[50],
                overflowY: "scroll",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <CustomDivider
                    bColor="success.main"
                    cColor="success"
                    icon={<ForumRounded />}
                    text="نظرات دانشجویان دوره های من"
                    align="center"
                />

                <CommentsSlider />

            </CardContent>
        </Card>
    );
};

export default Comments;
