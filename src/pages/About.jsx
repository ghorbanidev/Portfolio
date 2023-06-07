import { Card, CardContent } from "@mui/material";
import avatar from "../assets/Images/profile-img.jpg"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";
import { Helmet } from 'react-helmet-async';
import { useTheme } from "@emotion/react";
import { grey } from "@mui/material/colors";
import { DevInfo, DevWorkCount, Skills } from "../Components/pages";
import CustomAvatar from "../Components/common/CustomAvatar";
import CustomDivider from './../Components/common/CustomDivider';

const About = ({ helmetTitle }) => {

    const theme = useTheme()

    return (
        <Card sx={{
            height: "100vh",
            backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[50],
            overflowY: "scroll"
        }}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <Grid container sx={{ mx: 3 }}>
                    <Grid
                        xs={12}
                        sm={12}
                        md={8}
                        lg={8}
                        xl={8}
                    >
                        <CustomDivider
                            bColor="primary.main"
                            cColor="primary"
                            icon={<CodeRounded />}
                            align="right"
                            text="برنامه نویس فرانت اند"
                        />

                        <Grid container sx={{
                            justifyContent: "space-between"
                        }}>
                            <Grid xs={4} sm={4} md={3} lg={3} sx={{
                                mt: 3,
                                display: {
                                    "xs": "none",
                                    "sm": "block",
                                    "md": "block"
                                }
                            }}>
                                {/* Dev Work Count */}
                                <DevWorkCount />
                            </Grid>

                            <Grid xs={12} sm={8} md={9} lg={9}>
                                {/* Dev Info */}
                                <DevInfo />
                            </Grid>

                        </Grid>

                    </Grid>
                    <Grid
                        xs={0}
                        sm={0}
                        md={4}
                        lg={4}
                        xl={4}
                    >
                        <CustomAvatar
                            avatar={avatar}
                            variant="rounded"
                            size={250}
                            fallback="AG"
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid sx={{ width: 1, mt: 1 }}>
                        <CustomDivider
                            bColor="secondary.main"
                            cColor="secondary"
                            icon={<SelfImprovementRounded />}
                            align="center"
                            text="مهارت های من"
                        />

                        {/* Skills */}
                        <Skills />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default About;