// dependancies
const { urlencoded } = require("express");
const express = require("express");
const mongoose = require("mongoose");

// express
const PORT = process.env.PORT || 3000;
const app = express();
// middleware express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// mongo db
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workouts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);
// routes
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));
// start server
app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`);
});

