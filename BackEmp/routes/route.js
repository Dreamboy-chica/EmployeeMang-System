let express=require("express")
const { add, getbyid, getdata, sortdata } = require("../controler/rscont")
let route=new express.Router()
route.post("/add",add)
route.get("/getbyid/:hno",getbyid)
route.get("/getdata",getdata)
route.get("/sortdata/:colname",sortdata)
module.exports=route