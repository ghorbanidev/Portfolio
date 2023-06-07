import { useEffect, useState } from "react";
import PagesContainer from "./PagesContainer";
import { Sidebar } from "../Components/sidebar";
import MainLayout from "../Layouts/MainLayout";
import { useMediaQuery } from '@mui/material';
import SidebarContainer from './SidebarContainer';
import MainContext from "../context"
import DrawerActionButton from './../Components/drawer/DrawerActionButton';
import SwipeableViews from 'react-swipeable-views';
import { Home, About, Resume, Courses, Comments, Contact } from "../pages";
// import { useTheme } from "@emotion/react";
import { Page } from './../Components/pages';

function App() {
  const [pageNumber, setPageNumber] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [mode, setMode] = useState()

  // const theme = useTheme()
  // const isMdUp = useMediaQuery(theme.breakpoints.up("md"))
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  // useEffect(() => {
  //   if (isMdUp) {
  //     setDrawerOpen(false)
  //   }
  // }, [isMdUp])

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light")
  }, [])


  const handlePageNumber = (event, newPage) => {
    setPageNumber(newPage)
  }

  const handleThemeChange = () => {
    setMode(prevMode => prevMode === "light" ? "dark" : "light")
  }

  return (
    <MainContext.Provider value={{ pageNumber, handlePageNumber, handleThemeChange, drawerOpen, setDrawerOpen }}>
      <MainLayout mode={mode}>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerActionButton />
        <PagesContainer>
          <SwipeableViews
            // axis="y"
            index={pageNumber}
            onChangeIndex={handlePageNumber}
          >
            <Page pageNumber={pageNumber} index={0}>
              <Home helmetTitle={"وبسایت شخصی علی قربانی | صفحه اصلی"} />
            </Page>
            <Page pageNumber={pageNumber} index={1}>
              <About helmetTitle={"وبسایت شخصی | درباره من"} />
            </Page>
            <Page pageNumber={pageNumber} index={2}>
              <Resume helmetTitle={"وبسایت شخصی | رزومه من"} />
            </Page>
            <Page pageNumber={pageNumber} index={3}>
              <Courses helmetTitle={"وبسایت شخصی | دوره های من"} />
            </Page>
            <Page pageNumber={pageNumber} index={4}>
              <Comments helmetTitle={"وبسایت شخصی | نظرات دانشجویان"} />
            </Page>
            <Page pageNumber={pageNumber} index={5}>
              <Contact helmetTitle={"وبسایت شخصی | ارتباط با من"} />
            </Page>
          </SwipeableViews>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default App;
