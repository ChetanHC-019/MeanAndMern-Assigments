let names=['Tom','Ivan','Jerry']
var nameArray=[]

getNamesLength=()=>{
    for(let i of names){
        let Name=i;
        let len=i.length;
       let obj=new Object()
          obj.name=Name;
          obj.length=len;
          nameArray.push(obj)
 }

}

getNamesLength()
console.log(nameArray)