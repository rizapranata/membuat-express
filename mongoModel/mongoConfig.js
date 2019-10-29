//memanggil library mongoose
const Mongoose = require("mongoose"); 
//mengoneksikan ke dbm mongo
Mongoose.connect('mongodb://localhost:27017/belajarmongo')
//export module mongoose
module.exports = Mongoose;

//comit -m "Confog mongo dan coneksi ke DB"