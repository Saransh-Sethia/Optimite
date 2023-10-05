import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Header from '../Header/Header';
import { Typography } from '@mui/material';
import axios from 'axios';
import { config } from '../../App';
import { useParams } from 'react-router-dom';

export default function ProductCard(products) {

  const [property, setProperty] = useState(null);
  const {id} = useParams();

  const fetchProperty = async() => {
    try {
      const response = await axios.get(`${config.endpoint}/${id}`);
      const result = response.data.product;
      setProperty(result.find((item) => item.id === Number(id)))
    } catch(error) {
      setProperty(null);
      console.log('error', error)
    }

  };

  useEffect(() => {
    fetchProperty();
  }, [products]);
  return (
    <>
    <Header />
    {
      property ? (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <img 
            src={products.image}
            alt='product'/>
          </Grid>
          <Grid item xs={6}>
          <Typography variant='h3'>{products.title}</Typography>
          <Typography variant='h3'>{products.description}</Typography>
          <Typography variant='h3'>{products.price} { " | " } {products.category}</Typography>
          {/* <Typography variant='h3'>{products.rating.rate} { " | " } {products.rating.count} </Typography> */}
          
          </Grid>
        </Grid>
      </Box>
      ) : (
        <div>Details unavailable at the moment.</div>
      )
    }

    </>
  );
}
