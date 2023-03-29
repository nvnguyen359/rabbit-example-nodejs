var amqp = require("amqplib/callback_api");
require("./send.js").send(amqp);
setTimeout(() => {
    console.log('ok')
  require("./receive.js").receive(amqp);
}, 200,amqp);
