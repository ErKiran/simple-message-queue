const amqp = require("amqplib");

const { QUEUE_NAME, RABBIT_URL } = process.env;

async function sendEvent(socket) {
  const connection = await amqp.connect(RABBIT_URL);
  const channel = await connection.createChannel();
  const queue = QUEUE_NAME;
  channel.assertQueue(queue, {
    durable: false,
  });

  channel.consume(
    queue,
    (msg) => {
      const message = JSON.parse(msg.content.toString());
      if (message.priority >= 7) {
        socket.emit("fetchMessage", message);
      }
    },
    {
      noAck: true,
    }
  );
}

module.exports = {
  sendEvent,
};
