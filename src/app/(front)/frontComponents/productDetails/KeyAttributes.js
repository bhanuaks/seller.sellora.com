"use client"
import Link from "next/link";
import React, { useState } from "react";
import { baseUrl } from "@/Http/helper";

const KeyAttributes = ({productDetails}) => {
    

  const [showMore, setShowMore] = useState(false)

    return (
        <>
        <div className="key_attributes">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-area-between">
            <h2 className="title-left"> Key attributes</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <h6>Other attributes</h6>
          <div className="additional-information">
            <div className="text show-more-height" style={{height:`${showMore?"auto":""}`}}>
            <ul>
                {productDetails?.dynamicFields?.map((item, index) =>
                  item.field_value.trim() !== "" ? (
                    <li key={index}>
                      <span>{item.field_name}</span> {item.field_value}
                    </li>
                  ) : null
                )}
            </ul>
            </div>
            <div className="show-more" onClick={()=>setShowMore(!showMore)}>{showMore?"Show Less":"Show more"}</div>
          </div>
        </div>
        <div className="col-lg-6">
          <h6>&nbsp;</h6>
          <div className="additional-information_right_side">
            <ul>

            {productDetails && productDetails.keyAttributes.length>0? productDetails.keyAttributes.map((item, index)=>(
                  item.key_value !=""?(
                    <li key={index}>
                      <span>{item.key_attribute}</span> {item.key_value}
                  </li>
                  ):null
                  
                )):''}
               
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}
export default KeyAttributes;