import express from "express";

const app = express();
const port = 4000;

app.use("/", (req, res) => {
  res.send("Hello from Node.js");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});