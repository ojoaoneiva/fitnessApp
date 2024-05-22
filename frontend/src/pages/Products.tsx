import React from 'react';
import { Box, Typography, Grid, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';

interface Module {
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

const modules: Module[] = [
  {
    title: 'Module 1',
    subtitle: 'Subtitle 1',
    image: '../assets/qq.png',
    link: '/module1',
  },
  {
    title: 'Module 2',
    subtitle: 'Subtitle 2',
    image: '../assets/qq.png',
    link: '/module2',
  },
  {
    title: 'Module 3',
    subtitle: 'Subtitle 3',
    image: '../assets/qq.png',
    link: '/module3',
  },
  {
    title: 'Module 4',
    subtitle: 'Subtitle 4',
    image: '../assets/qq.png',
    link: '/module4',
  },
  {
    title: 'Module 5',
    subtitle: 'Subtitle 5',
    image: '../assets/qq.png',
    link: '/module5',
  },
  {
    title: 'Module 6',
    subtitle: 'Subtitle 6',
    image: '../assets/qq.png',
    link: '/module6',
  },
];

const Products: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#F7F5EE', color: '#222222', paddingX: 30, paddingY: 5}}>
      <Typography variant="h4" gutterBottom>
        Workout Sections
      </Typography>
      <Typography>
        Here are our sections for all your work out needs.
      </Typography>
      <Grid container spacing={3} marginTop={2}>
        {modules.map((module, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea component="a" href={module.link}>
                <CardMedia
                  component="img"
                  height="200"
                  image={module.image}
                  alt={module.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {module.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {module.subtitle}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;