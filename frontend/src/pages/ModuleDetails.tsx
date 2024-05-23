import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Typography, Grid, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import{modules} from '../mockedData/productsData';

const ModuleDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const module = modules.find((m) => m.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!module) {
    return <Typography>Module not found</Typography>;
  }

  return (
    <Box sx={{ backgroundColor: '#F7F5EE', color: '#222222', paddingBottom: 10 }}>
      <Grid container spacing={3} marginBottom={10} sx={{ backgroundColor: '#EBEAE2', paddingX: { xs: 2, md: 30 }, paddingY: 5 }}>
        <Grid item xs={12} md={6}>
          <img src={module.image} alt={module.title} style={{ width: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            {module.title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {module.subtitle}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {module.description}
          </Typography>
        </Grid>
      </Grid>
      
      <Typography variant="h5" marginTop={4} marginX={{ xs: 2, md: 30 }}>
        More Modules
      </Typography>
      <Grid container spacing={3} marginTop={2} marginBottom={10} paddingX={{ xs: 2, md: 30 }}>
        {modules.map((mod, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea component={Link} to={`/module/${mod.id}`}>
                <CardMedia
                  component="img"
                  height="200"
                  image={mod.image}
                  alt={mod.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {mod.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {mod.subtitle}
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

export default ModuleDetails;