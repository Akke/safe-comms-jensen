const express= require("express");
const { deleteuser } = require("../controllers/deleteController");
const router= express.Router();
const {
    deleteuser,
} = require("../controller/controller");

router.delete("/:text_id" , deleteuser) ;

module.exports =  router ; 