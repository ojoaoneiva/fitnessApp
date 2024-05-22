import React from 'react';
import { Typography, Box, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import x from '../assets/b.png';
import bimg1 from '../assets/t.png';
import bimg2 from '../assets/y.png';
import asvg from '../assets/health.svg';
import bsvg from '../assets/performance.svg';
import csvg from '../assets/sideeffects.svg';
import img1 from '../assets/CC_360x.jpg';
import img2 from '../assets/JC_360x.jpg';
import img3 from '../assets/AR_360x.jpg';
import img4 from '../assets/MR_360x.jpg';
import img5 from '../assets/JC_360x.jpg';

interface TrainerData {
  img: string;
  name: string;
}

const trainersList: TrainerData[] = [
  { img: img3, name: 'CAMILA NUTRITIONIST' },
  { img: img4, name: 'ANNA PILATES INSTRUCTOR' },
  { img: img5, name: 'JEREMY OUTDOOR TRAINING INSTRUCTOR' },
  { img: img1, name: 'COACH JOHN STRENGTH & CONDITIONING' },
  { img: img2, name: 'COACH PAUL STRENGTH & CONDITIONING' },
];

const Home: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#F7F5EE', color: '#222222', width: '100%', overflow: 'hidden', position: 'relative' }}>
      <Typography variant="h1" align="center" sx={{ fontSize: '13vw', fontWeight: 'bold', fontFamily: 'arial' }}>
      FITNESS APP
      </Typography>

      {/* Subtitle in horizontal loop */}
      <Box
        sx={{
          display: 'flex',
          width: '200%',
          whiteSpace: 'nowrap',
          animation: 'scroll 15s linear infinite',
        }}
      >
        <Box
          sx={{
            width: '50%',
            display: 'inline-block',
          }}
        >
          <Box>
            <Typography variant="h6" component="span" sx={{ fontSize: '1.5vw', display: 'inline-block', paddingRight: '1vw' }}>
            MOVIMENT STRENGTH & CONDITIONING
          </Typography>
          <Typography variant="h6" component="span" sx={{ fontSize: '1.5vw', display: 'inline-block', paddingRight: '1vw' }}>
            NUTRITION
          </Typography>
          <Typography variant="h6" component="span" sx={{ fontSize: '1.5vw', display: 'inline-block', paddingRight: '1vw' }}>
          CARDIO WORKOUT SESSIONS
          </Typography>
          <Typography variant="h6" component="span" sx={{ fontSize: '1.5vw', display: 'inline-block', paddingRight: '1vw' }}>
            FITNESS LIFESTYLE
          </Typography>
          <Typography variant="h6" component="span" sx={{ fontSize: '1.5vw', display: 'inline-block', paddingRight: '1vw' }}>
            GROUP TRAINING
          </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '50%',
            display: 'inline-block',
          }}
        >
          <Box>
            <Typography variant="h6" component="span" sx={{ fontSize: '1.5vw', display: 'inline-block', paddingRight: '1vw' }}>
            MOVIMENT STRENGTH & CONDITIONING
          </Typography>
          <Typography variant="h6" component="span" sx={{ fontSize: '1.5vw', display: 'inline-block', paddingRight: '1vw' }}>
            NUTRITION
          </Typography>
          <Typography variant="h6" component="span" sx={{ fontSize: '1.5vw', display: 'inline-block', paddingRight: '1vw' }}>
          CARDIO WORKOUT SESSIONS
          </Typography>
          <Typography variant="h6" component="span" sx={{ fontSize: '1.5vw', display: 'inline-block', paddingRight: '1vw' }}>
            FITNESS LIFESTYLE
          </Typography>
          <Typography variant="h6" component="span" sx={{ fontSize: '1.5vw', display: 'inline-block', paddingRight: '1vw' }}>
            GROUP TRAINING
          </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        component="img"
        src={x}
        alt="Fitness Banner"
        sx={{ width: '100%', height: 'auto', marginBottom: 2 }}
      />

      {/* 3 benefits of the business */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
        <Box sx={{ flexBasis: '30%', padding: '0 1rem' }}>
          <img src={asvg} alt="Icon 1" style={{ width: 60, height: 60, marginBottom: '0.5rem' }} />
          <Typography variant="h5" sx={{ textAlign: 'center' }}>
          Unlimited Access to Diverse Workouts
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
          With our online fitness platform, users gain unlimited access to a wide range of workouts tailored to their fitness goals. Whether it's strength training, yoga, or cardio, our platform offers something for everyone. This diverse selection ensures that users can always find a workout that suits their preferences and keeps them motivated to stay active.
          </Typography>
        </Box>
        <Box sx={{ flexBasis: '30%', padding: '0 1rem' }}>
          <img src={bsvg} alt="Icon 2" style={{ width: 60, height: 60, marginBottom: '0.5rem' }} />
          <Typography variant="h5" sx={{ textAlign: 'center' }}>
          Expert Guidance from Certified Trainers
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
          Our platform provides users with expert guidance from certified fitness trainers. Through instructional videos and personalized workout plans, users receive professional support to help them achieve their fitness goals safely and effectively. With access to expert advice at their fingertips, users can confidently navigate their fitness journey and make progress towards their desired results.
          </Typography>
        </Box>
        <Box sx={{ flexBasis: '30%', padding: '0 1rem' }}>
          <img src={csvg} alt="Icon 3" style={{ width: 60, height: 60, marginBottom: '0.5rem' }} />
          <Typography variant="h5" sx={{ textAlign: 'center' }}>
          Convenience and Flexibility
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
          One of the key advantages of our online fitness platform is its convenience and flexibility. Users can access workouts anytime, anywhere, allowing them to fit exercise into their busy schedules with ease. Whether it's early morning, during lunch breaks, or late at night, our platform is always available, ensuring that users can prioritize their fitness no matter how hectic their lifestyle may be. Plus, with the ability to choose the duration and intensity of their workouts, users have the flexibility to tailor their fitness routine to suit their individual needs and preferences.
          </Typography>
        </Box>
      </Box>

      {/* 2 images */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
        <Box component="img" src={bimg1} alt="Image 1" sx={{ width: '50%' }} />
        <Box component="img" src={bimg2} alt="Image 2" sx={{ width: '50%' }} />
      </Box>

      {/* List of personal trainers */}
      <List sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '3px', margin: 10, marginBottom: 40 }}>
        {trainersList.map((item, index) => (
          <ListItem key={index} sx={{ display: 'inline-block', width: 'auto', textAlign: 'center' }}>
            <ListItemAvatar>
              <Avatar variant="square" src={item.img} sx={{ width: '15vw', height: 'auto' }} />
            </ListItemAvatar>
            <ListItemText primary={item.name} sx={{ textAlign: 'left', width: '10vw' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Home;
