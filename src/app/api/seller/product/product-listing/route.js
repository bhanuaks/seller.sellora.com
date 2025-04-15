import { responseFun } from "@/Http/helper";
import { productModel, productVariantModel } from "@/Http/Models/productModel";
import mongoose from "mongoose";
import { fetchVariant } from "../add-variant/route";
import { pipeline } from "nodemailer/lib/xoauth2";


export async function GET(request) {
    
    const { searchParams } = new URL(request.url);
    const seller_id = searchParams.get('seller_id')
    const searchText = searchParams.get('searchText')
    const searchBy = searchParams.get('searchBy')
    const type = searchParams.get('type')
    let page = parseInt(searchParams.get('page')) || 1
    let pageSize = parseInt(searchParams.get('pageSize')) || 10
    const requestData = {seller_id, searchText, searchBy, type, page, pageSize};
    if(type == "Unpublished"){
        return  await unpublishedProduct(requestData);
    }else if(type == "Published"){
        return  await publishedProduct(requestData);
    }
    else if(type == "Drafts"){
        return  await DraftProduct(requestData);
    } 
    
    const totalData = await countTotalProduct(requestData);

    if(!page){
        page=4
    }
    if(!pageSize){
        pageSize=10
    }
 
    const skip = (page - 1) * pageSize;
    let totalCount =null;
    try{
            
       
        const matchCondition = {
            seller_id: new mongoose.Types.ObjectId(seller_id),
            save_as_draft: { $ne: "1" }
        };
        
        
        if (searchText && typeof searchText === 'string' && searchBy=="title") {
            matchCondition.product_name = { $regex: searchText, $options: "i" };
        }

        totalCount = await productVariantModel.countDocuments({
            $and:[
                {seller_id: new mongoose.Types.ObjectId(seller_id)},
                { listingStatus: {$nin: [3, 4]} }
            ]
        });
         
        const productListing = await productModel.aggregate([
            {
                $match:matchCondition,
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
                        },
                        // Search `sku` inside productvariants
                        ...(searchText && typeof searchText === "string" && searchBy === "SKU"
                            ? [
                                {
                                    $match: {
                                        sku: { $regex: searchText, $options: "i" }  
                                    }
                                }
                            ]
                            : [])

                    ],
                    
                    as:"variants"
                }
            },
            {
                $unwind:{
                    path: "$variants",
                    preserveNullAndEmptyArrays:searchBy === "SKU" && searchText ?false:true
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
                $sort: { createdAt: -1 }
            },

            {
                $skip: skip
            },
            {
                $limit: pageSize
            }
           
            
    ]) 
       
    let pagination= {
        totalCount,
        page,
        pageSize,
        // totalPages: 20,
        totalPages: Math.ceil(totalCount / pageSize),
    };
    
        return responseFun(true, {
            list:productListing, 
            pagination:pagination,
            totalData:totalData
        },200)

    }catch(error){
        console.log(error);
        return responseFun(false, {error:error},200)
    }
}

async function unpublishedProduct(requestData) {
    const totalData = await countTotalProduct(requestData)
    const {seller_id, searchText, searchBy, type, page, pageSize} = requestData;

    const skip = (page - 1) * pageSize;
    let totalCount =null;

    try{
            
        const query = {
            
        }

        const matchCondition = {
            seller_id: new mongoose.Types.ObjectId(seller_id)
        };
        
        
        if (searchText && typeof searchText === 'string' && searchBy=="title") {
            matchCondition.product_name = { $regex: searchText, $options: "i" };
        }

        totalCount = totalData?.unpublished || 0;
         
        const productListing = await productModel.aggregate([
            {
                $match:matchCondition,
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
                                        { $eq: ["$listingStatus", 0] },
                                        { $eq: ["$isProcessing", "Approved"] }, 
                                    ]
                                }
                            }
                        },
                        // Search `sku` inside productvariants
                        ...(searchText && typeof searchText === "string" && searchBy === "SKU"
                            ? [
                                {
                                    $match: {
                                        sku: { $regex: searchText, $options: "i" }  
                                    }
                                }
                            ]
                            : [])

                    ],
                    
                    as:"variants"
                }
            },
            {
                $unwind:{
                    path: "$variants",
                    preserveNullAndEmptyArrays:false
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
                $sort:{
                    createdAt:-1
                }
            },
            {
                $skip: skip
            },
            {
                $limit: pageSize
            },
            
            
            
    ]) 
       
    let pagination= {
        totalCount,
        page,
        pageSize,
        // totalPages: 20,
        totalPages: Math.ceil(totalCount / pageSize),
    };
    
        return responseFun(true, {
            list:productListing, 
            pagination:pagination,
            totalData:totalData
        },200)

    }catch(error){
        console.log(error);
        return responseFun(false, {error:error},200)
    }
    
}


