const _mongoose =  require('mongoose')

const fields = {
    id: Number,
    description: String,
    author: Number,
    createdAt: Date,
    updatedAt: Date     
}

module.exports = _mongoose.model('task', fields)