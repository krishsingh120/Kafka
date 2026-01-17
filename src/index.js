const express = require("express");

const { PORT } = require("./config/serverConfig");
const addProducer = require("./producer/kafkaProducer");
const readConsumer = require("./consumer/kafkaConsumer");

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);

  addProducer([
    { value: "Hello KafkaJS user!" },
    { value: "Hello this msg from kafka producer side!" },
  ]);

  readConsumer();
});
