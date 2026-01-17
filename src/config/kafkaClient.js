const { Kafka, logLevel } = require("kafkajs");


// First run kafka on docker
const kafkaClient = new Kafka({
  clientId: "my-kafka-app",
  brokers: ["localhost:9092"],
  logLevel: logLevel.ERROR
});

module.exports = kafkaClient;
