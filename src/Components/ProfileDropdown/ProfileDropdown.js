import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import zIndex from "@mui/material/styles/zIndex";

const Item = ({ title, to, icon, selected, setSelected }) => {
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: "black",
                listStyle: 'none'

            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

const ProfileDropDown = () => {

    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
            sx={{
                background: "white",
                borderRadius: "10px",
                zIndex: 'tooltip'
            }}
        >
            <Box display="flex" justifyContent="center" flexDirection="column">
                <Item
                    title="Edit Profile"
                    to="/profile"
                    icon={<PersonIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="Settings"
                    to="/settings"
                    icon={<SettingsIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="Help & Support"
                    to="/profile"
                    icon={<HelpIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="Logout"
                    to="/profile"
                    icon={<LogoutIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
            </Box>
        </Box>
    );
};

export default ProfileDropDown;