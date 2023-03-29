exports.receive = (amqp) => {
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
  
    channel.assertQueue(queue, {
      durable: false,
    });

    channel.consume(queue,function (msg){
         console.log(" [x] Received %s", msg.content.toString());
    },{
            noAck: true
        });
  
  }
};
