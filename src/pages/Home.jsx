import { useCallback, useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import bg02 from "../assets/Images/bg02.jpeg"
import Typed from 'typed.js';
import Particles from "react-particles"
import { loadFull } from "tsparticles"
import { links } from './../constants/particles';
import TextTransition, { presets } from 'react-text-transition';
import { Helmet } from 'react-helmet-async';

const Home = ({ helmetTitle }) => {
    const [index, setIndex] = useState(0)
    const nameEl = useRef(null)
    // const infoEl = useRef(null)
    const strings = [
        "توسعه دهنده فرانت اند هستم",
        "مدرس برنامه نویسی هستم",
        "فریلنسر هستم",
        "محتواساز دنیای برنامه نویسی هستم",
    ]

    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: ["علی قربانی"],
            typeSpeed: 110,
            backSpeed: 80,
            backDelay: 50,
            showCursor: false
        })

        // const typedInfo = new Typed(infoEl.current, {
        //     strings: strings,
        //     startDelay: 1500,
        //     typeSpeed: 80,
        //     backSpeed: 50,
        //     backDelay: 50,
        //     loop: true,
        //     showCursor: false
        // })

        const stringTransition = setInterval(() => {
            setIndex(index => index + 1)
        }, 3000)

        return () => {
            typedName.destroy()
            // typedInfo.destroy()
            clearInterval(stringTransition)
        }

    }, [])

    const particlesInit = useCallback(async engine => {
        await loadFull(engine)
    }, [])

    const ParticlesLoaded = useCallback(async container => {
        // await console.log(container)
    }, [])

    return (
        <Box sx={{
            backgroundImage: `url(${bg02})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <Particles id="tsparticles" init={particlesInit} loaded={ParticlesLoaded} options={links} />
            <Box component="div" sx={{ display: "flex" }}>
                <Typography variant='h3' color="#f93c92">
                    {"< "}
                </Typography>
                <Typography ref={nameEl} variant="h3" mb={1} color="tomato"></Typography>
                <Typography variant='h3' color="#f93c92">
                    {"/> "}
                </Typography>
            </Box>
            <Box component="div" sx={{ display: "flex" }}>
                <TextTransition springConfig={presets.wobbly}>
                    <Typography
                        // ref={infoEl}
                        variant="h4"
                        color="whitesmoke"
                        sx={{ textDecoration: "underline", textDecorationColor: "#f93c92", mt: 4 }}
                    >
                        {strings[index % strings.length]}
                    </Typography>
                </TextTransition>
                <Typography variant='h4' color='whitesmoke' sx={{ mt: 4, mr: 1 }}>من یک</Typography>
            </Box>
        </Box>
    );
};

export default Home;