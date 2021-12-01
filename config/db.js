const mongoose = require("mongoose");
const a =
    "mongodb+srv://Truse31:xw2c6PdohDUfdd5E@cluster0.067i7.mongodb.net/bacefook?authSource=admin&replicaSet=atlas-vahk00-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
mongoose
    .connect("mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.067i7.mongodb.net/bacefook", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect to MongoDB", err));
