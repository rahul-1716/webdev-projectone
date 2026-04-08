import mongoose from "mongoose";

const demoSchema = new mongoose.Schema(
    {
        username : {
            type : String,
            required : true,
            lowercase : true,
        },
        email : {
            type : String,
            required : true,
            lowercase : true,
        }
    },
    {timestamps : true}
)

export const Demo = mongoose.model("DemoData", demoSchema)