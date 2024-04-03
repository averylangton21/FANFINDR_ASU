import React from "react";
import { Box, Typography } from "@mui/material";
import { MenuItem } from "react-pro-sidebar"
import { PageHeader, IconTextHeader, IconText } from "./About.Styles";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import BugReportIcon from '@mui/icons-material/BugReport';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';


const About = () => {
    return (

        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100vh"

        >
            <PageHeader>Awesome Features</PageHeader>
            <Box
                id="about"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    margin="3rem"
                >
                    <Box
                        justifyContent="flex-start"
                        display="flex"
                        pb="1rem"
                    >
                        <HelpOutlineIcon
                            sx={{
                                color: "#fd7f0f",
                                fontSize: 50,
                                pr: "1rem"
                            }}
                        />
                        <Box
                            display="flex"
                            flexDirection="column"

                        >
                            <IconTextHeader>Community Support</IconTextHeader>
                            <IconText>Providing a good locator app with relevant<br />
                                venues in a large geography is a tricky<br />
                                balancing act to pull off. FanFindr does it.
                            </IconText>
                        </Box>
                    </Box>

                    <Box
                        justifyContent="flex-start"
                        display="flex"
                        pb="1rem"
                    >
                        <SettingsIcon
                            sx={{
                                color: "#fd7f0f",
                                fontSize: 50,
                                pr: "1rem"
                            }}
                        />
                        <Box
                            display="flex"
                            flexDirection="column"

                        >
                            <IconTextHeader>Easy to use</IconTextHeader>
                            <IconText>Providing a good locator app with relevant<br />
                                venues in a large geography is a tricky<br />
                                balancing act to pull off. FanFindr does it.
                            </IconText>
                        </Box>
                    </Box>

                    <Box
                        justifyContent="flex-start"
                        display="flex"
                    >
                        <DesktopWindowsOutlinedIcon
                            sx={{
                                color: "#fd7f0f",
                                fontSize: 50,
                                pr: "1rem"
                            }}
                        />
                        <Box
                            display="flex"
                            flexDirection="column"

                        >
                            <IconTextHeader>Progressive Web App</IconTextHeader>
                            <IconText>Providing a good locator app with relevant<br />
                                venues in a large geography is a tricky<br />
                                balancing act to pull off. FanFindr does it.
                            </IconText>
                        </Box>
                    </Box>
                </Box>


                <Box>
                    <img src="/ff phone.PNG" />
                </Box>


                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-end"
                    margin="3rem"
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-end"
                    >
                        <Box
                            justifyContent="flex-end"
                            display="flex"
                            pb="1rem"
                        >
                            <Box
                                display="flex"
                                justifyContent="flex-end"
                                flexDirection="column"
                                alignItems="end"
                                textAlign="end"
                            >
                                <IconTextHeader>Creative Elements</IconTextHeader>
                                <IconText>
                                    Providing a good locator app with relevant<br />
                                    venues in a large geography is a tricky<br />
                                    balancing act to pull off. FanFindr does it.
                                </IconText>
                            </Box>
                            <LightbulbIcon
                                sx={{
                                    color: "#fd7f0f",
                                    fontSize: 50,
                                    pr: "1rem"
                                }}
                            />
                        </Box>

                        <Box
                            justifyContent="flex-end"
                            display="flex"
                            pb="1rem"
                        >

                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="end"
                                justifyContent="flex-end"
                                textAlign="end"
                            >
                                <IconTextHeader>Bug Free</IconTextHeader>
                                <IconText>
                                    Providing a good locator app with relevant<br />
                                    venues in a large geography is a tricky<br />
                                    balancing act to pull off. FanFindr does it.
                                </IconText>
                            </Box>
                            <BugReportIcon
                                sx={{
                                    color: "#fd7f0f",
                                    fontSize: 50,
                                    pr: "1rem"
                                }}
                            />
                        </Box>

                        <Box
                            justifyContent="flex-end"
                            display="flex"
                        >
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="end"
                                justifyContent="flex-end"
                                textAlign="end"
                            >
                                <IconTextHeader>Get Recognition</IconTextHeader>
                                <IconText>
                                    Providing a good locator app with relevant<br />
                                    venues in a large geography is a tricky<br />
                                    balancing act to pull off. FanFindr does it.
                                </IconText>
                            </Box>
                            <SupportAgentOutlinedIcon
                                sx={{
                                    color: "#fd7f0f",
                                    fontSize: 50,
                                    pr: "1rem"
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default About;