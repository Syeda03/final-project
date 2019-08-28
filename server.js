const express =require ("express");
const mongoose = require ("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require('path');
const users = require("./routes/api/users");
const cart = require("./routes/api/cart");
const payment = require("./routes/api/payment");
// const routes = require("./routes")


//initiallizing app
const app = express();
const PORT = process.env.PORT || 3001;

app.use(require("body-parser").text());

//Body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

}

//passport middleware
app.use (passport.initialize());

//passport Config
require("./config/passport")(passport);

//Use Routes
app.use("/api/users",users);
app.use("/api/cart",cart);
app.use("/api/payment",payment);

//DB Config
const db = require("./config/keys").mongoURI;
//connectto MongoDB
mongoose
    .connect(db)
    .then(()=> console.log("Mongodb Connected"))
    .catch(err=> console.log(err));

// app.use("/api/payment",payment);

//server static assets if in production


  // app.use(routes);
// const port = process.env.PORT || 5000;


// app.listen(port,() => console.log(`Server running on ${port}`));
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});