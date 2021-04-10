const express = require('express');
const app = express();
const path = require('path');
const port = 80;
const fs = require('fs');

// EXPRESS SPECIFIC STUFF 
app.use('/static', express.static('static'));
app.use(express.urlencoded());


// PUG SPECIFIC STUFF 
app.set('view engine', 'pug');
app.set('views' , path.join(__dirname, 'views') )

// END POINTS
app.get('/', (req, res)=>{
  res.status(200).render('index.pug');
})

app.post('/', (req , res )=>{
  age = req.body.age
  _name = req.body.name
  gender = req.body.gender
  address = req.body.address
  more = req.body.more 
  let outputToWrite = `the name of the client is ${_name}, ${age}, ${gender}, ${address}, ${more}`;
  fs.writeFileSync('output.txt', outputToWrite);
  const vars = {'message': 'Your Form has been submitted Successfully'}
  res.status(200).render('index.pug',vars) 
} )

// START THE SERVER
app.listen(port, ()=>{
    console.log(`This app started  successfully on port ${port}`);
});
