import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { mockedUsers } from '../mockedData/usersData';
import { UserProfile } from '../types/TUser';

const ProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    const foundUser = mockedUsers.find(u => u.id === id);
    setUser(foundUser || null);
  }, [id]);

  const handleLogout = () => {
    localStorage.removeItem('UserId');
    window.location.href = '/';
  };

  return (
    <Box style={{ padding: '20px', backgroundColor: '#F7F5EE'}}>
      {user ? (
        <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
          <Grid item xs={12} md={3}>
            <Card>
              <CardHeader
                avatar={<Avatar src={user.profilePhoto} />}
                title={user.name}
                subheader={user.bio}
              />
              <CardMedia
                component="img"
                height="194"
                image={user.profilePhoto}
                alt={user.name}
              />
              <CardContent>
                <Typography variant="body1" component="div">
                  <List>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <Typography variant="body1">Email</Typography>
                      </ListItemIcon>
                      <ListItemText primary={user.email} />
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <Typography variant="body1">Gender</Typography>
                      </ListItemIcon>
                      <ListItemText primary={user.gender} />
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <Typography variant="body1">Weight</Typography>
                      </ListItemIcon>
                      <ListItemText primary={user.weight} />
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <Typography variant="body1">Height</Typography>
                      </ListItemIcon>
                      <ListItemText primary={user.height} />
                    </ListItem>
                    <Divider />
                  </List>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={handleLogout}>Logout</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 5 }}>Additional Information:</Typography>
            <Typography variant="body1">Training goal: {user.goal}</Typography>
            <Typography variant="body1">Days per week you will train: {user.daysPerWeek}</Typography>
            <Typography variant="body1">Last regular exercise: {user.lastExerciseRegularly}</Typography>
            <Typography variant="body1">Has disease: {user.hasDisease ? 'Sim' : 'Não'}</Typography>
            {user.hasDisease && (
              <Typography variant="body1">Diseases: {user.diseases}</Typography>
            )}
          </Grid>
        </Grid>
      ) : (
        <Typography variant="body1">User not found</Typography>
      )}
    </Box>
  );
};

export default ProfilePage;