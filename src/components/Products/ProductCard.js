import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
// import {Link} from 'react-router-dom';

export default function ProductCard({product, setProducts, handleDelete, handleNavigate}) {


  return (
    <Card sx={{ maxWidth: 345, height:500 }}>
      {/* <Link to='detalis/:id'>{<ProductDetailPage />}</Link> */}
      <CardActionArea onClick={()=>handleNavigate(product.id)} >
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt="product card"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
         ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button onClick={()=>handleDelete(product.id)}>Delete</Button>
    </Card>
  );
}