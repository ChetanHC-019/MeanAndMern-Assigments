const { skipPartiallyEmittedExpressions } = require("typescript")

class Account{
 id=""
 name=""
 balance=0

}


class savingsAccount extends Account{
        interest=0.05

        totalBalance(){
            console.log(`${this.name} balance remaining is ${this.balance+this.balance*this.interest}`)
        }
}


class currentAccount extends Account{
        cash_credit=3
           totalCredit(){
            console.log(this.balance*this.cash_credit)
        }
}

let sa1=new savingsAccount()
sa1.id="1sbi1922"
sa1.name="mahesh"
sa1.balance=35000

sa1.totalBalance()