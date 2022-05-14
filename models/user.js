const _mongoose =  require('mongoose')

const fields = {
    firstname: String,
    lastname: String,
    status: Boolean,
    createdAt: Date,
    updateAt: Date     
}

module.exports = _mongoose.model('user', fields)