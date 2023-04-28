function sumProcess(...numbers){
    let negativeNums = [];
    let _numbers  = numbers.map((item)=> convertingNums(item,negativeNums))
    if(negativeNums.length){
        throw new Error(`Negatives Are Not Allowed (${negativeNums})`);
    }
    return addTwoNums(_numbers);
}
const addTwoNums = (numbers) =>  {
    return numbers.reduce((sum, item)=> sum + item, 0)
};
function convertingNums(num,negativeNums){
    if(num > 1000) return 0;
    if(num =="")return 0;
    if(num <0) {
        negativeNums.push(num)
    }
    return Number(num)
}
module.exports = sumProcess;
