var mark = {
    name: 'Mark Brown',
    mass: 92.9864,
    height: 2.13,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi
    }
}

var john = {
    name: 'John Black',
    mass: 92.9864,
    height: 2.13,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi
    }
}

if(john.calcBMI() > mark.calcBMI())
    console.log(mark.name + " has a higher BMI of " + mark.bmi)
else if(john.calcBMI() < mark.calcBMI())
    console.log(john.name + " has a higher BMI of " + john.bmi)
else
    console.log(mark.name + " and " + john.name + " have equal bmi's of " + mark.bmi + " and " + john.bmi)