const { Kafka } = require("kafkajs");

const kafkaClient = new Kafka({
  clientId: "my-kafka-app",
  brokers: ["kafka1:9092", "kafka2:9092"],
});

module.exports = kafkaClient;
