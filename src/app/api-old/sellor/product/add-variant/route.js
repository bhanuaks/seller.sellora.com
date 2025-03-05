import { isEmpty, responseFun } from "@/Http/helper";
import { productVariantModel } from "@/Http/Models/productModel";
import mongoose from "mongoose";
import { connectDb } from "../../../../../../lib/dbConnect";
import ColorModel from "../../../../../../lib/variant/ColorModel";
import SizeModel from "../../../../../../lib/variant/SizeModel";
import ItemBreadthModel from "../../../../../../lib/variant/ItemBreadthModel";
import ItemHeightModel from "../../../../../../lib/variant/ItemHeightModel";
import ItemLengthModel from "../../../../../../lib/variant/ItemLengthModel";
import ItemWeightModel from "../../../../../../lib/variant/ItemWeightModel";
import PackageBreadthModel from "../../../../../../lib/variant/PackageBreadthModel";
import PackageHeightModel from "../../../../../../lib/variant/PackageHeightModel";
// import PackageLengthModel from "../../../../../../lib/variant/PackageLengthModel";
import PackageWeightModel from "../../../../../../lib/variant/PackageWeightModel";
import PackageLengthModel from "../../../../../../lib/variant/PackageLengthModel";
import { deleteImageOne, uploadImageFun } from "@/app/api/uploadImage/route";
import path from 'path'


