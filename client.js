const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });

  conn.on('connect', () => {
    console.log('connected to server');
  });
  conn.on('connect', () => {
    conn.write("Name: JDS");
  });
  // conn.on('connect', () => {
  //   conn.write("Move: up")
  // });
  
  return conn;
};




module.exports = connect