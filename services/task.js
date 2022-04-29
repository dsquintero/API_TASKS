var lst_task = [];

async function _getAll()
{
  return lst_task;
}

async function _get(id)
{
  return lst_task.find(w => w.id == id);
}

async function _post(task)
{
  lst_task.push(task)
  return task.id;
}

async function _put(id,task)
{
  var item = lst_task.find(w => w.id == id)
  item.description = task.description;
  item.author = task.author;
  item.updatedAt = new Date();
  return item;
}

async function _delete(id)
{
  const index = lst_task.findIndex(w=> w.id == id);
  if (index > -1) {
    lst_task.splice(index, 1); // 2nd parameter means remove one item only
  }
  return lst_task;
}

  module.exports = {
    _getAll,
    _get,
    _post,
    _put,
    _delete
  }