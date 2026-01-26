
const calculateBMI = (weight, height) => {
    let bmi = weight/ (height * height)
    let category = ""
    if (bmi < 18.5) {
        category = 'ผอม'
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'ปกติ'
    } else if (bmi >= 25 && bmi < 30)  {
        category = 'อ้วน'
    } else if (bmi > 30) {
        category = 'อ้วนมาก'
    }
    return {
        Bmi: bmi.toFixed(2) ,
        Category: category,
    }

}

console.log(calculateBMI(70,1.75))
console.log(calculateBMI(50,1.60))
console.log(calculateBMI(90,1.70))