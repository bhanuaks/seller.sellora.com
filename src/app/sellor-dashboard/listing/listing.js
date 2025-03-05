import { baseUrl, dateConvertInDateTime, getVariantAttribute } from '@/Http/helper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { variant_large_img_path1, main_thumb_img_path} from '@/Http/helper'

const Listing = ({productList, editVariant, refreshList, setRefreshList, copyVariant}) => {

  function toggleMenu(event) {
    const menu = event.target.nextElementSibling;
    console.log(menu);
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }

    function archiveVariant(variant_id, status){
      if(!confirm(`Are you sure to ${status} this`)){
        return
      }
      $('.loaderouter').css('display', 'flex');

      fetch(`${baseUrl}api/sellor/product/update-variant-status`,{
        method:"POST",
        body:JSON.stringify({
          variant_id:variant_id,
          status:status
        })
      }).then((response)=>{

        if(!response.ok){
          $('.loaderouter').css('display', 'none');
          throw new Error("Network Error")
        }
        return response.json();
      }).then((res)=>{
        // $('.loaderouter').css('display', 'none');
        setRefreshList(refreshList+1)
        console.log(res);
      })
    }

    
    // function copyVariant(variant_id){
    //   console.log(variant_id, status);
    //   $('.loaderouter').css('display', 'flex');

    //   fetch(`${baseUrl}api/sellor/product/copy-variant`,{
    //     method:"POST",
    //     body:JSON.stringify({
    //       variant_id:variant_id
    //     })
    //   }).then((response)=>{

    //     if(!response.ok){
    //       $('.loaderouter').css('display', 'none');
    //       throw new Error("Network Error")
    //     }
    //     return response.json();
    //   }).then((res)=>{
    //     // $('.loaderouter').css('display', 'none');
    //     setRefreshList(refreshList+1)
    //     console.log(res);
    //   })
    // }

  return (
    <tbody>

        {productList.length > 0 ? 
            productList.map((product, key)=>(
                <tr className="winner__table" key={key}>
                <td>
                  <div className="che">
                    <p>
                      <input type="checkbox" id={`active${key}`} name="" />
                      <label htmlFor={`active${key}`} className="green active222">
                        {product.variants && product.variants.listingStatus == 1? "Active":''}
                        {product.variants && product.variants.listingStatus == 0? "Inactive":''}
                        {product.variants && product.variants.listingStatus == 2? "Draft":''}
                        {product.variants && product.variants.listingStatus == 3? "Archived":''}
                        {product.variants && product.variants.listingStatus == 4? "Deleted":''}
                      </label>
                    </p>
                    <div className="date_time">
                      <ul>
                        <li> {product.variants && product.variants.createdAt?dateConvertInDateTime(product.variants.createdAt):''}  </li>
                        {/* <li>12:15 pm</li> */}
                      </ul>
                    </div>
                  </div>
                </td>
                <td>
                     
                  <div className="product_dash row" style={{display:'flex', justifyContent:'space-between'}}>
                     <div className='reletive w-full h-full'> 
                        <img src={`${baseUrl}${product.variants && product.variants.withImage=="Yes"?`${variant_large_img_path1}${product.variants.image_1}`:`${main_thumb_img_path}${product?.main_image}`}`}
                          alt="Product Image" 
                          className='object-cover'
                          layout="fill"
                          />
                          </div>

                    {/* <div className='reletive w-full h-[454px]'> 
                      <Image src={`${baseUrl}${product.variants && product.variants.withImage=="Yes"?`${variant_large_img_path1}${product.variants.image_1}`:`${main_thumb_img_path}${product?.main_image}`}`}
                       layout='fill'
                       alt='img'/>
                    </div> */}
                       
                 
                    <div className='ml-4 col-8'>
                      <p>
                        <a target='_blank' href={`${baseUrl}sellor/p-details/${product._id}/${product._id}`} style={{listStyle:'none'}}> {product.product_name} </a> 
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="skusdsdfsdfs">
                    <ul>
                      {product.variants && (
                        <>
                         <li>
                        <span>SKU</span>
                        <span className="divider">:</span>{product.variants?product.variants.sku:''}
                        
                      </li>
                        </>
                      )}
                     
                      <li>
                        <span>SIN</span>
                        <span className="divider">:</span>
                        {/* B0D8W995465894 */}
                      </li>
                    </ul>
                  </div>
                </td>

                <td>
                  <div className="skusdsdfsdfs">
                    <ul>
                      {product.variants && product.variants.customAttributes && Object.entries(product.variants.customAttributes).length>0 ?Object.entries(product.variants.customAttributes).map((variantData, index)=>(
                            <li key={index} style={{display:'flex'}}>
                              <div> {variantData[0]} </div>
                              <div className="divider">:</div> &nbsp; {variantData[1]} 
                            </li> 
                      )):null}
                     
                    </ul>
                  </div>
                </td>

                <td className="text-center small-size">
                  {product.variants && (
                    <>
                     MRP: ${product.variants.msrp}<br />
                    Consumer Sale Price: ${product.variants.consumerSalePrice}<br />
                    Business Sale Price: ${product.variants.businessSalePrice} 
                    </>
                  )}
                 
                </td>
                <td className="text-center small-size">
                  Total fees
                  <br />
                  $10
                  <br />
                  <span className="calculate">Calculate</span>
                </td>
                <th className="text-center small-size">{product.variants?product.variants.stock:''}</th>
                <td className="text-center small-size">{product.variants?product.variants.fulfillmentBy:''}</td>
                <td className="text-center small-size">Good</td>
                <td className="text-center small-size">
                {product.variants && (
                  <Link href="#" className="edit"  onClick={(e)=>editVariant(e,product)}>
                    Edit Listing
                  </Link>
                )}
                </td>
                <td>
                  <div className="listing-container">
                    <div className="listing">
                      <button className="kebab-menu" onClick={(e)=>toggleMenu(e)}>
                        ⋮
                      </button>
                      <ul className="menu-options">
                        <li>
                          <Link href={`${baseUrl}sellor/product/add-product?category=${product.category_id}&subCategory=${product.subcategory_id != null?product.subcategory_id:''}&childcategory=${product.childcategory_id !=null?product.childcategory_id:''}&brand=${product.brand_id}&product_id=${product._id}`} target="_blank">
                            Edit Catalogue
                          </Link>
                        </li>
                        {product.variants && (
                           product.variants && product.variants.customAttributes ?(
                          <>
                           <li onClick={(e)=>copyVariant(e,product)}> Copy Listing  </li> 
                              <>
                                <li onClick={()=>archiveVariant(product.variants._id, "Archive")} >Archive Listing</li>
                                <li onClick={()=>archiveVariant(product.variants._id, "Delete")} >Delete Listing</li>
                              </> 
                          </>
                           ):""
                        )}
                       
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
            ))
         :<tr>
          <td colSpan={10}>No Item</td>
         </tr>
         }
          </tbody>
  )
}

export default Listing