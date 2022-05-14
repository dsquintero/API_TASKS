const Model =  require('../models/user')

// var lst_user = [];

async function _getAll()
{
  return lst_user;
}

async function _get(id)
{
  return lst_user.find(w => w.id == id);
}

async function _post(user)
{  
  const document = new Model(user)
  const data  =  await document.save();      
  return data;
}

async function _put(id,user)
{
  var item = lst_user.find(w => w.id == id)
  item.description = user.description;
  item.author = user.author;
  item.updatedAt = new Date();
  return item;
}

async function _delete(id)
{
  const index = lst_user.findIndex(w=> w.id == id);
  if (index > -1) {
    lst_user.splice(index, 1); // 2nd parameter means remove one item only
  }
  return lst_user;
}

  module.exports = {
    _getAll,
    _get,
    _post,
    _put,
    _delete
  }