import * as React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Avatar,
  Container,
  Typography,
  Paper,
} from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Link } from 'react-router-dom';

export default function HRMNavBar() {
  const [isClockedIn, setIsClockedIn] = React.useState(false);
  const [clockInTime, setClockInTime] = React.useState(null);
  const [elapsedTime, setElapsedTime] = React.useState(0);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const handleClockToggle = () => {
    if (isClockedIn) {
      setIsClockedIn(false);
      setClockInTime(null);
      setElapsedTime(0);
    } else {
      setIsClockedIn(true);
      setClockInTime(Date.now());
    }
  };

  React.useEffect(() => {
    let timer;
    if (isClockedIn) {
      timer = setInterval(() => {
        const seconds = Math.floor((Date.now() - clockInTime) / 1000);
        setElapsedTime(seconds);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isClockedIn, clockInTime]);

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: '1px solid #ccc', backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255,255,255,0.8)' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
         
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton edge="start" color="inherit" sx={{ mr: 1, display: { md: 'none' } }}>
              <MenuIcon />
            </IconButton>
            <Box
              component={Link}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <Box
                component="img"
                src="/public/Dream.jpeg"
                alt="Garudalytics"
                sx={{ height: 32, mr: 1 }}
              />
              <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                DREAM BIG
              </Typography>
            </Box>
          </Box>

          
          <Box sx={{ display: 'flex', gap: 2, flexGrow: 1, justifyContent: 'center' }}>
            <Button
              variant="contained"
              component={Link}
              to="/announcements"
              sx={{ bgcolor: '#28a745', '&:hover': { bgcolor: '#218838' } }}
            >
              Announcements
            </Button>

            <Box sx={{ position: 'relative' }}>
              <Button
                variant="contained"
                onClick={handleClockToggle}
                startIcon={<AccessAlarmIcon />}
                sx={{ bgcolor: '#28a745', '&:hover': { bgcolor: '#218838' } }}
              >
                {isClockedIn ? 'Clock Out' : 'Clock In'}
              </Button>
              {isClockedIn && (
                <Paper
                  elevation={3}
                  sx={{
                    position: 'absolute',
                    top: '110%',
                    left: 0,
                    mt: 1,
                    px: 2,
                    py: 1,
                    backgroundColor: '#f9f9f9',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    zIndex: 1,
                  }}
                >
                  <Typography variant="body2">StartTime: {formatTime(elapsedTime)}</Typography>
                </Paper>
              )}
            </Box>

            <Button
              variant="contained"
              component={Link}
              to="/client-visit"
              sx={{ bgcolor: '#ff7f00', '&:hover': { bgcolor: '#e67000' } }}
            >
              Client Visit
            </Button>
          </Box>

         
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton color="inherit">
              <NotificationsNoneIcon />
            </IconButton>
            <IconButton color="inherit">
              <Avatar alt="User Name" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
