const amqp = require("amqplib");
const faker = require("faker");

const { QUEUE_NAME, RABBIT_URL } = process.env;

async function Publish() {
  const connection = await amqp.connect(RABBIT_URL);
  const channel = await connection.createChannel();
  const queue = QUEUE_NAME;
  setInterval(() => {
    const msg = {
      message: faker.hacker.phrase(),
      timestamp: new Date(),
      priority: Math.floor(Math.random() * 11),
    };
    channel.assertQueue(queue, {
      durable: false,
    });
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));
    
  },50);
}

Publish()