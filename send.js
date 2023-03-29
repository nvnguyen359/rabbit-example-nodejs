exports.send = (amqp) => {
  amqp.connect("amqp://localhost", (error, connection) => {
    if (error) throw error;
    connection.createChannel(callbackCreateChannel);
    setTimeout(function () {
      connection.close();
      process.exit(0);
    }, 500);
  });
  function callbackCreateChannel(error, channel) {
    if (error) throw error;
    let queue = `hello`;
    let msg = "Hello word";
    channel.assertQueue(queue, {
      durable: false,
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
  }
};
