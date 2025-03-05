import { isEmpty, rand, responseFun, slugify } from "@/Http/helper";
import path from 'path'
import { productModel } from "@/Http/Models/productModel";
import { Category } from "../../../../lib/categoryModel";
import { subCategory } from "../../../../lib/subcategoryModel";
import ChildCategory from "../../../../lib/childcategoryModel";

export async function GET(req) {
    try {
       
        const url = new URL(req.url);
        const category = url.searchParams.get('category');
        const subcategory = url.searchParams.get('subcategory');
        const childcategory = url.searchParams.get('childcategory');

        let query = {};
        
        if (category) {
            const categoryData = await Category.findOne({slug : category});
           
            if (categoryData) {
                query.category_id = categoryData._id;
            }else{
                return responseFun(true, { message: "No products found matching the filters." }, 404);
            }
        }
        
        if (subcategory) {
            const subcategoryData = await subCategory.findOne({ slug: subcategory });
            
            if (subcategoryData) {
                query.subcategory_id = subcategoryData._id;
            }else{
                return responseFun(true, { message: "No products found matching the filters." }, 404);
            }
        }
        
        if (childcategory) {
            const childcategoryData = await ChildCategory.findOne({ slug: childcategory });
            if (childcategoryData) {
                query.childcategory_id = childcategoryData._id;
            }else{
                return responseFun(true, { message: "No products found matching the filters." }, 404);
            }
        }
        
        const products = await productModel.find(query);
        
        if (!products || products.length === 0) {
            return responseFun(true, { message: "No products found matching the filters." }, 404);
        }
       
        return responseFun(true, products, 200);
          
      } catch (error) {
       return responseFun(false, {message:"An error occurred while fetching products"}, 500)
    }
}
