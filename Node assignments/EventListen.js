const e=require('events');
const file=require('./Eventemit');
const listner=new file();

listner.on('trig',function(scale){
    console.log('Movie-->',scale);
});

listner.on('trig1',function(scale){
    console.log('Movie-->',scale);
});

listner.Details();