const kafkaClient = require("../config/kafkaClient");

const consumer = kafkaClient.consumer({ groupId: "test-group" });

const readConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "test-topic", fromBeginning: false });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      });
    },
  });

  console.log("kafka consumer subscribe successfully!");
};

module.exports = readConsumer;
