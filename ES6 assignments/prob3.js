

let object={
   id:"1o13",
   title:"Light Bulb",
   price:100,

   printOrder(){
     console.log(Object)
   },

   getPrice(){
     console.log(this.price)
   }
}


// object.printOrder()
// object.getPrice()
// object.title

let new_obj= Object.assign(object)
new_obj.getPrice()