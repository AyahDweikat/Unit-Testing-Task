




// let answer = document.getElementById("answer");
// let submit = document.getElementById("sum")
// submit.addEventListener("click", (e) => {
//     let num1 = document.getElementById("num1").value;
//     let num2 = document.getElementById("num2").value;
//     e.preventDefault()
//     sumProcess(num1, num2)

// })
// let num1, num2;
// sumProcess(num1, num2)
function sumProcess(...numbers){
    let _numbers  = numbers.map((item)=>{
        return convertingNums(item)
    })
    // let _num1 = convertingNums(num1)
    // let _num2 = convertingNums(num2)
    return addTwoNums(..._numbers);
}
const addTwoNums = (...numbers) =>  {
    return numbers.reduce((sum, item)=> sum + item, 0)
};
function convertingNums(num){
    if(num > 1000) return 0;
    if(num =="")return 0;
    if(num <0) throw new Error("negatives not allowed");
    return Number(num)
}
module.exports = sumProcess;
