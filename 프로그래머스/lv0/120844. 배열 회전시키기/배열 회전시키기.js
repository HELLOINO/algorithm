function solution(numbers, direction) {
    var answer = [];
    
    if(direction == "right") {
        answer.push(numbers[numbers.length - 1]);
        for(var i = 0; i < numbers.length - 1; i++) {
            answer.push(numbers[i]);
        }
    } else {
        for(var i = 1; i < numbers.length; i++) {
            answer.push(numbers[i]);
        }
         answer.push(numbers[0]);
    }
    
    return answer;
}