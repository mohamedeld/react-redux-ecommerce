import React, { useEffect } from 'react'
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import NavBarLogin from '../../Components/Uitily/NavBarLogin';
import Silder from './../../Components/Home/Silder';
import DiscountSection from './../../Components/Home/DiscountSection';
import BrandFeatured from '../../Components/Brand/BrandFeatured';
import Footer from '../../Components/Uitily/Footer';
import { useGetProduct } from '../../hook/product/useGetProduct';
const HomePage = () => {
  const [response,pageCount,getPage,isLoading,handleProd ] = useGetProduct();
 
  return (
        <div className='font' style={{ minHeight: '670px' }}>

            <Silder />
            <HomeCategory />
            <CardProductsContainer title="الاكثر مبيعا" btntitle="المزيد" pathText="/products" response = {response} isLoading={isLoading}/>
            <DiscountSection />
            <CardProductsContainer title="احدث الازياء" btntitle="المزيد" pathText="/products" response = {response} isLoading={isLoading}/>
            <BrandFeatured title="اشهر الماركات" btntitle="المزيد"  />

        </div>
    )
}

export default HomePage
