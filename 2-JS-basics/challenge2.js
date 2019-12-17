var mark = []
var john = []
var mary = []

for (let x = 1; x <= 3; x++) {
    mark.push(Math.floor(Math.random() * (100)))
    john.push(Math.floor(Math.random() * (100)))
    mary.push(Math.floor(Math.random() * (100)))
}

console.log("Mark Scores: " + mark)
console.log("John Scores: " + john)
console.log("Mary Scores: " + mary)

var markAvg = 0, johnAvg = 0, maryAvg = 0;
var i;
for(i = 0; i < mark.length; i++) {
    markAvg += mark[i]
    johnAvg += john[i]
    maryAvg += mary[i]
}
markAvg = markAvg / i;
johnAvg = johnAvg / i;
maryAvg = maryAvg / i;

console.log("Mark Avg: " + mark)
console.log("John Avg: " + john)
console.log("Mary Avg: " + mary)

let winners = [0,0,0]

if(markAvg >= johnAvg && markAvg >= maryAvg) {
    winners[0] = 1
}
if(maryAvg >= johnAvg && maryAvg >= markAvg) {
    winners[1] = 1
}
if(johnAvg >= maryAvg && johnAvg >= markAvg) {
    winners[2] = 1
}

console.log("Mark : " + winners[0])
console.log("John : " + winners[1])
console.log("Mary : " + winners[2])

console.log("Winners: " + (winners[0] === 1 ? "mark" : "") + " " + (winners[1] === 1 ? "john" : "") + " " + (winners[2] === 1 ? "mary" : ""))