let organisation={
    Name:"ZZ.corp",
    address:{
        street:"Church street",
        area:"Fraser Town",
        district:"Banglore",
        pincode:500828
    }
}

let {Name,address}=organisation

console.log(Name)
console.log(`${address.district} ${address.pincode}`)

