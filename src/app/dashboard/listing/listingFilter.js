"use client"
import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const ListingFilter = ({seller}) => {

   const [filterData, setFilterData] = useState({
      category:"",
      brand:"",
      condition:"",
      listing_quantity:"",
      min_price:0,
      max_price:"",
      variants:""
    })

    
    const [categoryList , setCategoryList] = useState([])
    const [searchCategoryList , setSearchCategoryList] = useState([])
    const [categorySText, setCatyegorySText] = useState('')
    const [brandList , setBrandList] = useState([])

    function searchCategory(e){
      // SEARCH CATEGORY
      const { name, value } = e.target
      setCatyegorySText(value)
      let SearchedCategory = [];
        categoryList.forEach((catItem) => { 
           if(catItem.name.toLowerCase().includes(value.toLowerCase())){
            SearchedCategory.push(catItem)
           }
        })
        setSearchCategoryList(SearchedCategory) 
    }


    function updatefilterData(e){
      const { name, value } = e.target
      setFilterData((preData)=>({
        ...preData,
        [name]:value
      }))
    }


    useEffect(()=>{
      
      if(seller){  
          fetch(`${baseUrl}api/seller/fetch-brand-category?seller_id=${seller._id}`,{
            method:"GET", 
        }).then((response)=>{
            if(!response.ok){ 
                throw new Error("Network Error")
            }
            return response.json();
        }).then((res)=>{ 
            if(res.status){
              setCategoryList(res.data.category)
              setBrandList(res.data.brand)
              
            }  
        })
      }
    },[seller])


  return (
    <tr className="winner__table">
    <th colSpan={11}>
      <table className="table_filter">
        <tbody>
          <tr>
            <td>
              <div className="d-flex">
                <div className="fillter">
                  <Link href="#">
                    <i className="fa-solid fa-filter" />
                  </Link>
                </div>
                <div className="dropdown demo_drop">
                  <button
                    className="btn dropdown-toggle menu_button"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    
                    Category
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <div className="default">
                      <ul>
                      <li>
                          <form
                            role="search"
                            className="sr-input-func2"
                          >
                            <input
                              type="text"
                              placeholder=" "
                              className="search-int form-control"
                              onChange={(e)=>searchCategory(e)}
                            />
                            <Link href="#">
                              <i className="fa fa-search" />
                            </Link>
                          </form>
                        </li>

                      {!categorySText && categoryList.length > 0 ? categoryList.slice(0,5).map((categoryItem, index)=>(
                           <li key={index}>
                           <label htmlFor={`category_${index}`}>
                             <input type="radio" name="category"  
                             id={`category_${index}`} 
                             value={categoryItem._id}
                             onChange={(e)=>updatefilterData(e)}
                             checked = {filterData.brand==categoryItem._id?true:false}
                             />
                             {categoryItem.name}
                           </label>
                         </li>
                      )):null}

                       {categorySText && searchCategoryList.length > 0 ? searchCategoryList.map((categoryItem, index)=>(
                           <li key={index}>
                           <label htmlFor={`category_${index}`}>
                           <input type="radio" name="category"  
                             id={`category_${index}`} 
                             value={categoryItem._id}
                             onChange={(e)=>updatefilterData(e)}
                             checked = {filterData.brand==categoryItem._id?true:false}
                             />
                             {categoryItem.name}
                           </label>
                         </li>
                      )):null}
                         
                        
                      </ul>
                    </div>
                  </ul>
                </div>
                <div className="dropdown demo_drop">
                  <button
                    className="btn dropdown-toggle menu_button"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    
                    Brand
                  </button>
                  <ul
                    className="dropdown-menu  "
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <div className="default">
                      <ul>

                      {brandList.length > 0 ? brandList.map((brand, index)=>(
                           <li key={index}>
                           <label htmlFor={`barand_${index}`}>
                             <input type="radio" name="brand"  id={`barand_${index}`} 
                              value={brand._id}
                              onChange={(e)=>updatefilterData(e)}
                              checked = {filterData.brand==brand._id?true:false}
                              />
                             {brand.name}
                           </label>
                         </li>
                      )):null}

                          
                      </ul>
                    </div>

                    {/* <li>
                     
                      <Link className="dropdown-item" href="#">
                        Aahil Mart
                      </Link>
                    </li> */}
                  </ul>
                </div>
                <div className="dropdown demo_drop">
                  <button
                    className="btn dropdown-toggle menu_button"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    
                    Condition
                  </button>
                  <ul
                    className="dropdown-menu list_style_1"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link className="dropdown-item" href="#">
                        New
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown demo_drop">
                  <button
                    className="btn dropdown-toggle menu_button"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    
                    Listing Quality
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <div className="default">
                      <ul>
                        <li>
                          <label>
                            <input type="radio" name="default" />
                            Excellent
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="radio" name="default" />
                            Good
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="radio" name="default" />
                            Average
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="radio" name="default" />
                            Nose
                          </label>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </div>
                <div className="dropdown demo_drop">
                  <button
                    className="btn dropdown-toggle menu_button"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    
                    Price
                  </button>
                  <ul
                    className="dropdown-menu price_min-max"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <input type="text" placeholder="$ Min" />
                    </li>
                    <li>
                      <input type="text" placeholder="$ Max" />
                    </li>
                  </ul>
                </div>
                <div className="dropdown demo_drop">
                  <button
                    className="btn dropdown-toggle menu_button"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    
                    Variants
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <div className="default">
                      <ul>
                        <li>
                          <label>
                            <input type="radio" name="default" />
                            Single listing
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="radio" name="default" />
                            Variants
                          </label>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </div>
                <div className="menu_tab">
                  <ul>
                    <li className="apply_button">
                      <Link href="#">Apply</Link>
                    </li>
                    <li className="apply_button">
                      <Link href="#">Reset</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </td>
            <td>
              <div className="request_download">
                <div className="download_button">
                  <Link href="#">Request Download</Link>
                </div>
                <i className="fa-solid fa-circle-check" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </th>
  </tr>
  )
}

export default ListingFilter