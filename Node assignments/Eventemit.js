const EventEmitter=require('events')
class movie extends EventEmitter
 {
     Details(){
    this.emit('trig',{name:'The Batman',director:'Matt Reeves',review:'good'})
    this.emit('trig2',{name:'The Batman',director:'Matt Reeves',review:'avg'})
     }
}
module.exports=movie;