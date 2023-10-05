import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import {config} from '../../App.js';
import Products from '../Products/Products';
import Header from '../Header/Header';
import {useParams, useNavigate} from 'react-router-dom';

const Home = () => {

    const [products, setProducts] = useState([]);
    const [sortBy, setSortBy] = useState("");
    const [isUploadFormVisible, setIsUploadFormVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();

    const performApi = async() => {
      try {
        const response = await axios.get(config.endpoint);
        // console.log('response', response)
        const result = response.data;
        // console.log(result);
        setProducts(result); 
      } catch(e){
       console.log(e);
      }
    };

    const performProductApi = async(id) => {
      try{
    const response = await axios.get(`${config.endpoint}/${id}`);
    const result = response.data;
    setProducts(result);
      } catch(e) {
        console.log(e);
      }
    }

    const handleSortByChange = (e) => {
      console.log(e.target.value);
      setSortBy(e.target.value);
    };

    const handleNavigate = (id) => {
      navigate(`${id}`);
    };

    const handleAdd = () => {
      setIsUploadFormVisible(true);
      setOpen(true);
    };

    const handleCancel = () => {
      setIsUploadFormVisible(false);
      setOpen(false);
    }

    useEffect(() => {
        performApi();
        performProductApi(`${id}`);
    },[]);

  return (
    <div className='home'>
    <Header 
    sortBy={sortBy} 
    handleSortByChange={handleSortByChange} 
    products={products}
    handleAdd={handleAdd}
    handleCancel={handleCancel}
    performApi={performApi}
    isUploadFormVisible={isUploadFormVisible}
    open={open}
    onPage="home"
     />
     <h2 className='heading'>Featured Listings:</h2>
    <Products 
    products={products} 
    setProducts={setProducts} 
    sortBy={sortBy} 
    handleNavigate={handleNavigate} 
    />
    </div>
  )
}

export default Home
