

userFriends=(username,...friendArray)=>{
console.log(username,friendArray)
}

 let array=["ram","Bheem","soma"]

userFriends("Vishwa",...array)


//problem 5)c

printCapitalNames=(...names)=>{
    for(let i of names){
     console.log(i.toUpperCase())
    }
  
}

let allNames=["john","peter","steven","chris","robert"]
printCapitalNames(...allNames)



