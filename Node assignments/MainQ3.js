var StuDetail={
    name:'manish',
    id:'1oX18',
    age:22,
    getDetails:function(){
      return (this.name+this.id+this.age);
    },
},
var StuMark={
    mathematics:55,
    science:67,
   social:77,
    getMarks:function(){
 
       return ("math->"+this.mathematics+" science->"+this.science+"social->"+this.social);
    },
},
var Stufav={
    color:'red',
    food:'idly',
    destination:'mysore',
    getFav:function(){
    
        return ("color->"+this.color+" food->"+this.food+" destination->"+this.destination);
    },
}

module.exports=StuDetail;
module.exports=StuMark;
module.exports=Stufav;
