
import { Tab, Tabs } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useContext } from 'react';
import MainContext from "../../context"
import { useTheme } from '@emotion/react';
import { TabsData } from './../../constants/tabsData';

const SidebarTabs = () => {

    const { pageNumber, handlePageNumber, setDrawerOpen } = useContext(MainContext)
    const theme = useTheme()
    const data = TabsData()

    return (
        <Tabs 
            orientation="vertical" 
            indicatorColor= {theme.palette.mode === "dark" ? 'secondary' : 'primary'}
            textColor= {theme.palette.mode === "dark" ? 'secondary' : 'primary'}
            variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile
            value={pageNumber}
            onChange={handlePageNumber}
        >

            {data.map((tab, index) => (
                <Tab
                    // label={
                    //     <div>
                    //         <Typography variant="subtitle2" color="white">
                    //             <HomeRounded sx={{ verticalAlign: "middle", mx: 2 }} />
                    //            خانه
                    //         </Typography>
                    //     </div>
                    // }
                    key={index}
                    label={tab.label}
                    icon={tab.icon}
                    iconPosition="start"
                    sx={{
                        "&.MuiTab-root": {
                            backgroundColor: theme.palette.mode === "dark" ? grey[800] : grey[500],
                            color: "text.primary",
                            borderRadius: 2,
                            my: 0.5,
                            mx: 1,
                            minHeight: 50,
                        }
                    }}
                    onClick={() => setDrawerOpen(false)}
                    {...tab}
                />
            ))}

        </Tabs>
    )
}

export default SidebarTabs;