async function publishedProduct(requestData) {
    
    const totalData = await countTotalProduct(requestData);
    const {seller_id, searchText, searchBy, page, pageSize} = requestData;

    const skip = (page - 1) * pageSize;
    let totalCount =null;

    try{
            
      

        const matchCondition = {
            seller_id: new mongoose.Types.ObjectId(seller_id),
            save_as_draft: { $ne: "1" },
        };
        
        
        if (searchText && typeof searchText === 'string' && searchBy=="title") {
            matchCondition.product_name = { $regex: searchText, $options: "i" };
        }

        totalCount = totalData?.published || 0;
        // totalCount = await productVariantModel.countDocuments({
        //     $and:[
        //         {seller_id: new mongoose.Types.ObjectId(seller_id)},
        //         { listingStatus:1 }
        //     ]
        // });
         
        const productListing = await productModel.aggregate([
            {
                $match:matchCondition,
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
                                        { $eq: ["$listingStatus", 1] },
                                        { $eq: ["$isProcessing", "Approved"] }, 
                                    ]
                                }
                            }
                        },
                        // Search `sku` inside productvariants
                        ...(searchText && typeof searchText === "string" && searchBy === "SKU"
                            ? [
                                {
                                    $match: {
                                        sku: { $regex: searchText, $options: "i" }  
                                    }
                                }
                            ]
                            : [])

                    ],
                    
                    as:"variants"
                }
            },
            {
                $unwind:{
                    path: "$variants",
                    preserveNullAndEmptyArrays:false
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
                $sort:{
                    createdAt:-1
                }
            },

            {
                $skip: skip
            },
            {
                $limit: pageSize
            }
           
            
    ]) 
       
    let pagination= {
        totalCount,
        page,
        pageSize,
        // totalPages: 20,
        totalPages: Math.ceil(totalCount / pageSize),
    };
    
        return responseFun(true, {
            list:productListing, 
            pagination:pagination,
            totalData:totalData, 
        },200)

    }catch(error){
        console.log(error);
        return responseFun(false, {error:error},200)
    }
    
}




async function DraftProduct(requestData) {
    const totalData = await countTotalProduct(requestData)
    const {seller_id, searchText, searchBy, page, pageSize} = requestData;

    const skip = (page - 1) * pageSize;
    let totalCount =null;

    try{
            
      

        const matchCondition = {
            seller_id: new mongoose.Types.ObjectId(seller_id),
            save_as_draft:"1"
        };
        
        
        if (searchText && typeof searchText === 'string' && searchBy=="title") {
            matchCondition.product_name = { $regex: searchText, $options: "i" };
        }
        totalCount = totalData?.drafts || 0;
       
         
        const productListing = await productModel.aggregate([
            {
                $match: matchCondition
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
                        },
                        // Search `sku` inside productvariants
                        ...(searchText && typeof searchText === "string" && searchBy === "SKU"
                            ? [
                                {
                                    $match: {
                                        sku: { $regex: searchText, $options: "i" }  
                                    }
                                }
                            ]
                            : [])

                    ],
                    
                    as:"variants"
                }
            },
            {
                $unwind:{
                    path: "$variants",
                    preserveNullAndEmptyArrays:searchBy === "SKU" && searchText ?false:true
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
                $sort: { createdAt: -1 }
            },

            {
                $skip: skip
            },
            {
                $limit: pageSize
            }
           
         
        ]);
       
    let pagination= {
        totalCount,
        page,
        pageSize,
        // totalPages: 20,
        totalPages: Math.ceil(totalCount / pageSize),
    };
    
   
        return responseFun(true, {
            list:productListing, 
            pagination:pagination,
            totalData:totalData, 
        },200)

    }catch(error){
        console.log(error);
        return responseFun(false, {error:error},200)
    }
    
}

