const mongoose = require('mongoose');
// MxM6pNLYPRYtVJYB

mongoose
  .connect(process.env.MONGODB_KEY, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .catch(() => {
    console.log("Couldn't connect to database");
  });
