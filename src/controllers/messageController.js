const  Message = require('../models/messageModel')

const getMessages =async (req,res)=>{
try { 
	const messages =await Message.find();
	res.json(messages);


}  catch (err) {
res.status(500).json({error :'fel meddelande'});
}
