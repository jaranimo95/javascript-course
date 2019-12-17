function avg(tot) {
    var sum = 0
    tot.forEach(val => {
        sum += val
    })
    return sum/tot.length
}

var john = {
    bills: [124,48,268,180,42],
    tips: [],
    totals: [],
    calcTip: function() {
        this.bills.forEach(bill => {
            var tipPerc
            if(bill < 50) tipPerc = 0.2
            else if(bill >= 50 && bill <= 200) tipPerc = 0.15
            else tipPerc = 0.1
            let tip = tipPerc * bill
            this.tips.push(tip)
            this.totals.push(tip + bill)
        })
    }
}

var mark = {
    bills: [77,375,110,45],
    tips: [],
    totals: [],
    calcTip: function() {
        this.bills.forEach(bill => {
            var tipPerc
            if(bill < 100) tipPerc = 0.2
            else if(bill >= 100 && bill <= 300) tipPerc = 0.1
            else tipPerc = 0.3
            let tip = tipPerc * bill
            this.tips.push(tip)
            this.totals.push(tip + bill)
        })
    }
}

john.calcTip()
mark.calcTip()
console.log("John Tip Amts: " + john.tips + "\nMark Tip Amts: " + mark.tips)
console.log("John Totals: " + john.totals + "\nMark Totals: " + mark.totals)
console.log("John Avg: " + avg(john.totals) + "\nMark Avg: " + avg(mark.totals))