//memanggil library mongoose
const Mongoose = require("mongoose"); 
//mengoneksikan ke dbm mongo
Mongoose.connect('mongodb://localhost/belajarmongo')
//export module mongoose
module.exports = Mongoose;

//comit -m "Confog mongo dan coneksi ke DB"