export async function POST(request) { 
await connectDb();
            const formData = await request.formData();
    const { 
                _id,
                product_id,
                category_id,
                sku,
                listingStatus,
                msrp,
                consumerSalePrice,
                businessSalePrice,
                currency,
                taxCode,
                taxRate,
                fulfillmentBy,
                shippingProvider,
                stock,
                customAttributes,
                withImage,
                image_1,
                image_2,
                image_3,
                image_4,

            }  = Object.fromEntries(formData); 

            const errors = {}; 
            if(isEmpty(product_id))errors.product_id = `product_id is required.`;
            if(isEmpty(sku))errors.sku = `sku is required.`;
            if(isEmpty(msrp))errors.msrp = `msrp is required.`;
            if(isEmpty(consumerSalePrice))errors.consumerSalePrice = `this field is required.`;
            if(isEmpty(businessSalePrice))errors.businessSalePrice = `this field is required.`;
            if(isEmpty(taxCode))errors.taxCode = `taxCode is required.`;
            if(isEmpty(taxRate))errors.taxRate = `taxRate is required.`;
            if(isEmpty(stock))errors.stock = `stock is required.`;  


            if(withImage=="Yes"){
                if(image_1 =="null" || image_3  =="null" || image_3 =="null" || image_4  =="null"){
                    errors.image  = "4 image required";
                }
            }

            if(Object.keys(errors).length>0){
                return responseFun(false, {errors, status_code:400},200)
            }

    try{

        let image_1_path = image_1 || null;
        let image_2_path = image_2 || null;
        let image_3_path = image_3 || null;
        let image_4_path = image_4 || null;

        let existVariant =null
        if(_id){
             existVariant = await productVariantModel.findById(_id)
        }
        if(withImage=="Yes"){
             //   start upload image 1
             if(image_1 && typeof image_1 != "string"){  
                        const extension = path.extname(image_1.name);
                        const accepteExtensions = ['.jpg','.png','jpeg']; 
                        if(!accepteExtensions.includes(extension)){
                            errors.image_1 = "image must be jpg, png,jpeg." 
                          }
                          const shortenedProductName = sku.length >6?sku.slice(0, 6):sku;
                          const filname_1 = `${shortenedProductName}1${new Date().toISOString().replace(/[-:.TZ]/g, "")}${extension}`;
                          const uploadingPath =  "public/uploads/variant/img1/"; 
                          await uploadImageFun(image_1, uploadingPath, filname_1, 1100)
                          image_1_path = `uploads/variant/img1/${filname_1}`;

                          if(existVariant  && existVariant.image_1 ){
                            const oldPath = existVariant.image_1
                            if(oldPath != image_2 && oldPath != image_3 && oldPath != image_4){
                               await deleteImageOne(oldPath)
                            }
                          }

                    }else if(image_1  && image_1 != "null"){
                        image_1_path = image_1

                    }else if(existVariant  && existVariant.image_1 ){
                            const oldPath = existVariant.image_1
                            if(oldPath != image_2 && oldPath != image_3 && oldPath != image_4){
                                 await deleteImageOne(oldPath)
                            }
                      }
            
                     //   start upload image 2
                    if(image_2 && typeof image_2 != "string"){
                        const extension = path.extname(image_2.name);
                        const accepteExtensions = ['.jpg','.png','jpeg']; 
                        if(!accepteExtensions.includes(extension)){
                            errors.image_2 = "image must be jpg, png,jpeg." 
                          }
                          const shortenedProductName = sku.length >6?sku.slice(0, 6):sku;
                          const filname_2 = `${shortenedProductName}2${new Date().toISOString().replace(/[-:.TZ]/g, "")}${extension}`;
                          const uploadingPath =  "public/uploads/variant/img2/"; 
                          await uploadImageFun(image_2, uploadingPath, filname_2, 1100)
                          image_2_path = `uploads/variant/img2/${filname_2}`;

                          if(existVariant  && existVariant.image_2){
                            const oldPath2 = existVariant.image_2
                            if(oldPath2 != image_1 && oldPath2 != image_3 && oldPath2 != image_4){
                               await deleteImageOne(oldPath2)
                            }
                          }

                    }else if(image_2  && image_2 != "null"){
                        image_2_path = image_2
                    }else if(existVariant  && existVariant.image_2){
                            const oldPath2 = existVariant.image_2
                            if(oldPath2 != image_1 && oldPath2 != image_3 && oldPath2 != image_4){
                            await deleteImageOne(oldPath2)
                            }
                      }

                    //   start upload image 3
            
                    if(image_3 && typeof image_3 != "string"){
                        const extension = path.extname(image_3.name);
                        const accepteExtensions = ['.jpg','.png','jpeg']; 
                        if(!accepteExtensions.includes(extension)){
                            errors.image_3 = "image must be jpg, png,jpeg." 
                          }
                          const shortenedProductName = sku.length >6?sku.slice(0, 6):sku;
                          const filname_3 = `${shortenedProductName}3${new Date().toISOString().replace(/[-:.TZ]/g, "")}${extension}`;
                          const uploadingPath =  "public/uploads/variant/img3/"; 
                          await uploadImageFun(image_3, uploadingPath, filname_3, 1100)
                          image_3_path = `uploads/variant/img3/${filname_3}`;

                          if(existVariant && existVariant.image_3){
                            const oldPath3 = existVariant.image_3
                            if(oldPath3 != image_1 && oldPath3 != image_2 && oldPath3 != image_4){
                               await deleteImageOne(oldPath3)
                            }
                          }

                    }else if(image_3 && image_3 != "null"){
                        image_3_path = image_3
                    }else if(existVariant && existVariant.image_3){
                        const oldPath3 = existVariant.image_3
                        if(oldPath3 != image_1 && oldPath3 != image_2 && oldPath3 != image_4){
                           await deleteImageOne(oldPath3)
                        }
                      }


                    //   upload image 4
                    if(image_4 && typeof image_4 != "string"){
                        const extension = path.extname(image_4.name);
                        const accepteExtensions = ['.jpg','.png','jpeg']; 
                        if(!accepteExtensions.includes(extension)){
                            errors.image_4 = "image must be jpg, png,jpeg." 
                          }
                          const shortenedProductName = sku.length >6?sku.slice(0, 6):sku;
                          const filname_4 = `${shortenedProductName}4${new Date().toISOString().replace(/[-:.TZ]/g, "")}${extension}`;
                          const uploadingPath =  "public/uploads/variant/img4/"; 
                          await uploadImageFun(image_4, uploadingPath, filname_4, 1100)
                          image_4_path = `uploads/variant/img4/${filname_4}`;

                          if(existVariant && existVariant.image_4){
                            const oldPath4 = existVariant.image_4
                            if(oldPath4 != image_1 && oldPath4 != image_2 && oldPath4 != image_3){
                               await deleteImageOne(oldPath4)
                            }
                          }

                    }else if(image_4  && image_4 != "null"){
                        image_4_path = image_4
                    }else if(existVariant && existVariant.image_4){
                        const oldPath4 = existVariant.image_4
                        if(oldPath4 != image_1 && oldPath4 != image_2 && oldPath4 != image_3){
                           await deleteImageOne(oldPath4)
                        }
                    }
        }
        // image uploading end


        if(_id){
            await productVariantModel.findByIdAndUpdate(_id,{
                product_id, 
                sku,
                listingStatus,
                msrp,
                consumerSalePrice,
                businessSalePrice,
                currency,
                taxCode,
                taxRate,
                fulfillmentBy,
                shippingProvider,
                stock,
                customAttributes:JSON.parse(customAttributes),
                withImage,
                image_1:image_1_path,
                image_2:image_2_path,
                image_3:image_3_path,
                image_4:image_4_path
            })
        }else{
            await productVariantModel.create({
                product_id, 
                sku,
                listingStatus,
                msrp,
                consumerSalePrice,
                businessSalePrice,
                currency,
                taxCode,
                taxRate,
                fulfillmentBy,
                shippingProvider,
                stock,
                customAttributes:JSON.parse(customAttributes), 

                withImage,
                image_1:image_1_path,
                image_2:image_2_path,
                image_3:image_3_path,
                image_4:image_4_path,

            })
        }

        const variantList = await getVariant(product_id); 
        return responseFun(true, {message: "Variant Addedd", variantList:variantList},200) 
    }catch(error){
        console.log(error);
        return responseFun(false, {error:error},200)
    }
}

