import { connectDb } from '../../../../../lib/dbConnect';
import { brandModel } from '@/Http/Models/branModel';


export async function GET(req) {
    try {
        await connectDb();

        const url = new URL(req.url);
        const brandModule = url.searchParams.get('brand_module');
        const query = brandModule ? { status: brandModule } : {};

        const brandList =  await brandModel.find(query).sort({
          createdAt : -1
            }).populate('seller_id', '_id name');

        const brandNameList = await brandModel.find(query).select('name').sort({
          name: 1
        });

            return new Response(
                JSON.stringify({
                    success : true,
                    data    : brandList,
                    brandNameList:brandNameList
                }),
                { status: 200 }
              );

    }catch(error){
        console.error('Error fetching brand brand:', error);
        return new Response(
          JSON.stringify({
            success: false,
            message: 'Error fetching brand',
            error: error.message,
          }),
          { status: 500 }
        );
    }
}