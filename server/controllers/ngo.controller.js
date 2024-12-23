const NgoInfo = require('../models/ngo.info')


const createNgo =  async (req, res) => {
    try{
      // to create an entry of ngo info
          const ngo = await NgoInfo.create(req.body);
          res.status(200).json(ngo);
          console.log(ngo);
     }
     catch(error){
         res.status(500).json({message : error.message});
     }
}
const getNgoById = async (req, res) => {
    try {
      const ngo = await NgoInfo.findById(req.params.id);
      if (!ngo) return res.status(404).json({ message: 'NGO not found' });
      res.json(ngo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}
const getNgo =  async (req,res)=>{
    try{
       const ngo =  await NgoInfo.find({});
       res.status(200).json(ngo);
    }catch(error){
        res.status(500).json({message : error.message});
    }
}
const updateNgo =  async (req,res)=>{
    try{
       const {id} = req.params; 
       const ngo =  await NgoInfo.findByIdAndUpdate(id, req.body);
       if(!ngo){
        return res.status(404).json({message :"NGO not found"})
       }
       const updatedNgo  = await NgoInfo.findById(id); 
       res.status(200).json(updatedNgo);
    }catch(error){
        res.status(500).json({message : error.message});
    }
}

const deleteNgo = async (req,res)=>{
    try{
       const {id} = req.params; 
       const ngo =  await NgoInfo.findByIdAndDelete(id);
       if(!ngo){
        return res.status(404).json({message :"NGO not found"})
       }
       res.status(200).json({message : "NGO Deleted Successfully!"})

    }catch(error){
            res.status(500).json({message : error.message});
    }
}


module.exports = {
    createNgo,
    getNgoById,
    getNgo,
    updateNgo,
    deleteNgo,
}