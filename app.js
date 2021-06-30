 const express = require('express');
 const app = express();
 const port = 3000;
const homeRouter = require('./routes/homeRouter');
const  userRouter = require('./routes/userRouter');

app.set('view engine', 'ejs')

app.use(express.static('public'));
app.use('/', homeRouter);
app.use('/user', userRouter);

 app.listen(port, () => {
     console.log(`Server started on port`);
 });