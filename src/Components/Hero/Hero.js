import React from "react";
import { Box, Fade, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { HeroContainer, HeroImage, HeroContent, HeroBtnWrapper, HeroButton, HeroH1, HeroH2, WaveContainer, WaveImage } from "./Hero.Styles"

const Hero = () => {
    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="start"
                flexDirection="column"
                id='home'
                height="100vh"
                zIndex="10"
                sx={{
                    backgroundImage: "linear-gradient(0deg, rgba(243, 147, 20, .8), rgba(234, 147, 20, .8)), url(/home-bg-34.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    overflowX: "hidden",
                }}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="start"
                    zIndex="10"
                    marginLeft="10rem"
                    sx={{
                        animationDelay: "0.1s",
                        animationName: "fadeInUp",
                        visibility: "visible",
                        animationDuration: "5s"
                    }}
                >
                    <HeroH1>Find Fans.</HeroH1>
                    <HeroH2>Find Games.</HeroH2>
                    <HeroH1>Find Friends.</HeroH1>
                    <Typography
                        color="white"
                        fontFamily="'Mulish', sans-serif"
                        fontSize="25px"
                        zIndex="10"
                    >
                        Bring the home game experience with you anywhere you go.<br />
                        With FanFindr sports app, locate fans of your team anywhere<br />
                        in your city.
                    </Typography>
                </Box>
                <Box display="flex" ml="10rem" zIndex="10" mt="1rem" alignItems="center">
                    <HeroButton>Join As Fan</HeroButton>
                    <Typography
                        color="white"
                        fontFamily="'Mulish', sans-serif"
                        fontSize="25px"
                        zIndex="10"
                        paddingLeft="10px"
                        paddingRight="10px"
                    >
                        Or
                    </Typography>
                    <HeroButton to="/register">Join As Business</HeroButton>
                </Box>
                <WaveImage src="/wave.svg" alt="wave" />
            </Box>
        </>
    )
}

export default Hero;