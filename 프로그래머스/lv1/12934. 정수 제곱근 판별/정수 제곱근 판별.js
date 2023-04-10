function solution(n) {
    var answer = 0;
    var a = Math.sqrt(n);
    
    if (a % 1 != 0) {
        answer = -1;
    } else {
        answer = Math.pow(a+1,2);
    }
    return answer
}