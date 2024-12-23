const NewsLetter = require("../models/newsLetter");

const subscribe = async (req, res) => {
  const email = req?.body?.email;
  try {
    const data = await NewsLetter.create({ email });
 setTimeout(()=>{
    res.status(201).json({
        message: "Subscribed to newsletter successfully",
        data,
      });
},2000)

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};


const  getSubscribe = async (req, res) => {
  
  try {
    const { page = 1, perPage = 10, sortBy = 'createdAt', order = 'desc', search = '',status } = req.query;

    const query = {
      ...(search && { email: new RegExp(search, 'i') }),
      ...(status && { status }),
    };

    const options = {
      page: parseInt(page, 10),
      limit: parseInt(perPage, 10),
      sort: { [sortBy]: order === 'desc' ? -1 : 1 }
    };

    const data = await NewsLetter.paginate(query, options);;
    
    

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error?.message ?? "Something went wrong !" });
  }
};

const updategetSubscribeStatus = async (req, res) => {
  console.log('updateUserStatus');
  
  const { SubscribeId, newStatus } = req.body;
  console.log(SubscribeId, newStatus);
  
  try {
    const subscribe = await NewsLetter.findById(SubscribeId);
    if (!subscribe) {
      return res.status(404).json({ message: 'subscribe not found' });
    }
    if(newStatus){
      subscribe.status = !subscribe?.status;
    }

    
    await subscribe.save();

    res.status(200).json({ message: 'user subscribe status updated successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error?.message ?? 'Something went wrong' });
  }
};



module.exports = {
  subscribe,
  updategetSubscribeStatus,
  getSubscribe
};
