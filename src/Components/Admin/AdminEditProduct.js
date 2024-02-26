import React from 'react'
import MultiImageInput from 'react-multiple-image-input';
import { Row, Col, Spinner } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import avatar from '../../images/avatar.png'
import add from '../../images/add.png'
import { useCreateProduct } from '../../hook/product/useCreateProduct';
import { CompactPicker } from 'react-color';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useEditProduct } from '../../hook/product/useEditProduct';

export default function AdminEditProduct() {
  const {id} = useParams();

  const [images,setImages,name,handleName,description,handleDescription,priceBefore,handlePriceBefore,priceAfter,handlePriceAfter,category,handleCategory,brand,handleBrand,colors,handleColors,quantity,handleQuantity,allCats,allBrand,isActive,handleIsActive,removeColors,options,onSelect,onRemove,handleSubmit,isLoading] = useEditProduct(id);
  const crop = {
    unit: '%',
    aspect: 4 / 3,
    width: '100'
  };
  return (
    <div>
    <ToastContainer/>
      <Row className="justify-content-start ">
          <div className="admin-content-text pb-4"> تعديل منتج </div>
          <Col sm="8">
              <div className="text-form pb-2"> صور للمنتج</div>
              <MultiImageInput
                images={images}
                setImages={setImages}
                theme="light"
                allowCrop={true}
                max={5}
                cropConfig={{ crop, ruleOfThirds: true }}
              />
              <input
              name="name"
              
                  type="text"
                  className="input-form d-block mt-3 px-3"
                  placeholder="اسم المنتج"
                  value={name}
              onChange={handleName}
              />
              <textarea
                  className="input-form-area p-2 mt-3"
                  rows="4"
                  cols="50"
                  placeholder="وصف المنتج"
                  value={description}
                  onChange={handleDescription}
              />
              <input
                  type="number"
                  className="input-form d-block mt-3 px-3"
                  placeholder="الكمية "
                  value={quantity}
                  onChange={handleQuantity}
              />
              <input
                  type="number"
                  className="input-form d-block mt-3 px-3"
                  placeholder="السعر قبل الخصم"
                  value={priceBefore}
                  onChange={handlePriceBefore}
              />
              <input
                  type="number"
                  className="input-form d-block mt-3 px-3"
                  placeholder="سعر المنتج"
                  value={priceAfter}
                  onChange={handlePriceAfter}
              />
              <select
                  name="languages"
                  id="lang"
                  onChange={handleCategory}
                  value={category}
                  className="select input-form-area mt-3 px-2 ">
                  <option value="0">التصنيف الرئيسي</option>
                  {
                    allCats && allCats.data ? allCats.data.data.map(cat=>{
                      return (
                          <option key={cat._id} value={cat._id}>{cat.name}</option>
                      )
                    }) : <Spinner variant="primary" animation="border"/>
                  }
                  
                  
              </select>

              <Multiselect
                  className="mt-2 text-end"
                  placeholder="التصنيف الفرعي"
                  options={options}
                  onSelect={onSelect}
                  onRemove={onRemove}
                  displayValue="name"
                  style={{ color: "red" }}
              />
              <select
                  name="brand"
                  id="brand"
                  value={brand}
                  onChange={handleBrand}
                  className="select input-form-area mt-3 px-2 ">
                  <option value="0">الماركة</option>
                  {
                    allBrand && allBrand.data ? allBrand.data.data.map(brand=>{
                      return (
                          <option key={brand._id} value={brand._id}>{brand.name}</option>
                      )
                    }) : <Spinner variant="primary" animation="border"/>
                  }
              </select>
              <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
              <div className="mt-1 d-flex">
               
                  {colors && colors.length > 0 ? colors.map((color,index)=>{
                    return (
                      <div
                      key={index}
                      onClick={()=> removeColors(color)}
                      className="color ms-2 border  mt-1"
                      style={{ backgroundColor: `${color}` }}></div>
                    )
                  }) :null}
                  
                  <img src={add} alt="" width="30px" height="35px" className="" style={{cursor:'pointer'}} onClick={handleIsActive} />
                 {isActive? <CompactPicker onChangeComplete={handleColors}/> : null}
              </div>
          </Col>
      </Row>
      <Row>
          <Col sm="8" className="d-flex justify-content-end ">
              <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
          </Col>
      </Row>
      
  </div>
  )
}
