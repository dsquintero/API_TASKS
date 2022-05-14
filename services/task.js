const Model =  require('../models/task')

async function _getAll()
{
  const data  =  await Model.find().populate('author').exec();
  return data;
}

async function _get(id)
{
  const data  =  await Model.findById(id).populate('author').exec() //{};
  return data;
}

async function _post(task)
{  
  const document = new Model(task)
  const data  =  await document.save();      
  return data;
}

async function _put(id,task)
{
  const data  = await Model.findByIdAndUpdate(id, task,{new: true});
  return data;
}

async function _delete(id)
{
  const data  = await Model.findByIdAndDelete(id);
  return data;
}

  module.exports = {
    _getAll,
    _get,
    _post,
    _put,
    _delete
  }