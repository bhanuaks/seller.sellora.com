import { isEmpty, rand, responseFun } from "@/Http/helper";
import { productVariantModel, variantThresholdSchemaModal } from "@/Http/Models/productModel";
import mongoose from "mongoose";
const fs = require("fs");
const path = require("path");


export async function POST(request) {
    
    const {
        _id, 
        product_id,
        seller_id,
        sku, 
        listingStatus,
        msrp,
        consumerSalePrice,
        businessSalePrice,
        taxCode,
        taxRate,
        fulfillmentBy,
        shippingProvider,
        stock,
        customAttributes,
        threshold,
        discount_type,
        opration 
    } = await request.json();

     const errors = {}; 
                if(isEmpty(product_id))errors.product_id = `product_id is required.`;
                if(isEmpty(sku))errors.sku = `sku is required.`;
                if(!msrp ||  msrp== "null" )errors.msrp = `msrp is required.`;
                if(!consumerSalePrice || consumerSalePrice == "null")errors.consumerSalePrice = `this field is required.`;
                if(!businessSalePrice || businessSalePrice == 'null')errors.businessSalePrice = `this field is required.`;
                if(isEmpty(taxCode))errors.taxCode = `taxCode is required.`;
                if(!taxRate || taxRate == "null")errors.taxRate = `taxRate is required.`;
                if(!stock || stock == "null")errors.stock = `stock is required.`;  
                
               
                // check SKU
                let checkSku = null ;
                if(product_id && sku){
                    if(opration == "copy"){
                         checkSku = await productVariantModel.findOne({
                            product_id: new mongoose.Types.ObjectId(product_id),
                            sku:sku
                        })

                    }else{
                         checkSku = await productVariantModel.findOne({
                            product_id: new mongoose.Types.ObjectId(product_id),
                            sku:sku,
                            ...(!!_id && { _id: { $ne: _id } })
                        })
                    }
                    
    
                    if(checkSku){
                       errors.sku = `This SKU already exists.`;
                    }
                }
               
                

                if(Object.keys(errors).length>0){
                    return responseFun(false, {errors, status_code:400},200)
                }
    try{
        let variant =null
        let image_1_path = null;
        let image_2_path =  null;
        let image_3_path =  null;
        let image_4_path = null;
        // copy variant
        if(opration == "copy"){ 
            const copyFromVarinat = await productVariantModel.findById(_id);

            if(copyFromVarinat.image_1 && copyFromVarinat.image_1 != null){
                const sourcePath = copyFromVarinat.image_1;
                 const dirName= path.dirname(sourcePath)
                 const fileExten = path.extname(sourcePath)
                 const baseName = path.basename(sourcePath, fileExten)
                 let counter = 1;
                 let newFilePath = `uploads/variant/img1/${baseName}_copy${rand(11,99)}${fileExten}`;
                
                 const destinationPath = newFilePath
                 image_1_path = destinationPath
                fs.copyFile(`public/${sourcePath}`, `public/${destinationPath}`, (error)=>{
                    if(error){
                        console.log(`Error copying the image: ${error}`);
                    }else{
                        console.log(`image copy success: ${destinationPath}`);
                    }
                })
            }
            // end image_1

            if(copyFromVarinat.image_2 && copyFromVarinat.image_2 != null){
                const sourcePath = copyFromVarinat.image_2;
                 const dirName= path.dirname(sourcePath)
                 const fileExten = path.extname(sourcePath)
                 const baseName = path.basename(sourcePath, fileExten)
                 let counter = 1;
                 let newFilePath2 = `uploads/variant/img2/${baseName}_copy${rand(11,99)}${fileExten}`;
                
                 const destinationPath = newFilePath2
                 image_2_path = destinationPath
                fs.copyFile(`public/${sourcePath}`, `public/${destinationPath}`, (error)=>{
                    if(error){
                        console.log(`Error copying the image: ${error}`);
                    }else{
                        console.log(`image copy success: ${destinationPath}`);
                    }
                })
            }
            // end image_2

            if(copyFromVarinat.image_3 && copyFromVarinat.image_3 != null){
                const sourcePath = copyFromVarinat.image_3;
                 const dirName= path.dirname(sourcePath)
                 const fileExten = path.extname(sourcePath)
                 const baseName = path.basename(sourcePath, fileExten)
                 let counter = 1;
                 let newFilePath3 = `uploads/variant/img3/${baseName}_copy${rand(11,99)}${fileExten}`;
                
                 const destinationPath = newFilePath3
                 image_3_path = destinationPath
                fs.copyFile(`public/${sourcePath}`, `public/${destinationPath}`, (error)=>{
                    if(error){
                        console.log(`Error copying the image: ${error}`);
                    }else{
                        console.log(`image copy success: ${destinationPath}`);
                    }
                })
            }
            // end image_3

            if(copyFromVarinat.image_4 && copyFromVarinat.image_4 != null){
                const sourcePath = copyFromVarinat.image_4;
                 const dirName= path.dirname(sourcePath)
                 const fileExten = path.extname(sourcePath)
                 const baseName = path.basename(sourcePath, fileExten)
                 let counter = 1;
                 let newFilePath4 = `uploads/variant/img4/${baseName}_copy${rand(11,99)}${fileExten}`;
                
                 const destinationPath = newFilePath4
                 image_4_path = destinationPath
                fs.copyFile(`public/${sourcePath}`, `public/${destinationPath}`, (error)=>{
                    if(error){
                        console.log(`Error copying the image: ${error}`);
                    }else{
                        console.log(`image copy success: ${destinationPath}`);
                    }
                })
            }
            // end image_4


             variant = await productVariantModel.create({ 
                product_id,
                seller_id,
                sku,
                listingStatus,
                msrp,
                consumerSalePrice, 
                businessSalePrice,
                taxCode,
                taxRate,
                fulfillmentBy,
                shippingProvider,
                stock,
                customAttributes:customAttributes,
                discount_type,

                currency:copyFromVarinat.currency,
                withImage:copyFromVarinat.withImage,
                image_1:image_1_path,
                image_2:image_2_path,
                image_3:image_3_path,
                image_4:image_4_path,

            }) 
            if(threshold && threshold.length>0){
                threshold.forEach(async (element) => {
                    await variantThresholdSchemaModal.create({
                        product_id:product_id,
                        variant_id:variant._id,
                        seller_id:seller_id,
                        unit:element['unit'],
                        discount:element['discount'],
                    })
                });
            }


        }else{
             variant = await productVariantModel.findByIdAndUpdate(_id, { 
                product_id,
                sku, 
                listingStatus,
                msrp,
                consumerSalePrice, 
                taxCode,
                taxRate,
                fulfillmentBy,
                shippingProvider,
                businessSalePrice,
                stock,
                customAttributes:customAttributes,
                discount_type
            })

            await variantThresholdSchemaModal.deleteMany({
                variant_id:new mongoose.Types.ObjectId(variant)
            })
            if(threshold && threshold.length>0){
                threshold.forEach(async (element) => {
                    await variantThresholdSchemaModal.create({
                        product_id:product_id,
                        variant_id:variant._id,
                        seller_id:seller_id,
                        unit:element['unit'],
                        discount:element['discount'],
                    })
                });
            }


        }
       

        
        return responseFun(true, {message: "Data has been saved successfully."}, 200)

    }catch(error){
        console.log(error);
        return responseFun(false, {error}, 200)
    }
}