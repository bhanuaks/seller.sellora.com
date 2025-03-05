import { connectDb } from '../../../../../lib/dbConnect';
import { brandModel } from '@/Http/Models/branModel';

export async function POST(req, res) {  
      try {
        const { brandId, status, remarks } = await req.json();
  
        if (!brandId) {
          return new Response(
            JSON.stringify({ success: false, message: 'Brand ID is required.' }),
            { status: 404 }
          );
        }
  
        await connectDb();
        const updatedBrand = await brandModel.findByIdAndUpdate(
          brandId,
          { status, remarks,approve_Date: new Date() },
          { new: true }
        );
  
        if (!updatedBrand) {
          return new Response(
            JSON.stringify({ success: false, message: 'Brand not found.' }),
            { status: 404 }
          );
        }
  
        return new Response(
            JSON.stringify({ success: true, message: updatedBrand }),
            { status: 200 }
          );
      } catch (error) {
        return new Response(
            JSON.stringify({ success: true, message: 'Error updating brand status' }),
            { status: 500 }
          );
      }
  }