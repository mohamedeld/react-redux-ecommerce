import React from 'react'
import { Row, Spinner } from 'react-bootstrap'
import useSlider from '../../hook/search/useSlider'

const SideFilter = () => {
  const [categories,brands,handleCategory,handleBrand] = useSlider();
 
  return (
    <div className="mt-3">
      <Row>
        <div className="d-flex flex-column mt-2">
          <div className="filter-title">الفئة</div>
          <div className="d-flex mt-3">
            <input type="checkbox" value="0" />
            <div className="filter-sub me-2 ">الكل</div>
          </div>
          {
            categories ? categories.map(cat => {
              return (
                <div className="d-flex mt-2" key={cat._id}>
                <input type="checkbox" onChange={handleCategory} value={cat._id} />
                <div className="filter-sub me-2 ">{cat.name}</div>
              </div>
              )
            }) : <Spinner animation='border' variant='primary' />
          }
        </div>

        <div className="d-flex flex-column mt-2">
          <div className="filter-title mt-3">الماركة</div>
          <div className="d-flex mt-3">
            <input type="checkbox" value="0" />
            <div className="filter-sub me-2 ">الكل</div>
          </div>
          {
            brands ? brands.map(brad => {
              return (
                <div className="d-flex mt-2" key={brad._id}>
                <input type="checkbox" onChange={handleBrand} value={brad._id} />
                <div className="filter-sub me-2 ">{brad.name}</div>
              </div>
              )
            }) : <Spinner animation='border' variant='primary' />
          }
        </div>

        <div className="filter-title my-3">السعر</div>
        <div className="d-flex">
          <p className="filter-sub my-2">من:</p>
          <input
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
        <div className="d-flex">
          <p className="filter-sub my-2">الي:</p>
          <input
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
      </Row>
    </div>
  )
}

export default SideFilter
