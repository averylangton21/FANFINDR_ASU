//Components
import React from 'react'
import { Box } from '@mui/material';
import { Content, Container } from './Dashboard.Styles'
import DashboardNavbar from '../Components/DashboardNavbar/DashboardNavbar';
import TopBar from '../Components/TopBar/TopBar';
import DashboardSportingEvents from '../Components/DashboardSportingEvents/DashboardSportingEvents';


const Dashboard = () => {

  return (
    <Container>
      <DashboardNavbar />
      <Content>
        <Box mt="30px" mb="30px" mr="30px">
          {/* Header */}
          <Box >
            <TopBar title="Dashboard" />
          </Box>
        </Box>
        {/* Grid */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(10, 1fr)"
          gridTemplateRows="repeat(auto-fill 6, 1fr)"
          gap="30px"
          paddingLeft="30px"
        >
          <Box
            gridColumn="1 / 6"
            gridRow="1 / 7"
            backgroundColor="white"
            borderRadius="20px"
          >
            <DashboardSportingEvents />
          </Box>
          <Box
            mr="30px"
            borderRadius="20px"
            backgroundColor="white"
            gridColumn="6 / 11"
            gridRow="1 / 4"
          >

          </Box>
          <Box
            mr="30px"
            borderRadius="20px"
            backgroundColor="white"
            gridColumn="6 / 11"
            gridRow="4 / 7"
          >

          </Box>
        </Box>
      </Content>
    </Container >
  )
}

export default Dashboard;