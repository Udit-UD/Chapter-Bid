import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const TokenSchema = new Schema(
    {
        userId:{
            type:Schema.Types.ObjectId,
            required:true,
            ref:"User",
            unique:true,
        },
        token:{
            type:String,
            required:true,
        },
        createdAt:{
            type:Date,
            default:Date.now(),
            expires:3600,// 1 hour 
        }
    },
    { timestamps: true }
  );
  
export default mongoose.model("Token", TokenSchema);