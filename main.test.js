const sumProcess = require('./main')

test("Return sum for num1 =''" , ()=>{
    expect(sumProcess("", "5")).toBe(5)
})
test("Return sum for num2 =''" , ()=>{
    expect(sumProcess("5", "")).toBe(5)
})
test("Return sum for num1 >=1000" , ()=>{
    expect(sumProcess("1001", "5")).toBe(5)
})
test("Return sum for num2 >=1000" , ()=>{
    expect(sumProcess("5", "1005")).toBe(5)
})
test("Return sum for num2 >=1000" , ()=>{
    expect(sumProcess("5", "5")).toBe(10)
})
test("Return sum for num2 >=1000" , ()=>{
    expect(sumProcess("5","7","4","4","7","8","9","10","6")).toBe(60)
})

test("Return sum for num1 <0" , ()=>{
    expect(() => {
        sumProcess("6","-5")
      }).toThrow("Negatives Are Not Allowed (-5)");
})
test("Return sum for num1 <0" , ()=>{
    expect(() => {
        sumProcess("-6","5","-10")
      }).toThrow("Negatives Are Not Allowed (-6,-10)");
})