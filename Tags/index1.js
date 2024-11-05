import express from 'express';
const app = express();
const port = 3000;

let bowl = [ "apple","orange","mango"]


app.get('/' , (req, res) => {
    res.render('index1.ejs', {fruits: bowl});
});

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});