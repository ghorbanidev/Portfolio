import { useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import {
    SettingsEthernetRounded,
    HomeRepairServiceRounded,
    SchoolRounded,
} from "@mui/icons-material";
import { useTheme } from '@emotion/react';
import { grey } from '@mui/material/colors';
import CustomDivider from './../Components/common/CustomDivider';
import { DevEduTimeline, DevExpTimeline } from '../Components/pages';

const Resume = ({ helmetTitle }) => {

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
                    bColor="error.main"
                    cColor="error"
                    icon={<SettingsEthernetRounded />}
                    align="center"
                    text="رزومه من"
                />

                <Grid container sx={{ mt: 4 }}>
                    <Grid xs={6}>
                        <CustomDivider
                            bColor="warning.main"
                            cColor="warning"
                            icon={<HomeRepairServiceRounded />}
                            align="center"
                            text="تجربیات"
                        />

                        <DevExpTimeline loading={loading} />
                    </Grid>

                    <Grid xs={6}>
                        <CustomDivider
                            bColor="info.main"
                            cColor="info"
                            icon={<SchoolRounded />}
                            align="center"
                            text="تحصیلات"
                        />

                        <DevEduTimeline loading={loading} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Resume;
