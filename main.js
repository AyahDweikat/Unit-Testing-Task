



function sumProcess(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let answer = document.getElementById("answer");
    num1 = convertingNums(num1)
    num2 = convertingNums(num2)
    answer.innerHTML = addTwoNums(num1, num2);
}
const addTwoNums = (a,b) =>  a + b;

let submit = document.getElementById("sum")

submit.addEventListener("click", (e) => {
    e.preventDefault()
    sumProcess()
})
function convertingNums(num){
    if(num > 1000) return 0;
    if(num =="")return 0;
    if(num <0) throw Error("negatives not allowed")
    return Number(num)
}

module.exports = addTwoNums;
