const mongoose = require("mongoose")
 const schema = require("../schemas/messageSchema.js")
const messagesSchema = new mongoose.Schema(schema,{timestamps:true})

module.exports=mongoose.model("Message",messagesSchema)
