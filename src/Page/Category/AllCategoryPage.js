
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'
import { useGetAllCategories } from '../../hook/category/useGetAllCategories';
import {allCategories} from '../../redux/actions/category';
const AllCategoryPage = () => {
    
  
  const [responseData, isLoading,pageCount,getPage] = useGetAllCategories(allCategories(3));
    return  (
        <div style={{minHeight:'670px'}}>
        
            <CategoryContainer responseData={responseData} isLoading={isLoading}/>
            {
              pageCount > 1?<Pagination pageCount={pageCount} getPage ={getPage}/> : null
            }
            
        </div>
    )
}

export default AllCategoryPage
