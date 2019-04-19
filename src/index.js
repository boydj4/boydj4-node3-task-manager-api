const express = require('express');
require('./db/mongodb');
const app = express();
const port = process.env.PORT || 3000;

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

// const multer = require('multer');
// const upload = multer({
//   dest: 'images'
// });

// app.post('/upload', upload.single('upload'), (req, res) => {
//   res.send();
// });

app.use(express.json());

app.use(taskRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
