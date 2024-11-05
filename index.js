import express from 'express';


const app = express();
const port = 3000;

app.get("/", (req, res) => {

    const today = new Date("nov 2 2024 11:23:01");
    const day = today.getDay();
    // console.log(day);
    let type = "weekday";
    let adv =" a day to work hard";

    if (day === 0|| day === 6){
        type = "weekend";
        adv = "a day to relax and enjoy the sunshine";
    }

    res.render("index.ejs", {
        dataType:type,
        advice:adv,
        });

});

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});