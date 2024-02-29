import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mobile from '../../images/mobile.png'
import LeftButton from './LeftButton';
import RightButton from './RightButton';
import { resolvePath, useParams } from 'react-router-dom';
import useGetSpecificProduct from '../../hook/product/useGetSpecificProduct';
const ProductGallery = () => {
  const {id} = useParams();
  const [item,cat,brand,productsLike,loading] = useGetSpecificProduct(id);
  let images =[];
  if(loading === false && item  ){
    images = item.images.map((img)=>({original:img}));
  }else{
    images = [{original:`${mobile}`}]
  }

    return (
        <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2">
            <ImageGallery items={images}
                defaultImage={mobile}
                showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}
            />
        </div>
    )
}

export default ProductGallery
