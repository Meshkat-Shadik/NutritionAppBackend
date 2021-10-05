const axios = require("axios");

const landingPageController = (req, res) => {
  res.status(200).json({
    data: "Hello",
  });
};

const requestAPI = (req, res) => {
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
};

module.exports = {
  landingPageController,
  requestAPI,
};
