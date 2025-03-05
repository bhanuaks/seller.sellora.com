import { deleteImageOne, uploadImageFun } from "@/app/api/uploadImage/route";
import { isEmpty, main_large_img_path, main_medium_img_path, main_thumb_img_path, product_large_img_path1, product_large_img_path2, product_large_img_path3, product_large_img_path4, product_medium_img_path1, product_medium_img_path2, product_medium_img_path3, product_medium_img_path4, product_thumb_img_path1, product_thumb_img_path2, product_thumb_img_path3, product_thumb_img_path4, responseFun, slugify, variant_large_img_path1 } from "@/Http/helper";
import { productModel, productOtherDetailModel } from "@/Http/Models/productModel";
import path from 'path'
import { connectDb } from "../../../../../../lib/dbConnect";
import mongoose from "mongoose";
import { checkFilePath, moveFile } from "@/app/api/ckeckFilePath/route";

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


        seller_id,
        _id,

        main_image,
        dynamicField,
        keyAttributes,
        taxCode,
        taxRate,
        currency,
        fulfillmentBy,
        shippingProvider,

        packageWeight,
        packageBreadth,
        packageHeight,
        packageLength

    } = Object.fromEntries(formData);


    let key_feature_array = key_feature ? JSON.parse(key_feature) : [];

    const dynamicFields = dynamicField ? JSON.parse(dynamicField) : [];
    const keyAttributesData = keyAttributes ? JSON.parse(keyAttributes) : [];

    const errors = {};

    if (isEmpty(product_name)) errors.product_name = "This field is required";
    if (isEmpty(product_description)) errors.product_description = "This field is required";
    if (isEmpty(search_keywords)) errors.search_keywords = "This field is required";
    if (isEmpty(target_gender)) errors.target_gender = "This field is required";

    if (isEmpty(taxCode)) errors.taxCode = `Tax Code is required.`;
    if (isEmpty(taxRate)) errors.taxRate = `Tax Rate is required.`;
    if (isEmpty(currency)) errors.currency = `Currency is required.`;
    if (isEmpty(fulfillmentBy)) errors.fulfillmentBy = `This field is required.`;
    if (isEmpty(shippingProvider)) errors.shippingProvider = `This field is required.`;

    if (key_feature_array.length == 0) {
        errors.key_feature_0 = "This field is required";
    } else {
        key_feature_array.forEach((keyItem, index) => {
            if (isEmpty(keyItem)) errors[`key_feature_${index}`] = "This field is required";
        })
    }

    if (!image_1 || image_1 == "null") {
        errors.image = "minimum 1 image required";
    }

    if (!main_image || main_image == "null") {
        errors.main_image = "Please select main image.";
    }


    // validate dynamicField
    const dynamicFieldData = [];
    if (dynamicFields.length > 0) {
        dynamicFields.forEach((item) => {
            if (isEmpty(item.field_value) && item.required === "Yes") {
                errors[`${item.field_name.toLowerCase().replace(/ /g, '_')}_error`] = `${item.field_name} is required.`;
            }
            const data = {
                field_name: item.field_name,
                field_value: item.field_value || null
            }
            dynamicFieldData.push(data)
        });
    }

    // validate key attribute 
    if (keyAttributesData.length > 0) {
        keyAttributesData.forEach((item, key) => {
            if (isEmpty(item.key_attribute)) {
                errors[`attribute_name_${key}_error`] = "This field is required."
            }
            if (isEmpty(item.key_value)) {
                errors[`attribute_value_${key}_error`] = "This field is required."
            }
        });
    }


    if (Object.keys(errors).length > 0) {
        return responseFun(false, { errors, status_code: 400, dynamicFieldData }, 200)
    }
    let image_1_path = image_1 || null;
    let image_2_path = image_2 || null;
    let image_3_path = image_3 || null;
    let image_4_path = image_4 || null;
    let main_image_path = main_image || null
    let existProduct = null;

    const image1PathArray = [product_thumb_img_path1, product_medium_img_path1, product_large_img_path1];
    const image2PathArray = [product_thumb_img_path2, product_medium_img_path2, product_large_img_path2];
    const image3PathArray = [product_thumb_img_path3, product_medium_img_path3, product_large_img_path3];
    const image4PathArray = [product_thumb_img_path4, product_medium_img_path4, product_large_img_path4];

    const product_large_img_paths = [product_large_img_path2, product_large_img_path3, product_large_img_path4];
    const product_medium_img_paths = [product_medium_img_path2, product_medium_img_path3, product_medium_img_path4];
    const product_thumb_img_paths = [product_thumb_img_path2, product_thumb_img_path3, product_thumb_img_path4];

    const imagePath1UploadArray = [
        { path: `public/${product_large_img_path1}`, size: 1600 },
        { path: `public/${product_medium_img_path1}`, size: 1100 },
        { path: `public/${product_thumb_img_path1}`, size: 400 }
    ];
    const imagePath2UploadArray = [
        { path: `public/${product_large_img_path2}`, size: 1600 },
        { path: `public/${product_medium_img_path2}`, size: 1100 },
        { path: `public/${product_thumb_img_path2}`, size: 400 }
    ];

    const imagePath3UploadArray = [
        { path: `public/${product_large_img_path3}`, size: 1600 },
        { path: `public/${product_medium_img_path3}`, size: 1100 },
        { path: `public/${product_thumb_img_path3}`, size: 400 }
    ];
    const imagePath4UploadArray = [
        { path: `public/${product_large_img_path4}`, size: 1600 },
        { path: `public/${product_medium_img_path4}`, size: 1100 },
        { path: `public/${product_thumb_img_path4}`, size: 400 }
    ];
    if (_id) {
        existProduct = await productModel.findById(_id)
    }

    //  upload main image
    if (main_image && typeof main_image != "string") {

        if (existProduct && existProduct.main_image) {
            const oldPath = existProduct.main_image
            await deleteImageOne(`${main_large_img_path}${oldPath}`)
            await deleteImageOne(`${main_medium_img_path}${oldPath}`)
            await deleteImageOne(`${main_thumb_img_path}${oldPath}`)
        }
        const extension = path.extname(main_image.name);
        const accepteExtensions = ['.jpg', '.png', 'jpeg', 'webp'];
        if (!accepteExtensions.includes(extension)) {
            errors.main_image = "image must be jpg, png,jpeg."
        }
        const shortenedProductName = product_name.length > 6 ? product_name.slice(0, 6).toString().trim() : product_name.toString().trim();
        const filname = `${shortenedProductName}_main_${new Date().toISOString().replace(/[-:.TZ]/g, "")}.${extension}`;
        const uploadingPath = "public/uploads/product/main_image/";
        await uploadImageFun(main_image, `public/${main_large_img_path}`, filname, 1600)
        await uploadImageFun(main_image, `public/${main_medium_img_path}`, filname, 1100)
        await uploadImageFun(main_image, `public/${main_thumb_img_path}`, filname, 400)
        //   await uploadImageFun(main_image, uploadingPath, filname, 1100)
        main_image_path = filname;

        

    } else if (!main_image && existProduct && existProduct.main_image) {
        const oldPath = existProduct.main_image
        await deleteImageOne(oldPath)
    }

    // end upload main image

    if (image_1 && typeof image_1 != "string") {
        const extension = path.extname(image_1.name);
        const accepteExtensions = ['.jpg', '.png', 'jpeg', 'webp'];
        if (!accepteExtensions.includes(extension)) {
            errors.image_1 = "image must be jpg, png,jpeg."
        }
        const shortenedProductName = product_name.length > 6 ? product_name.slice(0, 6).toString().trim() : product_name.toString().trim();
        const filname_1 = `${shortenedProductName}1${new Date().toISOString().replace(/[-:.TZ]/g, "")}.${extension}`;

        for (const { path, size } of imagePath1UploadArray) {
            await uploadImageFun(image_1, path, filname_1, size)
        }
        image_1_path = filname_1;

        //   delete image
        if (existProduct && existProduct.image_1) {
            const oldPath = existProduct.image_1
            for (const path of image1PathArray) {
                await deleteImageOne(`${path}${oldPath}`)
            }

        }


    } else if (image_1 && image_1 != "null") {
        // check image 2 path and move 1 
       
        for (let i = 0; i < product_large_img_paths.length; i++) {
            const largPath = `public/${product_large_img_paths[i]}`;
            const mediumPath = `public/${product_medium_img_paths[i]}`;
            const thumbPath = `public/${product_thumb_img_paths[i]}`;
            let exisPath = await checkFilePath(largPath, image_1)
            if (exisPath) {
                await moveFile(largPath, image_1, `public/${product_large_img_path1}`)
                await moveFile(mediumPath, image_1, `public/${product_medium_img_path1}`)
                await moveFile(thumbPath, image_1, `public/${product_thumb_img_path1}`)
            }
        }
        image_1_path = image_1

        // after move delete  old uploaded image
        if (existProduct && existProduct.image_1 && existProduct.image_1 != image_1) {
            const oldPath = existProduct.image_1
            if (![image_2, image_3, image_4].includes(oldPath)) {
                for (const path of image1PathArray) {
                    await deleteImageOne(`${path}${oldPath}`)
                }
            }
        }


    } else if ((!image_1 || image_1 == "null") && existProduct?.image_1) {
        // delete image when image_1 not upload
        const oldPath = existProduct.image_1
        for (const path of image1PathArray) {
            await deleteImageOne(`${path}${oldPath}`)
        }
        image_1_path =null
    }else{
        image_1_path =null
    }

    // ======================================image 2 upload section==============================================

    if (image_2 && typeof image_2 != "string") {
        const extension = path.extname(image_2.name);
        const accepteExtensions = ['.jpg', '.png', 'jpeg', 'webp'];
        if (!accepteExtensions.includes(extension)) {
            errors.image_2 = "image must be jpg, png,jpeg."
        }
        const shortenedProductName = product_name.length > 6 ? product_name.slice(0, 6).toString().trim() : product_name.toString().trim();
        const filname_2 = `${shortenedProductName}2${new Date().toISOString().replace(/[-:.TZ]/g, "")}.${extension}`;
        for (const { path, size } of imagePath2UploadArray) {
            await uploadImageFun(image_2, path, filname_2, size)
        }
        image_2_path = filname_2;

        //   delete image
        if (existProduct && existProduct.image_2) {
            const oldPath = existProduct.image_2
            if (oldPath != image_1) {

                for (const path of image2PathArray) {
                    await deleteImageOne(`${path}${oldPath}`)
                }

            }
        }


    } else if (image_2 && image_2 != "null") {
        // check image 2 path and move 1 
         
        for (let i = 0; i < product_large_img_paths.length; i++) {
            if(product_large_img_paths[i] =="product_large_img_path2"){
                continue;
            }
            const largPath = `public/${product_large_img_paths[i]}`;
            const mediumPath = `public/${product_medium_img_paths[i]}`;
            const thumbPath = `public/${product_thumb_img_paths[i]}`; 
            let exisPath = await checkFilePath(largPath, image_2)
            if (exisPath) {
                await moveFile(largPath, image_2, `public/${product_large_img_path2}`)
                await moveFile(mediumPath, image_2, `public/${product_medium_img_path2}`)
                await moveFile(thumbPath, image_2, `public/${product_thumb_img_path2}`)
            }
        }
        image_2_path = image_2

        // after move delete  old uploaded image
        if (existProduct && existProduct.image_2 && existProduct.image_2 != image_2) {
            const oldPath2 = existProduct.image_2
            if (![image_1, image_3, image_4].includes(oldPath2)) {
                for (const path of image2PathArray) {
                    await deleteImageOne(`${path}${oldPath2}`)
                }
            }
        }

    } else if ((!image_2 || image_2 == "null") && existProduct?.image_2) {
        // delete image when image_2 not upload
        const oldPath = existProduct.image_2
        if (oldPath != image_1) {
            for (const path of image2PathArray) {
                await deleteImageOne(`${path}${oldPath}`)
            }
        }
        image_2_path = null
    }else{
        image_2_path = null
    }

    // =====================================image 3 upload section======================================================
    if (image_3 && typeof image_3 != "string") {
        const extension = path.extname(image_3.name);
        const accepteExtensions = ['.jpg', '.png', 'jpeg', 'webp'];
        if (!accepteExtensions.includes(extension)) {
            errors.image_3 = "image must be jpg, png,jpeg."
        }
        const shortenedProductName = product_name.length > 6 ? product_name.slice(0, 6).toString().trim() : product_name.toString().trim();
        const filname_3 = `${shortenedProductName}3${new Date().toISOString().replace(/[-:.TZ]/g, "")}.${extension}`;


        for (const { path, size } of imagePath3UploadArray) {
            await uploadImageFun(image_3, path, filname_3, size)
        }
        image_3_path = filname_3;

        //   delete image
        if (existProduct && existProduct.image_3) {
            const oldPath = existProduct.image_3
            if (oldPath != image_2 && oldPath != image_1) {
                for (const path of image3PathArray) {
                    await deleteImageOne(`${path}${oldPath}`)
                }
            }
        }

    } else if (image_3 && image_3 != "null") {
        let exist4Path = await checkFilePath(`public/${product_large_img_path4}`, image_3)
        if (exist4Path) {
            await moveFile(`public/${product_large_img_path4}`, image_3, `public/${product_large_img_path3}`)
            await moveFile(`public/${product_medium_img_path4}`, image_3, `public/${product_medium_img_path3}`)
            await moveFile(`public/${product_thumb_img_path4}`, image_3, `public/${product_thumb_img_path3}`)
        }

        image_3_path = image_3 
        // after move delete  old uploaded image 3
        if (existProduct && existProduct.image_3 && existProduct.image_3 != image_3) {
            const oldPath3 = existProduct.image_3
            if (![image_1, image_2, image_4].includes(oldPath3)) {
                for (const path of image3PathArray) {
                    await deleteImageOne(`${path}${oldPath3}`)
                }
            }
        }


    } else if ((!image_3 || image_3 == "null") && existProduct?.image_3) {
        // delete image when image_3 not upload
        const oldPath = existProduct.image_3
        if (oldPath != image_2 && oldPath != image_1) {

            for (const path of image3PathArray) {
                await deleteImageOne(`${path}${oldPath}`)
            }

        }
        image_3_path = null
    }else{
        image_3_path = null
    }


    // =====================================image 4 upload section======================================================

    if (image_4 && typeof image_4 != "string") {
        const extension = path.extname(image_4.name);
        const accepteExtensions = ['.jpg', '.png', 'jpeg', 'webp'];
        if (!accepteExtensions.includes(extension)) {
            errors.image_4 = "image must be jpg, png,jpeg."
        }
        const shortenedProductName = product_name.length > 6 ? product_name.slice(0, 6).toString().trim() : product_name.toString().trim();
        const filname_4 = `${shortenedProductName}4${new Date().toISOString().replace(/[-:.TZ]/g, "")}.${extension}`;

        for (const { path, size } of imagePath4UploadArray) {
            await uploadImageFun(image_4, path, filname_4, size)
        }
        image_4_path = filname_4;

        //   delete image
        if (existProduct && existProduct.image_4) {
            const oldPath = existProduct.image_4
            if (![image_2, image_3, image_1].includes(oldPath)) {
                for (const path of image4PathArray) {
                    await deleteImageOne(`${path}${oldPath}`)
                }
            }
        }

    } else if(image_4  && image_4 != "null"){
        image_4_path = image_4;

        // delete old upload image 4 when not upload
        if(existProduct && existProduct.image_4 && existProduct.image_4 != image_4){
            const oldPath4 = existProduct.image_4
            if([image_1,image_2,image_3].includes(oldPath4)){
                for (const path of image4PathArray) {
                    await deleteImageOne(`${path}${oldPath4}`)
                } 
            }
        }

    } else if ((!image_4 || image_4 == "null") && existProduct?.image_4 ) {
        // delete image when image_4 not upload
        const oldPath = existProduct.image_4
        
        if (![image_2, image_3, image_1].includes(oldPath)) {
            for (const path of image4PathArray) {
                await deleteImageOne(`${path}${oldPath}`)
            }
        }
         image_4_path= null
         
    }else{
        image_4_path= null
    }

 
    if (Object.keys(errors).length > 0) {
        return responseFun(false, { errors, status_code: 400 }, 200)
    }

    try {
        let product = null;
        if (_id && _id != "null") {
            product = await productModel.findByIdAndUpdate(_id, {
                seller_id,
                category_id,
                subcategory_id: subcategory_id && subcategory_id != "null" ? subcategory_id : null,
                childcategory_id: childcategory_id && childcategory_id != "null" ? childcategory_id : null,
                brand_id: brand_id ? brand_id : null,
                slug: slugify(product_name),
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
                image_1: image_1_path,
                image_2: image_2_path,
                image_3: image_3_path,
                image_4: image_4_path,
                main_image: main_image_path,
                dynamicFields: dynamicFieldData,
                keyAttributes: keyAttributesData,

                currency,
                taxCode,
                taxRate,
                fulfillmentBy,
                shippingProvider,

                packageWeight,
                packageBreadth,
                packageHeight,
                packageLength
            })


        } else {
            product = await productModel.create({
                seller_id,
                category_id,
                subcategory_id: subcategory_id && subcategory_id != "null" ? subcategory_id : null,
                childcategory_id: childcategory_id && childcategory_id != "null" ? childcategory_id : null,
                brand_id: brand_id ? brand_id : null,
                slug: slugify(product_name),
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
                image_1: image_1_path,
                image_2: image_2_path,
                image_3: image_3_path,
                image_4: image_4_path,
                main_image: main_image_path,
                dynamicFields: dynamicFieldData,
                keyAttributes: keyAttributesData,

                currency,
                taxCode,
                taxRate,
                fulfillmentBy,
                shippingProvider,

                packageWeight,
                packageBreadth,
                packageHeight,
                packageLength


            })
        }




        return responseFun(true, { data: product }, 200)

    } catch (error) {
        console.log(error);
        return responseFun(false, { data: error }, 200)
    }
}