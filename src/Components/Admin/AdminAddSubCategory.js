import React from 'react'
import { Row, Col,Spinner } from 'react-bootstrap'
import useCreateSubByCat from '../../hook/category/useCreateSubByCat';
import { ToastContainer } from 'react-toastify';

const AdminAddSubCategory = () => {
  const [isLoading,response,name,catId,handleName,handleCategoryId,handleSubmit]  = useCreateSubByCat();
  
    return (
        <div>
          <ToastContainer/>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
                <Col sm="8">
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف الفرعي"
                        name='name'
                        value={name}
                        onChange={handleName}
                    />
                    <select name="category" id="lang" className="select mt-3 px-2 " onChange={handleCategoryId} >
                        <option value="0">اختر التصنيف الرئيسي</option>
                        {
                          response.data ? 
                          response.data.data.map(res=>{
                              return (
                                <option key={res._id} value={res._id}>{res.name}</option>
                              )
                            })
                          :
                          <Spinner variant="primary" animation="border"/>
                        }
                    </select>
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

export default AdminAddSubCategory
