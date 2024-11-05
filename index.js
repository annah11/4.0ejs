import express from "express";



const app = express();
const port = 3000;


app.get("/", (req, res) => {
    const today = new Date("november 2 ,2024 11:12:01");
    const day = today.getDay();
    // console.log(day)

    let type = "a weekday";
    let adv = "Its's a day to work hard ";

    if (day === 0 || day === 6) {
        type = "weekend";
        adv = "It's a day to relax and enjoy your weekend ";
    }

    res.render('index.ejs', {
        dataType:type,
        advice:adv,});
    });
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
