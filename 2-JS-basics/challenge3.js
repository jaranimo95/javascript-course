function tipCalculator(bill) {
    var tip
    if(element < 50) tip = 0.2
    else if(element >= 50 && element <= 200) tip = 0.15
    else tip = 0.1
    return tip * bill
}

var bills = [250,170,48]
let tips = [], totals = []
bills.forEach(element => {
    let tipAmt = tipCalculator(element)
    tips.push(tipAmt)
    totals.push(tipAmt + element)
})
console.log(tips)
console.log(totals)