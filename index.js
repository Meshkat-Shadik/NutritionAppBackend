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
        .then((resposne) => res.status(200).json(resposne.data));
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







/*
 "items": [
        {
            "sugar_g": 20.6,
            "fiber_g": 4.7,
            "serving_size_g": 200,
            "sodium_mg": 2,
            "name": "apple",
            "potassium_mg": 22,
            "fat_saturated_g": 0.1,
            "fat_total_g": 0.3,
            "calories": 105.9,
            "cholesterol_mg": 0,
            "protein_g": 0.5,
            "carbohydrates_total_g": 28.1
        }
    ]
    */