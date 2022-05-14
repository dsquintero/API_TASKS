const Model =  require('../models/user')

// var lst_user = [];

async function _getAll()
{
    const data  =  await Model.find({ status: true }).exec();
    return data;
}

async function _get(id)
{    
    const data  =  await Model.findById(id).exec() //{};
    return data;
}

async function _post(user)
{  
  const document = new Model(user)
  const data  =  await document.save();      
  return data;
}

async function _put(id,user)
{

    const data  = await Model.findByIdAndUpdate(id, user,{new: true})
    return data;
}

async function _delete(id)
{
  const data = _put(id,{status:false})
  return data  
}

  module.exports = {
    _getAll,
    _get,
    _post,
    _put,
    _delete
  }