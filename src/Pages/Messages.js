import React from 'react';
import { Box } from '@mui/material';
import TopBar from '../Components/TopBar/TopBar';
import DashboardNavbar from '../Components/DashboardNavbar/DashboardNavbar';
import { Container, Content } from './Messages.Styles';

const Messages = () => {
    return (
        <Container>
            <DashboardNavbar />
            <Content>
                <Box mt="30px" mb="30px" mr="30px">
                    {/* Header */}
                    <Box >
                        <TopBar title="Messages" />
                    </Box>
                </Box>
            </Content>
        </Container>
    );
};

export default Messages;