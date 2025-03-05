import { responseFun } from "@/Http/helper";
import { productModel, productVariantModel } from "@/Http/Models/productModel";
import mongoose from "mongoose";
import { fetchVariant } from "../add-variant/route";


export async function GET(request) {
    
    const { searchParams } = new URL(request.url);
    const seller_id = searchParams.get('seller_id')
    let page = parseInt(searchParams.get('page'))
    let pageSize = parseInt(searchParams.get('pageSize'))
    if(!page){
        page=4
    }
    if(!pageSize){
        pageSize=10
    }
 
    const skip = (page - 1) * pageSize;
    let totalCount =null;
    try{
            
        const query = {
            
        }
        totalCount = await productVariantModel.countDocuments({
            $and:[
                {seller_id: new mongoose.Types.ObjectId(seller_id)},
                { listingStatus: {$nin: [3, 4]} }
            ]
        });
         
        const productListing = await productModel.aggregate([
            {
                $match:{
                    seller_id: new mongoose.Types.ObjectId(seller_id)
                },
            },

            {
                $lookup:{
                    from:"productvariants",
                    let: {productId:"$_id"},
                    pipeline:[
                        {
                            $match:{
                                $expr:{
                                    $and:[
                                        { $eq: ["$product_id", "$$productId"] },
                                        { $not: [{ $in: ["$listingStatus", [3, 4]] }] }
                                    ]
                                }
                            }
                        }
                    ],
                    
                    as:"variants"
                }
            },
            {
                $unwind:{
                    path: "$variants",
                    preserveNullAndEmptyArrays:true
                }
            },
            {
                $lookup:{
                    from:"variantthresholds",
                    localField:"variants._id",
                    foreignField:"variant_id",
                    as:"tresholdData"
                }
            },

            {
                $skip: skip
            },
            {
                $limit: pageSize
            }
            
    ])


      const variantListWithValue = await Promise.all( 
        productListing.map(async (variant) => {
                    let variantItems = {}; 
                 
                    if(variant.variants){
                        await Promise.all(
                            Object.keys(variant.variants.customAttributes).map(async (item) => {
                                if(variant.variants.customAttributes[item] != ""){ 
                                    variantItems[item] = await fetchVariant(item, variant.variants.customAttributes[item]);
                                }
                            })
                        ); 
                    }
                    
 
                    return { 
                        ...variant, 
                        variantValue:variantItems 
                    };  
                })
    
            )
    let pagination= {
        totalCount,
        page,
        pageSize,
        // totalPages: 20,
        totalPages: Math.ceil(totalCount / pageSize),
    };
    
        return responseFun(true, {list:variantListWithValue, pagination:pagination},200)

    }catch(error){
        console.log(error);
        return responseFun(false, {error:error},200)
    }
}