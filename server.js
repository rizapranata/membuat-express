const express = require('express')
const app = express()
const port = 3000

//memanggil library body parser
const bodyParser = require("body-parser");
//confog body parser
app.use(bodyParser.urlencoded({ extended: true })); //menangkap type request dalam bentuk form urllencode
//menangkap url dalam bentuk json
app.use(bodyParser.json());

const Mongoose = require('./mongoModel/mongoConfig')
// const PersonModel = Mongoose.model("person",{
//     firstname : String,
//     lastname: String
// });
//commit -m "memanggil Mongoconfig dan membuat model PersonalModel sebagai
//penampung colection person"

app.get('/', (req, res) => res.send('Hello World'))

//membuat request post
//nama request first name , lastname
app.post('/hello', function (req, res) {
    const respon = {
        ststusCode: 200,
        error: "",
        message: "Hello Json",
        content: req.body
    }
    res.json(respon);
})

app.listen(port, () => console.log(`Express app listening on port ${port}!`))