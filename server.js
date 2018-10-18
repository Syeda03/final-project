const express =require ("express");
const mongoose = require ("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require('path');
const users = require("./routes/api/users");
const cart = require("./routes/api/cart");
const payment = require("./routes/api/payment");


//initiallizing app
const app = express();
app.use(require("body-parser").text());
//Body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'client/build')));
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
})
//DB Config
const db = require("./config/keys").mongoURI;

//connectto MongoDB
mongoose
    .connect(db)
    .then(()=> console.log("Mongodb Connected"))
    .catch(err=> console.log(err));

//passport middleware
app.use (passport.initialize());



//passport Config
require("./config/passport")(passport);

//Use Routes
app.use("/api/users",users);
app.use("/api/cart",cart);
app.use("/api/payment",payment);

app.use("/api/payment",payment);



const port = process.env.PORT || 5000;

app.listen(port,() => console.log(`Server running on ${port}`));
