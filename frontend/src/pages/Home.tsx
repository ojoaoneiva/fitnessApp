import React, { useState, useEffect } from 'react';
import { Typography, Box, Stack, ToggleButton, Zoom, ToggleButtonGroup, List, ListItem, ListItemText, ListItemAvatar, Avatar, LinearProgress, Fade } from '@mui/material';
import x from '../assets/3.jpg';
import bimg1 from '../assets/4.jpg';
import bimg2 from '../assets/9.jpg';
import SubtitleLoop from '../components/SubtitleLoop';
import { benefits } from '../mockedData/benefitsData';
import { trainersList } from '../mockedData/trainersListData';

const Home: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedView, setSelectedView] = useState('svg0');

  const handleViewChange = (event: React.MouseEvent<HTMLElement>, newView: string | null) => {
    setSelectedView(newView || 'svg0');
  };

  useEffect(() => {
    const images = [x, bimg1, bimg2];
    let loadedImages = 0;

    images.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImages += 1;
        setProgress((loadedImages / images.length) * 100);
        if (loadedImages === images.length) {
          setTimeout(() => setLoading(false), 1000);
        }
      };
    });
  }, []);


  if (loading) {
    return (
      <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#EBEAE2', position: 'fixed', top: 0 }}>
        {/* Loading page */}
        <Fade in={loading} timeout={1000}>
          <Typography variant="h1" align="center" sx={{ fontSize: '5vw', fontWeight: 'bold', fontFamily: 'Arial', marginBottom: 2, color: '#222222' }}>
            FITNESS APP
          </Typography>
        </Fade>
        <Box sx={{ width: '80%', marginBottom: 2 }}>
          <LinearProgress variant="determinate" value={progress} sx={{ width: '30%', margin: 'auto', backgroundColor: '#EBEAE2', '& .MuiLinearProgress-bar': { backgroundColor: '#222222' } }} />
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: '#F7F5EE', color: '#222222', width: '100%', overflow: 'hidden', position: 'relative' }}>
      <Typography variant="h1" align="center" sx={{ fontSize: '15vw', fontWeight: 'bold', fontFamily: 'Arial' }}>
        FITNESS APP
      </Typography>
      <SubtitleLoop />

      <Box component="img" src={x} alt="Fitness Banner" sx={{ height: { xs: '60vh', sm: '100vh' }, width: '100%', objectFit: 'cover', marginBottom: 2 }} />

      {/* Benefits buttons */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'center', sm: 'flex-start' }, justifyContent: 'center', height: { xs: '30vw', sm: 'auto' }, margin: 'auto', marginY: { xs: 25, sm: '10%' }, width: { xs: '90%', sm: '70%' }, gap: { xs: 5, sm: 10 } }}>
        <Stack sx={{ width: 'fit-content' }}>
          <ToggleButtonGroup orientation="vertical" value={selectedView} exclusive onChange={handleViewChange}>
            {benefits.map((benefit, index) => (
              <ToggleButton key={index} value={`svg${index}`} aria-label={`svg${index}`}>
                <Typography sx={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: { xs: 20, sm: '2.5vw' } }}>{benefit.buttonTittle}</Typography>
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Stack>

        {/* selected benefit */}
        <Box sx={{ display: 'flex', width: { xs: '90%', sm: '60%' } }}>
          {benefits.map((benefit, index) => (
            <Box key={index} sx={{ display: selectedView === `svg${index}` ? 'flex' : 'none', gap: 5 }}>
              <Zoom in={selectedView === `svg${index}`}>
                <Box component="img" src={benefit.icon} alt={`Image ${index}`} sx={{ width: '15%' }} />
              </Zoom>
              <Zoom in={selectedView === `svg${index}`} style={{ transitionDelay: selectedView === `svg${index}` ? '100ms' : '0ms' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: 80 }}>
                  <Typography variant="h5" sx={{ textAlign: 'left', fontSize: { xs: 15, sm: '2vw' }, fontFamily: 'Arial Black' }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'left', fontSize: { xs: 13, sm: '1.5vw' } }}>
                    {benefit.text}
                  </Typography>
                </Box>
              </Zoom>
            </Box>
          ))}
        </Box>
      </Box>

      {/* 2 images */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: { xs: 5, sm: 20 } }}>
        <Box component="img" src={bimg1} alt="Image 1" sx={{ width: { xs: '100%', sm: '50%' } }} />
        <Box component="img" src={bimg2} alt="Image 2" sx={{ width: { xs: 0, sm: '50%' } }} />
      </Box>

      {/* STAFF LIST */}
      <Typography variant="h4" sx={{ display: 'flex', justifyContent: 'center', fontSize: { xs: 20, sm: '3vw' }, fontFamily: 'Arial Black', marginBottom: 5 }}>
        OUR STAFF
      </Typography>
      <List sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, marginBottom: 30 }}>
        {trainersList.map((item, index) => (
          <ListItem key={index} sx={{ display: 'inline-block', width: { xs: '50%', sm: '15%' }, textAlign: 'center' }}>
            <ListItemAvatar>
              <Avatar variant="square" src={item.img} sx={{ width: { xs: '40vw', sm: '11vw' }, height: 'auto' }} />
            </ListItemAvatar>
            <ListItemText primary={item.name} sx={{ textAlign: 'left', fontSize: { xs: '2vw', sm: '1.5vw' }, width: { xs: '100%', sm: '10%' } }} />
          </ListItem>
        ))}
      </List>
      <SubtitleLoop color="#EBEAE2" />
    </Box>
  );
};

export default Home;