async function countTotalProduct(requestData){ 
    const {seller_id, searchText, searchBy, page, pageSize} = requestData;

    const matchCondition = {
        seller_id: new mongoose.Types.ObjectId(seller_id),
        save_as_draft: "1"
    };
    
    
    if (searchText && typeof searchText === 'string' && searchBy=="title") {
        matchCondition.product_name = { $regex: searchText, $options: "i" };
    }

 

   const published =  await productVariantModel.countDocuments({
                    $and:[
                        {seller_id: new mongoose.Types.ObjectId(seller_id)},
                        { listingStatus:1 }, 
                        { isProcessing:"Approved"},
                    ]
                });

     const unpublished =  await productVariantModel.countDocuments({
                    $and:[
                        {seller_id: new mongoose.Types.ObjectId(seller_id)},
                        { listingStatus:0 },
                        { isProcessing:"Approved"},
                    ]
                })

    //  const draftTotal =  await productModel.aggregate([
    //     {
    //         $match: matchCondition
    //     },
    //     {
    //         $lookup: {
    //             from: "productvariants",
    //             let: { productId: "$_id" },
    //             pipeline: [
    //                 {
    //                     $match: {
    //                         $expr: {
    //                             $and: [
    //                                 { $eq: ["$product_id", "$$productId"] },
    //                                 { $eq: ["$listingStatus", 1] }
    //                             ]
    //                         }
    //                     }
    //                 },
                  
    //             ],
    //             as: "variants"
    //         }
    //     },
    //     {
    //         $match: {
    //             variants: { $size: 0 }  // Only products where productvariants do not exist
    //         }
    //     },
       
    //     {
    //         $sort: {
    //             createdAt: -1
    //         }
    //     }
    // ]);
                
    const totalDraftCount =  await productModel.countDocuments(matchCondition)
    
    const  processing = await productVariantModel.countDocuments({
        $and:[
            {seller_id: new mongoose.Types.ObjectId(seller_id)},
            { listingStatus:1 }, 
            { isProcessing:"Processing"}, 
        ]
    })
    const result = await productModel.aggregate([
        {
          $match: {
            seller_id: new mongoose.Types.ObjectId(seller_id),
            save_as_draft: "0"
          }
        },
        {
          $lookup: {
            from: "productvariants",
            let: { productId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$product_id", "$$productId"] },
                      { $eq: ["$listingStatus", 1] },
                      { $eq: ["$isProcessing", "Processing"] }
                    ]
                  }
                }
              }
            ],
            as: "variants"
          }
        },
        {
          $match: {
            "variants.0": { $exists: true } // only include products with at least 1 matching variant
          }
        },
        {
          $count: "totalProcessing"
        }
      ]);
      
      const totalProcessing = result[0]?.totalProcessing || 0;
        // const totalDraftCount = draftTotal?.length || 0 ;
                
    const totalData = {
        published,
        unpublished,
        processing:totalProcessing,
        errors:0,
        drafts:totalDraftCount
    };
    return totalData

}


export async function POST(request) {
    
    try{
  return responseFun(false, "", 500)
    }catch(error){
        console.log(error);
        return responseFun(false, "", 500)
    }
}