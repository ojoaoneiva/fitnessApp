import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Card, CardActionArea, CardContent, CardMedia, Grow, Skeleton } from '@mui/material';
import{modules} from '../mockedData/productsData';

const Products: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = modules.map((module) => {
      const img = new Image();
      img.src = module.image;
      return img;
    });
    let loadedCount = 0;

    const checkAllImagesLoaded = () => {
      loadedCount++;
      if (loadedCount === modules.length) {
        setLoading(false);
      }};
    images.forEach((img) => {
      img.onload = checkAllImagesLoaded;
    });
    return () => {
      images.forEach((img) => {
        img.onload = null;
      });
    };
  }, []);

  return (
    <Box>
      <Box sx={{ paddingX: { xs: 2, md: '30%' }, textAlign: 'center', paddingY: 10, backgroundColor: '#EBEAE2' }}>
        <Typography variant="h4" gutterBottom>
          Workout Sections
        </Typography>
        <Typography>
          Welcome to our comprehensive selection of workout sections tailored to meet your diverse fitness needs. Whether you're an experienced athlete or just beginning your fitness journey, we've curated a range of modules designed to elevate your performance, enhance your well-being, and support your fitness goals.
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: '#F7F5EE', color: '#222222', paddingX: { xs: 2, md: 30 }, paddingY: 5 }}>
        <Grid container spacing={3} marginTop={2}>
          {loading ? (
            Array.from(new Array(6)).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardActionArea>
                    <Skeleton variant="rectangular" height={200} />
                    <CardContent>
                      <Skeleton variant="text" height={30} width="80%" />
                      <Skeleton variant="text" height={20} width="60%" />
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          ) : (
            modules.map((module, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Grow in={!loading} timeout={500 * index}>
                  <Card>
                    <CardActionArea component={Link} to={`/module/${module.id}`}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={module.image}
                        alt={module.title}
                        onLoad={() => setLoading(false)}
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
                </Grow>
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Products;