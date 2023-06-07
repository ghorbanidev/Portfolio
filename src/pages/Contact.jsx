import { useTheme } from "@emotion/react";
import { AccountCircle } from "@mui/icons-material";
import { Card, CardContent, Slide, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Grid from '@mui/material/Unstable_Grid2';
import worldMap from "../assets/map.svg"
import CustomDivider from './../Components/common/CustomDivider';
import { ContactForm } from "../Components/pages";

const Contact = ({ helmetTitle }) => {

    const [loading, setLoading] = useState(false)
    const theme = useTheme()

    useEffect(() => {
        setLoading(true)

        return () => {
            setLoading(false)
        }

    }, [])

    return (
        <Card sx={{
            height: "100vh",
            backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[50],
            overflowY: "scroll",
            display: "flex",
            flexDirection: 'column'
        }}>
            <Helmet>
                <title>
                    {helmetTitle}
                </title>
            </Helmet>

            <CardContent>
                <CustomDivider
                    bColor="warning.main"
                    cColor="warning"
                    icon={<AccountCircle />}
                    align="center"
                    text="ارتباط با من"
                />

                <Grid container sx={{ mt: 5 }}>
                    <Slide
                        direction="up"
                        in={loading}
                        style={{
                            transitionDelay: loading ? "200ms" : "0ms",
                        }}
                    >
                        <Grid xs={12} sx={12} md={8}>
                            <Card
                                sx={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                {/* Form */}
                                <ContactForm />
                            </Card>
                        </Grid>
                    </Slide>

                    <Slide
                        direction="up"
                        in={loading}
                        style={{
                            transitionDelay: loading ? "200ms" : "0ms",
                        }}
                    >
                        <Grid
                            xs={0}
                            sm={0}
                            md={4}
                            sx={{
                                textAlign: "center",
                                backgroundImage: `url(${worldMap})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                            }}
                        >
                            <Typography
                                variant="h6"
                                color="text.primary"
                                sx={{
                                    fontFamily: "vazir",
                                    mt: 4,
                                    display: {
                                        xs: "none",
                                        sm: "none",
                                        md: "block",
                                    },
                                }}
                            >
                                بیا در مورد همه چیز باهم صحبت کنیم
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.primary"
                                sx={{
                                    mt: 2,
                                    display: {
                                        xs: "none",
                                        sm: "none",
                                        md: "block",
                                    },
                                }}
                            >
                                👋{" "}
                                <a
                                    href="mailto:younes.gh@chmail.ir"
                                    alt="email"
                                    style={{
                                        color: "tomato",
                                    }}
                                >
                                    ایمیل
                                </a>{" "}
                                بزن به من
                            </Typography>
                        </Grid>
                    </Slide>
                </Grid>

            </CardContent>
        </Card >
    )
}

export default Contact;