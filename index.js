const express = require("express");
const app = express();
const axios = require("axios");
const dotenv = require("dotenv");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();
const port = process.env.PORT || 3002;

app.get("/", (req, res) => {
    res.status(200).json({
        data: "Hello",
    });
});

app.post("/test/:name", (req, res) => {
    let config = {
        headers: {
            "X-Api-Key": process.env.apiKey,
        },
    };
    //res.status(200).json(req.params.name);
    axios
        .get(process.env.uri + req.params.name, config)
        .then((resposne) => res.status(200).json(resposne.data))
        .catch((ex) => console.log(ex));
});

app.get("/test/:name", (req, res) => {
    res.status(200).send("You must've use post method to do this request!!");
});

app.use(errorHandler);
//default error handler
function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    if (err instanceof multer.MulterError) {
        res.status(500).json({ error: err });
    }
    res.status(500).json({ error: err, message: err.message });
}

app.listen(port, () => {
    console.log("App listening at port " + port);
});