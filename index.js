const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.listen(PORT, () => console.log(`I'm ready on port: ${PORT}`));

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tShirt: "👕",
    size: "large",
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;
  console.log("req", req);

  if (!logo) {
    res.status(418).send({ message: "we need a logo!!!" });
  }

  res.send({ tshirt: `👕 with your logo ${logo} and id ${id}` });
});
