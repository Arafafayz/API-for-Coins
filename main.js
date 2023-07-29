fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=5242b27a673c4739957aa58d12384c11")
.then( (result)=>{
    console.log(result)
    let mydata = result.json()
    console.log(mydata)
    return mydata
}).then((currency)=>{
    // console.log(currency.rates)
let amount =document.querySelector(".amount")
let egyprice =document.querySelector(".egp span")
let sarprice =document.querySelector(".sar span")

egyprice.innerHTML =Math.round(amount.innerHTML * currency.rates["EGP"])
sarprice.innerHTML =Math.round(amount.innerHTML * currency.rates["SAR"])


    console.log(currency.rates["EGP"])
    console.log(currency.rates["SAR"])
})