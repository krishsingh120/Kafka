const kafkaClient = require("../config/kafkaClient");

const producer = kafkaClient.producer();

const addProducer = async (msgPayload) => {
  await producer.connect();
  console.log("kafka producer connected");

  await producer.send({
    topic: "test-topic",
    messages: msgPayload,
  });

  console.log("kafka producer added successfully!");

  // await producer.disconnect();
};

module.exports = addProducer;
