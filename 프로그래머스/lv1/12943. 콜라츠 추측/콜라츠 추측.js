function solution(num) {
    var answer = collatz(num, 0);

    return answer;
}

var collatz = function(x, i) {
    if(x == 1) {
        return i;
    } else if(i > 500) {
        return -1;
    }
    
    if( x % 2 == 0) {
        return collatz(x/2, i+1);
    } else {
        return collatz((x * 3) + 1, i+1);
    }
}