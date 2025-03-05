import { dynamincOtp, isEmpty, responseFun } from "@/Http/helper";
import { sellerModel } from "@/Http/Models/sellerModel";
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDb } from "../../../../../../lib/dbConnect";
import { userModal } from "@/Http/Models/userModel";
// import { userModal } from "@/Http/Models/userModel";
 

export async function POST(request) {
    await connectDb()
    const {email, mobile, otp} = await request.json();
    const errors = {}
      if(isEmpty(otp))errors.otp = "otp is required"
      if(Object.keys(errors).length>0){
          return responseFun(false,{errors, status_code:403},200)
       }


        try{

            const otpData1 = request.cookies.get('user_otp');  
            const otpData = otpData1 ? JSON.parse(otpData1.value) : null;
            if(!otpData){
                errors.otp = "OTP has been expired."
                return responseFun(false,{errors, status_code:403, otpData1, otpData},200)
            }

            
            if(otpData && otpData.otp_for == "Login" && otpData.otp == otp){
               const user = await userModal.findOne({ email: email }) 
                if(user){ 

                    user.lastloginTimeDate = new Date();
                    await user.save();

                    const token = jwt.sign({
                        user:user
                    },process.env.JWT_SECRET) 
                    const response = NextResponse.json({
                        message:"Login Success",
                        status:true,
                        user:user
                    },  { status: 200 }); 
            
                    response.cookies.set('sellerAuthToken',token,{
                        expireIn:"1d",
                    });
                    response.cookies.set('user_otp','',{
                        maxAge:"0",
                    });
            
                    return response;
                }else{
                    return responseFun(false,{message:"something went wrong. please login again."},200)
                }
               
            }else{
                errors.otp = "invalid OTP"
                return responseFun(false,{errors, status_code:403},200)
            }
       
           }catch(error){
               console.log(error);
               return responseFun(false,{error},200)
       
           }
}