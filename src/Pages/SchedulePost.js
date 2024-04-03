//Components
import React from 'react';
import { Box } from '@mui/material';
import TopBar from '../Components/TopBar/TopBar';
import DashboardNavbar from '../Components/DashboardNavbar/DashboardNavbar';
import { Container, Content } from './ScheudulePost.Styles';
import CreatePost from '../Components/CreatePost/CreatePost';
import PreviewPost from '../Components/PreviewPost/PreviewPost';

const SchedulePost = () => {
    return (
        <Container>
            <DashboardNavbar />
            <Content>
                <Box mt="30px" mb="30px" mr="30px">
                    {/* Header */}
                    <Box >
                        <TopBar title="Schedule Post" />
                    </Box>
                </Box>
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(10, 1fr)"
                    gridTemplateRows="repeat(auto-fill 6, 1fr)"
                    gap="30px"
                    paddingLeft="30px"
                >
                    <Box
                        gridColumn="1 / 11"
                        gridRow="1 / 4"
                        borderRadius="20px"
                        marginRight="30px"
                    >
                        <h1
                            style={{
                                fontSize: "20px",
                                color: 'white',
                            }}
                        >
                            New Post
                        </h1>
                    </Box>
                    <Box
                        gridColumn="1 / 7"
                        gridRow="4 / 29"
                        backgroundColor="#efeeee"
                        borderRadius="20px"
                    >
                        <CreatePost />
                    </Box>
                    <Box
                        gridColumn="7 / 11"
                        gridRow="4 / 29"
                        backgroundColor="#888788"
                        borderRadius="20px"
                        marginRight="30px"
                    >
                        <PreviewPost />
                    </Box>
                </Box>
            </Content>
        </Container>
    );
};

export default SchedulePost;