export async function getVariant(product_id) {
    
    try{ 
        const variantList = await productVariantModel.find({
            product_id: new mongoose.Types.ObjectId(product_id)
        }).sort({createdAt:-1})

        const variantListWithValue = await Promise.all(
            // variantList.map(async (variant)=>{
            //     const variantItems = {}
            //     Object.keys(variant.customAttributes).map( async (item)=>{
            //          variantItems[item] = await fetchVariant(item, variant.customAttributes[item])
                  
            //     })
            //     console.log('variantItems', variantItems);
            // })


            variantList.map(async (variant) => {
                const variantItems = {};
        
                await Promise.all(
                    Object.keys(variant.customAttributes).map(async (item) => {
                        if(variant.customAttributes[item] != ""){ 
                            variantItems[item] = await fetchVariant(item, variant.customAttributes[item]);
                        }
                    })
                ); 
                return { 
                    ...variant.toObject(), 
                    variantValue:variantItems 
                };  
            })

        )
        return variantListWithValue;

    }catch(error){
        console.log(error);
        return [];
    }
}


export async function fetchVariant(variantName, _id) {
     let variant = null
     
     const validObjectId = mongoose.Types.ObjectId.isValid(_id);
        if (!validObjectId) {
            throw new Error("Invalid ObjectId provided");
        }
        if (variantName == "colorId") {
            variant = await ColorModel.findById(_id);
        }
        if (variantName == "sizeId") {
            variant = await SizeModel.findById(_id);
        }
    
        if (variantName == "itemBreadthId") {
            variant.itemBreadthId = await ItemBreadthModel.findById(_id);
        }
    
        if (variantName == "itemHeightId") {
            variant = await ItemHeightModel.findById(_id);
        }
    
        if (variantName == "itemLengthId") {
            variant = await ItemLengthModel.findById(_id);
        }
    
        if (variantName == "itemWeightId" ) {
            variant = await ItemWeightModel.findById(_id);
        }
    
        if (variantName == "packageBreadthId") {
            variant = await PackageBreadthModel.findById(_id);
        }
        if (variantName == "packageHeightId" ) {
            variant = await PackageHeightModel.findById(_id);
        }
    
        if (variantName == "packageLengthId" ) {
            variant = await PackageLengthModel.findById(_id);
        }
    
        if (variantName == "packageWeightId") {
            variant = await PackageWeightModel.findById(_id);
        }
    
        return variant;
}


export async function DELETE(request) {
        const { _id } = await request.json();
        try{
            const response = await productVariantModel.findByIdAndDelete(_id)
            return responseFun(true, {message:"Deleted successfully"}, 200)

        }catch(error){
            console.log(error);
            return responseFun(false, {error:error}, 200)
        }
}