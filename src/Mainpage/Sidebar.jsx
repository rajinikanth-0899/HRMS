import React from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import DescriptionIcon from '@mui/icons-material/Description';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import EventIcon from '@mui/icons-material/Event';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import PunchClockIcon from '@mui/icons-material/PunchClock';
import PolicyIcon from '@mui/icons-material/Policy';
import PictureInPictureIcon from '@mui/icons-material/PictureInPicture';

const drawerWidth = 240;

const menuItems = [
  { text: 'Dashboard', path: '/', icon: <DashboardIcon /> },
  { text: 'Employees', path: '/employee', icon: <PeopleIcon /> },
  { text: 'Skills & Certifications', path: '/skills', icon: <ArticleIcon /> },
  { text: 'Leaves', path: '/leaves', icon: <DescriptionIcon /> },
  { text: 'Salary', path: '/salary', icon: <AttachMoneyIcon /> },
  { text: 'Checkins', path: '/checkins', icon: <CheckBoxIcon /> },
  { text: 'Events', path: '/events', icon: <EventIcon /> },
  { text: 'Projects', path: '/project', icon: <AttachFileIcon /> },
  { text: 'Timesheet', path: '/timesheet', icon: <PunchClockIcon /> },
  { text: 'Policies', path: '/policies', icon: <PolicyIcon /> },
  { text: 'Reimbursement', path: '/reimbursement', icon: <PictureInPictureIcon /> },
];

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          top: 65, 
          height: 'calc(100% - 64px)',
        },
      }}
    >
      <List>
        {menuItems.map(({ text, path, icon }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={NavLink}
              to={path}
              sx={({ isActive }) => ({
                '&.active': {
                  backgroundColor: 'rgba(0, 0, 0, 0.08)',
                },
              })}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
