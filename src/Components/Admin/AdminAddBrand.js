import React from 'react'
import { Row, Col, Spinner } from 'react-bootstrap'
// import avatar from '../../images/avatar.png'
import { useCreateBrand } from '../../hook/brands/useCreateBrand'
import { ToastContainer } from 'react-toastify'

const AdminAddBrand = () => {
  const [isLoading, isPress, name, changeImage, changeName, handleSubmit, img] = useCreateBrand();

  return (
    <div>
      <ToastContainer/>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضف ماركه جديده</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره الماركه</div>
          <div>
            <label htmlFor='upload-file'>
              <img src={img} alt="category image" height="100px" width="120px" style={{ cursor: 'pointer' }} />
            </label>
            <input type="file" name='image' onChange={changeImage} id="upload-file" />
          </div>
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم الماركه"
            value={name}
            onChange={changeName}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
        </Col>
      </Row>
      {isPress ? isLoading ? (<Spinner variant="primary" animation='border' />) : <h4>تم الانتهاء</h4> : null}
    </div>
  )
}

export default AdminAddBrand
