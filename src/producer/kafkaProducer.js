const kafkaClient = require("../config/kafkaClient");

const producer = kafkaClient.producer();

await producer.connect();
await producer.send({
  topic: "test-topic",
  messages: [
    { value: "Hello KafkaJS user!" },
    { value: "Hello this msg from kafka producer side!" },
  ],
});

await producer.disconnect();
