import React from 'react'
import UnopDropdown from "unop-react-dropdown";
import sort from '../../images/sort.png'
const SearchCountResult = ({title,onClick}) => {
    const handler=()=> {

    }
    function handleClick(key){
      localStorage.setItem("sortType",key);
      onClick();
    }
    return (
        <div className="d-flex justify-content-between pt-3 px-2">
            <div className="sub-tile">{title}</div>
            <div className="search-count-text d-flex ">
                <UnopDropdown
              
                    onAppear={handler}
                    onDisappearStart={handler}
                    trigger={
                        <p className="mx-1">
                            <img
                                width="20px"
                                height="20px"
                                className="ms-1"
                                src={sort}
                                alt=""
                            />
                            ترتيب حسب
                        </p>
                    }
                    delay={0}
                    align="CENTER"
                    hover>
                    <div className="card-filter">
                        <div className="border-bottom card-filter-item" onClick={()=> handleClick("")}>بدون ترتيب</div>
                        <div className="border-bottom card-filter-item" onClick={()=> handleClick("best seller")}>الاكثر مبيعا</div>
                        <div className="border-bottom card-filter-item" onClick={()=> handleClick("highest rated")}>الاعلي تقييما</div>
                        <div className="border-bottom card-filter-item" onClick={()=> handleClick("less to more")}>
                            السعر من الاقل للاعلي
                        </div>
                        <div className=" card-filter-item" onClick={()=> handleClick("more to less")}>السعر من الاعلي للاقل</div>
                    </div>
                </UnopDropdown>
            </div>
        </div>
    )
}

export default SearchCountResult
