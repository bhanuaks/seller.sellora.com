import Link from "next/link";
import React, { useRef } from "react";
import { baseUrl, product_large_img_path1, product_large_img_path2, product_large_img_path3, product_large_img_path4 } from '@/Http/helper'
import { product_medium_img_path1, product_medium_img_path2, product_medium_img_path3, product_medium_img_path4 } from '@/Http/helper'
import { product_thumb_img_path1, product_thumb_img_path2, product_thumb_img_path3, product_thumb_img_path4 } from '@/Http/helper'

import { variant_large_img_path1, variant_large_img_path2, variant_large_img_path3, variant_large_img_path4 } from '@/Http/helper'
import { variant_medium_img_path1, variant_medium_img_path2, variant_medium_img_path3, variant_medium_img_path4 } from '@/Http/helper'
import { variant_thumb_img_path1, variant_thumb_img_path2, variant_thumb_img_path3, variant_thumb_img_path4 } from '@/Http/helper'

import Image from "next/image";

const VariantImage = ({ variantList, productDetails, changeVariant }) => {

  if (!productDetails || Object.keys(productDetails).length === 0) {
    return <div>Loading...</div>;
  }

  const product_large_img_paths = [product_large_img_path1, product_large_img_path2, product_large_img_path3, product_large_img_path4];
  const product_medium_img_paths = [product_medium_img_path1, product_medium_img_path2, product_medium_img_path3, product_medium_img_path4];
  const product_thumb_img_paths = [product_thumb_img_path1, product_thumb_img_path2, product_thumb_img_path3, product_thumb_img_path4];

  const variant_large_img_paths = [variant_large_img_path1, variant_large_img_path2, variant_large_img_path3, variant_large_img_path4];
  const variant_medium_img_paths = [variant_medium_img_path1, variant_medium_img_path2, variant_medium_img_path3, variant_medium_img_path4];
  const variant_thumb_img_paths = [variant_thumb_img_path1, variant_thumb_img_path2, variant_thumb_img_path3, variant_thumb_img_path4];


  const imageFields = [ "image_1", "image_2", "image_3", "image_4"];
  const images = imageFields.map((field, index) => {
    return changeVariant && changeVariant[field] != 'null' && changeVariant[field] != undefined
      ? changeVariant[field]
      : productDetails[field];
  });

  // console.log(changeVariant.image_1);


  const zoom = (e) => {
    const zoomer = e.currentTarget;
    if (!zoomer) return;

    const rect = zoomer.getBoundingClientRect();
    const offsetX = e.type === 'touchmove' ? e.touches[0].clientX - rect.left : e.nativeEvent.offsetX;
    const offsetY = e.type === 'touchmove' ? e.touches[0].clientY - rect.top : e.nativeEvent.offsetY;

    const x = (offsetX / zoomer.offsetWidth) * 100;
    const y = (offsetY / zoomer.offsetHeight) * 100;
    // console.log(`${x}% ${y}%`);
    zoomer.style.backgroundPosition = `${x}% ${y}%`;
  };

  return (
    <>
      <div className="show-product-area-details">
        <div className="product-thumb-filter-group left">
          {changeVariant.withImage == "Yes" ? variant_thumb_img_paths.map((image, index) => {
            if (images[index]) {
              return (
                <div key={index} className={`thumb-filter filter-btn ${index === 0 ? 'active' : ''}`} data-show={`.${index + 1}`}>
                  <img
                    src={`${baseUrl}${image}${images[index]}`}
                    // width={74}
                    // height={90}
                    alt={`Picture of the thumb ${index + 1}`}
                  />
                </div>
              );
            }
            return null;
          }) : product_thumb_img_paths.map((image, index) => {
            if (images[index]) {
              return (
                <div key={index} className={`thumb-filter filter-btn ${index === 0 ? 'active' : ''}`} data-show={`.${index + 1}`}>
                   {/* <div className="relative w-full h-[454px]"> */}
                  <img
                    src={`${baseUrl}${image}${images[index]}`} 
                    alt={`Picture of the thumb ${index + 1}`}
                    // className="object-cover"
                  />
                </div>
                // </div>
              );
            }
            return null;
          })}
        </div>

        <div className="product-thumb-area">
          <div className="cursor" />
          {images.map((image, index) => {
            if (image) {
              return (
                <div
                  key={index}
                  className={`thumb-wrapper ${index + 1} filterd-items ${index === 0 ? '' : 'hide'}`}

                >
                  <div

                    className="product-thumb zoom"
                    onMouseMove={zoom}
                    onTouchMove={zoom}
                    style={{
                      backgroundImage: `url(${baseUrl}${changeVariant.withImage == "Yes" ? variant_large_img_paths[index]: product_large_img_paths[index]}/${image})`,
                      backgroundRepeat: 'no-repeat',
                      width: "100%"
                    }}
                  >
                   {/* <div className="relative w-full h-[454px]"> */}
                    <img
                      src={`${baseUrl}${changeVariant.withImage == "Yes" ? variant_medium_img_paths[index]:product_medium_img_paths[index]}/${image}`}
                        
                      alt={`Picture of the zoom ${index + 1}`}
                      // className="object-cover"
                    />
                    </div>
                    
                  {/* </div> */}
                </div>
              );
            }
            return null;
          })}
          <div className="thumb-wrapper five filterd-items hide">
            <div className="product-thumb zoom">
              <video
                poster="http://content.bitsontherun.com/thumbs/bkaovAYt-320.jpg"
                autoPlay
                loop
                muted
                controls
              >
                <source src="http://content.bitsontherun.com/videos/bkaovAYt-52qL9xLP.mp4" />
                <source src="http://content.bitsontherun.com/videos/bkaovAYt-27m5HpIu.webm" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VariantImage;