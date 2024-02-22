import React from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';

import { useCreateCategory } from '../../hook/category/useCreateCategory'
const AdminAddCategory = () => {
  const [img,name,changeImage,changeName,handleSubmit,isPress,isLoading] = useCreateCategory();
    return (
        <div>
          <ToastContainer/>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
                <Col sm="8">
                    <div className="text-form pb-2">صوره التصنيف</div>
                    <div>
                      <label htmlFor='upload-file'>
                        <img src={img} alt="category image" height="100px" width="120px" style={{cursor:'pointer'}}/>
                      </label>
                      <input type="file" name='image' onChange={changeImage} id="upload-file" />
                    </div>
                    <input
                        type="text"
                        name='name'
                        value={name}
                        onChange={changeName}
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
            {
              isPress ? isLoading ? (<Spinner variant='primary' animation='border' />) :<h4>تم الانتهاء</h4> : null
            }
        </div>
    )
}

export default AdminAddCategory
