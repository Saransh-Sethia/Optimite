import './App.css';
import {Routes, Route, useParams} from 'react-router-dom';
import Home from './components/Home/Home';
import ProductDetailPage from './components/ProductDetailPage/ProductDetailPage';

export  const config = {
  endpoint: "https://fakestoreapi.com/products",
}

function App() {

  const {id} = useParams()

  return (
    <>
<Routes>
  <Route path='/' element={<Home />}></Route>
  <Route path={`/:${id}`} element={<ProductDetailPage />}></Route>
</Routes>
    </>
  );
}

export default App;
