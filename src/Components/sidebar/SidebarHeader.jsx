import { Typography } from '@mui/material';
import { useState } from 'react';
import { RandomReveal } from 'react-random-reveal';
import avatar from "../../assets/Images/profile-img.jpg"
import { alphabetPersian } from './../../constants/alphabetPersian';
import ThemeActionButton from './../ThemeactionButton';
import CustomAvatar from './../common/CustomAvatar';
import SocialMediaIcons from '../SocialMediaIcons';

const SidebarHeader = () => {
    const [start, setStart] = useState(false)
    return (
        <>
            <ThemeActionButton />
            {/* <Hidden mdDown> */}
            <CustomAvatar
                avatar={avatar}
                variant="Circle"
                size={200}
                fallback="AG"
            />
            {/* </Hidden> */}
            <Typography color="secondary" variant="h6">
                <RandomReveal isPlaying duration={4} characterSet={alphabetPersian} onComplete={() => setStart(true)} characters="علی قربانی" />
            </Typography>
            {start && (
                <Typography color="gray" variant="caption">
                    <RandomReveal isPlaying duration={4} characterSet={alphabetPersian} characters="توسعه دهنده فرانت اند" />
                </Typography>
            )}
            {/* Social Media Icons */}
            <SocialMediaIcons />
        </>
    )
}

export default SidebarHeader