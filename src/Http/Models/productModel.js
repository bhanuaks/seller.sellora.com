const { Schema, default: mongoose } = require("mongoose");

const productSchema = new Schema({
    category_id:{
        type:mongoose.Types.ObjectId,
        ref:"Category",
        required:[true, "Category is required"]
    },

    seller_id:{
        type:mongoose.Types.ObjectId,
        ref:"Sellor", 
    },
    subcategory_id:{
        type:mongoose.Types.ObjectId,
          ref:"subCategory",
          required: false,
          default: null,
    },
    childcategory_id:{
        type:mongoose.Types.ObjectId,
        ref:"ChildCategory",
        required: false,
        default: null,
    },
    brand_id:{
        type:mongoose.Types.ObjectId,
        ref:"Brand",
        required:[true, "Brand is required"]
    },
    product_name:{
        type:String,
        required:[true, "Product name is required"]
    },
    slug:{
        type:String
    },
    product_id_type:String,
    product_description:String,
    key_feature:[{
        type:String
    }],
    search_keywords:String,
    target_gender:String,
    age_range:Number,
    material:String,
    model_name:String,
    model_number:String,
    manufacture_part_number:String,
    safety_warning:String,
    country_of_origin:String,
    manufacturer_details:String,
    packer_details:String,
    importer_details:String,
    image_1:{
        type:String,
        default:null
    }, 
    image_2:{
        type:String,
        default:null
    }, 
    image_3:{
        type:String,
        default:null
    }, 
    image_4:{
        type:String,
        default:null
    }, 
    main_image:{
        type:String,
        default:null
    },
    dynamicFields:{
        type:Array,
        default:[]
    },
    keyAttributes:{
        type:Array,
        default:[]
    },
    listingStatus:{
        type:Number,
        enum:[0, 1, 2] ,// 0=>Deactive, 1=>Active, 2=> Draft
        default:2,
    },

    currency:{
        type:String,
        default:"USD"
    },
    taxCode: {
        type:String,
        default:null,
    },
    taxRate:{
        type:Number,
        default:'',
    },
    fulfillmentBy:{
        type:String,
        default:"Sellora",
    },
    shippingProvider:{
        type:String,
        default:"Merchant",
    },
    variant:{
        type:String,
        default:"Yes"
    },

    packageWeight:String,
    packageBreadth:String,
    packageHeight:String,
    packageLength:String

},{timestamps:true})


export const productModel = mongoose.models.Product || mongoose.model("Product", productSchema) 



const productOtherDetailsSchema = new Schema({
    product_id:{
        type:mongoose.Types.ObjectId,
        ref:"Product"
    },
    fit_type:String,
    outer_material:String,
    fabric_type:String,
    fabric_description:String,
    features:String,
    instruction_of_use:String,
    fabric_regulations:String,
    pattern:String,
    dangerous_goods_regulations:String,
    safety_warning:String,
    has_written_warranty:String,
    contains_an_electronic_component:String, 
    product_is_or_contains_this_battery_type:String
},{timestamps:true})


export const productOtherDetailModel = mongoose.models.ProductOtherDetails || mongoose.model("ProductOtherDetails", productOtherDetailsSchema) 

const productVariantSchema = new Schema({
    seller_id:{
        type:mongoose.Types.ObjectId,
        ref:"Sellor", 
        default:null,
    },
    product_id:{
        type:mongoose.Types.ObjectId,
        ref:"Product"
    },
    sku:{
        type:String,
        required:[true, "sku is required"]
    },
    listingStatus:{
        type:Number,
        enum:[0, 1, 2,3,4] // 0=>Deactive, 1=>Active, 2=> Draft, 3=>Archive, 4=>Delete
    },
    msrp:Number,
    consumerSalePrice:Number,
    businessSalePrice:Number,
    currency:String,
    taxCode:String,
    taxRate:String,
    fulfillmentBy:String,
    shippingProvider:String,
    stock:{
        type:Number,
        default:0
    },
    customAttributes:{
        type:Object,
        required:[true, "customAttributes required"]
    },
    discount_type:{
        type:String,
        default:"percentage"
    },
    withImage:String,
    image_1:{
        type:String,
        default:null,
    }, 
    image_2:{
        type:String,
        default:null,
    },
    image_3:{
        type:String,
        default:null,
    }, 
    image_4:{
        type:String,
        default:null,
    }, 
    stock_status:{
        type:String,
        default:"In Stock",
    }
},{timestamps:true})

export const productVariantModel = mongoose.models.ProductVariant || mongoose.model("ProductVariant", productVariantSchema)


const variantThresholdSchema = new Schema({ 
    product_id:{
        type:mongoose.Types.ObjectId,
        ref:"Product"
    },
    variant_id:{
        type:mongoose.Types.ObjectId,
        ref:"ProductVariant"
    },
    seller_id:{
        type:mongoose.Types.ObjectId,
        ref:"Sellor", 
        default:null,
    },

    unit:{
        type:Number,
        default:null,
    },
    discount:{
        type:Number,
        default:null,
    },
}, {timestamps:true})

export const variantThresholdSchemaModal = mongoose.models.VariantThreshold || mongoose.model("VariantThreshold", variantThresholdSchema) 


const thresholdSchema = new Schema({ 
        product_id:{
            type:mongoose.Types.ObjectId,
            ref:"Product"
        },
        quantity_base_discount:{
            type:Number,
            default:null,
        },
        type_threshold_levels_1_unit:{
            type:Number,
            default:null,
        },
        threshold_levels_1_discount:{
            type:Number,
            default:null,
        }, 
        threshold_levels_2_unit:{
            type:Number,
            default:null,
        },
        threshold_levels_2_discount:{
            type:Number,
            default:null,
        }, 
        threshold_levels_3_unit:{
            type:Number,
            default:null,
        },
        threshold_levels_3_discount:{
            type:Number,
            default:null,
        }, 
        threshold_levels_1_fixed_price:{
            type:Number,
            default:null,
        },
        threshold_levels_2_fixed_price:{
            type:Number,
            default:null,
        },
        threshold_levels_3_fixed_price:{
            type:Number,
            default:null,
        },
}, {timestamps:true})

export const productThresholdModel = mongoose.models.ProductThreshold || mongoose.model("ProductThreshold", thresholdSchema) 