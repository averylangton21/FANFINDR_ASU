//Components
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box } from '@mui/material';
import "react-pro-sidebar/dist/css/styles.css";
import './DashboardNavbar.css';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

//Icons
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import MessageIcon from '@mui/icons-material/Message';
import RateReviewIcon from '@mui/icons-material/RateReview';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';



const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      style={{
        color: "white",
        fontSize: "20px",
        fontWeight: "bold"
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <label className='item-label'>{title}</label>
      <Link to={to} />
    </MenuItem>
  );
};

const DashboardNavbar = () => {

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await Auth.signOut(); // Call the Auth.signOut method
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <Box className='sidebar'
      sx={{
        "& .pro-inner-item:hover": {
          color: "#fd7f0f !important",
        }
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu>

          {isCollapsed && (
            <div className='top-section-no-header'>
              <button className="btn" onClick={() => setIsCollapsed(!isCollapsed)}><i className='arrow'><KeyboardArrowRightOutlinedIcon /></i></button>
            </div>
          )}

          {!isCollapsed && (
            <div className='top-section-with-header'>
              <img
                className='headerLogo'
                src='./fanfindrwhite.png'
              />
              <button className="btn" onClick={() => setIsCollapsed(!isCollapsed)}><i className='arrow'><KeyboardArrowLeftOutlinedIcon /></i></button>
            </div>
          )}

          <div className='menuitemssection'>
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<DashboardOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Schedule Post"
              to="/schedulepost"
              icon={<CalendarMonthOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Sporting Events"
              to="/sportingevents"
              icon={<EmojiEventsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Messages"
              to="/messages"
              icon={<MessageIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Reviews"
              to="/reviews"
              icon={<RateReviewIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Analytics"
              to="/analytics"
              icon={<BarChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
          <div className='logout-section'>
            <MenuItem
              icon={<LogoutIcon />}
              onClick={handleLogout}
            >
              Logout
            </MenuItem>
          </div>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default DashboardNavbar;