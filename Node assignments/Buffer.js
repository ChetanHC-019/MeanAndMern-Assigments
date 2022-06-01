const { buffer } = require("stream/consumers");

var buff=new Buffer.alloc(7);
buff.write('yuvaraj');
console.log(buff.toString('utf-8'));
console.log(buff.toString('utf-8',0,4));
//console.log(buff.toJson('nodejs'));
//buffer.copy()
var dupbuff=new Buffer.alloc(7);
buff.copy(dupbuff,0,0,6) 
console.log(dupbuff.toString('utf-8'));