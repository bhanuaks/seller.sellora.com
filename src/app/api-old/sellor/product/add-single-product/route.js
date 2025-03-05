import { deleteImageOne, uploadImageFun } from "@/app/api/uploadImage/route";
import { isEmpty, responseFun, slugify } from "@/Http/helper";
import { productModel, productOtherDetailModel } from "@/Http/Models/productModel";
import path from 'path'
import { connectDb } from "../../../../../../lib/dbConnect";
import mongoose from "mongoose";

export async function POST(request) {
    
    connectDb()
    const formData = await request.formData();

    const {
        category_id,
        subcategory_id,
        childcategory_id,
        brand_id,
        
        product_name,
        product_id_type,
        product_description,
        key_feature,
        search_keywords,
        target_gender,
        age_range,
        material,
        model_name,
        model_number,
        manufacture_part_number,
        safety_warning,
        country_of_origin,
        manufacturer_details,
        packer_details,
        importer_details,  


        image_1,
        image_2,
        image_3,
        image_4,
        

        fit_type,
        outer_material,
        fabric_type,
        fabric_description,
        features,
        instruction_of_use,
        fabric_regulations,
        pattern,
        dangerous_goods_regulations,
        // safety_warning,
        has_written_warranty,
        contains_an_electronic_component,
        product_is_or_contains_this_battery_type,
        seller_id,
        _id,
        action,
        main_image

    } = Object.fromEntries(formData);

    
     

        const errors = {};
        
        if(isEmpty(product_name))errors.product_name  = "This field is required";
        if(isEmpty(product_description))errors.product_description  = "This field is required";
        if(isEmpty(search_keywords))errors.search_keywords  = "This field is required";
        if(isEmpty(target_gender))errors.target_gender  = "This field is required";

        if(!image_1 || image_1 == "null" || !image_2  || image_2 == "null" || !image_3 || image_3 == "null" || !image_4 || image_4 == "null"){
            errors.image  = "4 image required";
        }

        if(!main_image || main_image == "null" ){
            errors.main_image  = "Please select main image.";
        }
        
        // return responseFun(false, {image_1, image_2, image_3, image_4},200)
        if(Object.keys(errors).length>0){
            return responseFun(false, {errors, status_code:400},200)
        }
        let image_1_path = image_1 || null;
        let image_2_path = image_2 || null;
        let image_3_path = image_3 || null;
        let image_4_path = image_4 || null;
        let main_image_path =  main_image || null
        let existProduct = null;
          if(_id){
                    existProduct = await productModel.findById(_id)
            }

              //  upload main image
            if(main_image && typeof main_image != "string"){
               
                if(existProduct  && existProduct.main_image ){
                    const oldPath = existProduct.main_image 
                            await deleteImageOne(oldPath) 
                }
                const extension = path.extname(main_image.name);
                const accepteExtensions = ['.jpg','.png','jpeg']; 
                if(!accepteExtensions.includes(extension)){
                    errors.main_image = "image must be jpg, png,jpeg." 
                  }
                  const shortenedProductName = product_name.length >6?product_name.slice(0, 6).toString().trim():product_name.toString().trim();
                  const filname = `${shortenedProductName}_main_${new Date().toISOString().replace(/[-:.TZ]/g, "")}.${extension}`;
                  const uploadingPath =  "public/uploads/product/main_image/"; 
                  await uploadImageFun(main_image, uploadingPath, filname, 1100)
                  main_image_path = `uploads/product/main_image/${filname}`;

            }else if(!main_image && existProduct  && existProduct.main_image ){
                const oldPath = existProduct.main_image 
                        await deleteImageOne(oldPath) 
            }

            // end upload main image

        if(image_1 && typeof image_1 != "string"){
            const extension = path.extname(image_1.name);
            const accepteExtensions = ['.jpg','.png','jpeg']; 
            if(!accepteExtensions.includes(extension)){
                errors.image_1 = "image must be jpg, png,jpeg." 
              }
              const shortenedProductName = product_name.length >6?product_name.slice(0, 6).toString().trim():product_name.toString().trim();
              const filname_1 = `${shortenedProductName}1${new Date().toISOString().replace(/[-:.TZ]/g, "")}.${extension}`;
              const uploadingPath =  "public/uploads/product/img1/"; 
              await uploadImageFun(image_1, uploadingPath, filname_1, 1100)
              image_1_path = `uploads/product/img1/${filname_1}`;

            //   delete image
              if(existProduct  && existProduct.image_1 ){
                const oldPath = existProduct.image_1
                 await deleteImageOne(oldPath)
               
            }


        }else if(!image_1 && existProduct  && existProduct.image_1 ){
             // delete image when image_1 not upload
            const oldPath = existProduct.image_1 
                    await deleteImageOne(oldPath)
           
        }

        // ======================================image 2 upload section==============================================

        if(image_2 && typeof image_2 != "string"){
            const extension = path.extname(image_2.name);
            const accepteExtensions = ['.jpg','.png','jpeg']; 
            if(!accepteExtensions.includes(extension)){
                errors.image_2 = "image must be jpg, png,jpeg." 
              }
              const shortenedProductName = product_name.length >6?product_name.slice(0, 6).toString().trim():product_name.toString().trim();
              const filname_2 = `${shortenedProductName}2${new Date().toISOString().replace(/[-:.TZ]/g, "")}.${extension}`;
              const uploadingPath =  "public/uploads/product/img2/"; 
              await uploadImageFun(image_2, uploadingPath, filname_2, 1100)
              image_2_path = `uploads/product/img2/${filname_2}`;

            //   delete image
              if(existProduct  && existProduct.image_2 ){
                const oldPath = existProduct.image_2
                if(oldPath != image_1 ){
                        await deleteImageOne(oldPath)
                }
            }


        }else if(!image_2 && existProduct  && existProduct.image_2 ){
             // delete image when image_2 not upload
            const oldPath = existProduct.image_2
            if(oldPath != image_1){
                    await deleteImageOne(oldPath)
            }
        }

        // =====================================image 3 upload section======================================================
        if(image_3 && typeof image_3 != "string"){
            const extension = path.extname(image_3.name);
            const accepteExtensions = ['.jpg','.png','jpeg']; 
            if(!accepteExtensions.includes(extension)){
                errors.image_3 = "image must be jpg, png,jpeg." 
              }
              const shortenedProductName = product_name.length >6?product_name.slice(0, 6).toString().trim():product_name.toString().trim();
              const filname_3 = `${shortenedProductName}3${new Date().toISOString().replace(/[-:.TZ]/g, "")}.${extension}`;
              const uploadingPath =  "public/uploads/product/img3/"; 
              await uploadImageFun(image_3, uploadingPath, filname_3, 1100)
              image_3_path = `uploads/product/img3/${filname_3}`;

            //   delete image
              if(existProduct  && existProduct.image_3 ){
                    const oldPath = existProduct.image_3
                    if(oldPath != image_2 && oldPath != image_1){
                            await deleteImageOne(oldPath)
                    }
             }

        }else if(!image_3 && existProduct  && existProduct.image_3 ){
             // delete image when image_3 not upload
            const oldPath = existProduct.image_3
            if(oldPath != image_2 && oldPath != image_1){
                    await deleteImageOne(oldPath)
            }
        }


        // =====================================image 4 upload section======================================================

        if(image_4 && typeof image_4 != "string"){
            const extension = path.extname(image_4.name);
            const accepteExtensions = ['.jpg','.png','jpeg']; 
            if(!accepteExtensions.includes(extension)){
                errors.image_4 = "image must be jpg, png,jpeg." 
              }
              const shortenedProductName = product_name.length >6?product_name.slice(0, 6).toString().trim():product_name.toString().trim();
              const filname_4 = `${shortenedProductName}4${new Date().toISOString().replace(/[-:.TZ]/g, "")}.${extension}`;
              const uploadingPath =  "public/uploads/product/img4/"; 
              await uploadImageFun(image_4, uploadingPath, filname_4, 1100)
              image_4_path = `uploads/product/img4/${filname_4}`;

            //   delete image
            if(existProduct  && existProduct.image_4 ){
                const oldPath = existProduct.image_4
                if(oldPath != image_2 && oldPath != image_3 && oldPath != image_1){
                        await deleteImageOne(oldPath)
                }
            }

        }else if(!image_4 && existProduct  && existProduct.image_4 ){
            // delete image when image_4 not upload
            const oldPath = existProduct.image_4
            if(oldPath != image_2 && oldPath != image_3 && oldPath != image_1){
                    await deleteImageOne(oldPath)
            }
        }



        if(Object.keys(errors).length>0){
            return responseFun(false, {errors, status_code:400},200)
        }
        let key_feature_array = key_feature?JSON.parse(key_feature):[];
                try{
                    let product = null;
                    if(_id && _id != "null"){
                         product = await productModel.findByIdAndUpdate(_id,{
                            seller_id,
                            category_id,
                            subcategory_id:subcategory_id && subcategory_id != "null" ?subcategory_id:null,
                            childcategory_id:childcategory_id && childcategory_id != "null"?childcategory_id:null,
                            brand_id:brand_id?brand_id:null,
                            slug : slugify(product_name),
                            product_name,
                            product_id_type,
                            product_description,
                            key_feature: key_feature_array,
                            search_keywords,
                            target_gender,
                            age_range,
                            material,
                            model_name,
                            model_number,
                            manufacture_part_number,
                            safety_warning,
                            country_of_origin,
                            manufacturer_details,
                            packer_details,
                            importer_details,   
                            image_1:image_1_path,
                            image_2:image_2_path,
                            image_3:image_3_path,
                            image_4:image_4_path,
                           main_image:main_image_path,
                        })
                        
                         
                    }else{
                         product = await productModel.create({
                            seller_id,
                            category_id,
                            subcategory_id:subcategory_id && subcategory_id != "null" ?subcategory_id:null,
                            childcategory_id:childcategory_id && childcategory_id != "null"?childcategory_id:null,
                            brand_id:brand_id?brand_id:null,
                            slug : slugify(product_name),
                            product_name,
                            product_id_type,
                            product_description,
                            key_feature: key_feature_array,
                            search_keywords,
                            target_gender,
                            age_range,
                            material,
                            model_name,
                            model_number,
                            manufacture_part_number,
                            safety_warning,
                            country_of_origin,
                            manufacturer_details,
                            packer_details,
                            importer_details,   
                            image_1:image_1_path,
                            image_2:image_2_path,
                            image_3:image_3_path,
                            image_4:image_4_path,
                           main_image:main_image_path,

                        })
                    }
            
                   

            const exists = await productOtherDetailModel.findOne({product_id:product._id});
            if(!exists){
                const compliance = await productOtherDetailModel.create({ 
                    product_id:product._id,
                    fit_type,
                    outer_material,
                    fabric_type,
                    fabric_description,
                    features,
                    instruction_of_use,
                    fabric_regulations,
                    pattern,
                    dangerous_goods_regulations, 
                    has_written_warranty,
                    contains_an_electronic_component,
                    product_is_or_contains_this_battery_type
                });
            }else{
                const compliance = await productOtherDetailModel.findOneAndUpdate({ product_id: product._id },{
                    fit_type,
                    outer_material,
                    fabric_type,
                    fabric_description,
                    features,
                    instruction_of_use,
                    fabric_regulations,
                    pattern,
                    dangerous_goods_regulations, 
                    has_written_warranty,
                    contains_an_electronic_component,
                    product_is_or_contains_this_battery_type
                });
            }
            return responseFun(true, {data:product},200)

        }catch(error){
            console.log(error);
            return responseFun(false, {data:error},200)
        }
}