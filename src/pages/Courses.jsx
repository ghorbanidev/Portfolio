import { useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { SchoolRounded } from "@mui/icons-material";
import { useTheme } from '@emotion/react';
import { grey } from '@mui/material/colors';
import CustomDivider from './../Components/common/CustomDivider';
import { ShowCourses } from '../Components/pages';

const Courses = ({ helmetTitle }) => {

    const [loading, setLoading] = useState(false)
    const theme = useTheme()

    useEffect(() => {
        setLoading(true)

        return () => {
            setLoading(false)
        }
    }, [])

    return (
        <Card
            sx={{
                height: "100vh",
                backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[50],
                overflowY: "scroll",
            }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <CustomDivider
                    bColor="primary.main"
                    cColor="primary"
                    icon={<SchoolRounded />}
                    align="center"
                    text="دوره های من"
                />

                <Grid container sx={{ mx: 3, mt: 5 }}>
                    <ShowCourses loading={loading} />
                </Grid>
            </CardContent>
        </Card>
    )

}

export default Courses;