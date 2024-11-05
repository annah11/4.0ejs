import express from "express";



const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.render('index.ejs', {
        dataType:"a weekday",advice:"Its's a day to work hard "});
    });
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
