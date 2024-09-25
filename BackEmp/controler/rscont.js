const Emp = require("../model/resmodel");

let add=async(req,res)=>{
    try{
        let data=new Emp(req.body)
        await data.save()
        res.json({"msg":"Data has been added..."})

    }
    catch(err)
    {
        res.json({"err":"Error in Storing Data..."})
    }
}


let getbyid = async (req, res) => {
  try {
    let obj = await Emp.findById({ _id: req.params.hno });
    res.json(obj);
  } catch (err) {}
};
let getdata = async (req, res) => {
  try {
    let data = await Emp.find();
    res.json(data);
  } catch (err) {}
};
let sortdata = async (req, res) => {
  try {
    let data = await Emp.aggregate([{ $sort: { [req.params.colname]: 1 } }]);
    res.json(data);
  } catch (err) {}
};
module.exports = { add, getbyid, getdata, sortdata };
