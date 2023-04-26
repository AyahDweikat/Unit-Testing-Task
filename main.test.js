const addTwoNums = require('./main')

test("Return sum for num1 =''" , ()=>{
    expect(addTwoNums("", 5)).toBe(5)
})
test("Return sum for num2 =''" , ()=>{
    expect(addTwoNums(5, "")).toBe(5)
})

// test("Return sum for num1 >=1000" , ()=>{
//     expect(addTwoNums(1001, 5)).toBe(5)
// })
// test("Return sum for num2 >=1000" , ()=>{
//     expect(addTwoNums(5, 1005)).toBe(5)
// })

// test("Return sum for num1 <0" , ()=>{
//     expect(addTwoNums(-5,6)).rejects.toThrow(
//         'negatives not allowed',
//       );
// })
// test("Return sum for num2 <0" , ()=>{
//     expect(addTwoNums(6,-5)).rejects.toThrow(
//         'negatives not allowed',
//       );
// })

