import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import BidDisplay from '../Components/BidDisplay/BidDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';



const Product = () => {
<<<<<<< HEAD
  const { all_product } = useContext(ShopContext);
const { productId } = useParams();
console.log("Product ID:", productId);

const product = all_product.find((e) => e.item_id === Number(productId));

  

  return (
    <div>
        {/* <Breadcrum product={product} /> */}
        {/* <BidDisplay product={product} /> */}
        <BidDisplay product={product} />
        <DescriptionBox product={product}/>
        <RelatedProducts/>
      <h1>product is is {productId}</h1>

=======
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=> e.id===Number(productId));

  return (
    <div>
        <Breadcrum product={product} />
        {/* <BidDisplay product={product} /> */}
        <BidDisplay product={product} />
        <DescriptionBox/>
        <RelatedProducts/>
>>>>>>> df301b6ebce1d287843a987bb82c9cb5efecb687
    </div>
  )
}

export default Product