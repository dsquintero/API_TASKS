const _mongoose =  require('mongoose')

const fields = {
    firstname: String,
    lastname: String,
    email:{ type:String, unique:true },
    status: Boolean,
    createdAt: Date,
    updateAt: Date     
}

module.exports = _mongoose.model('user', fields)