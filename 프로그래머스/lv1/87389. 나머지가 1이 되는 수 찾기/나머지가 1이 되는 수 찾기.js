function solution(n) {
    var answer = 0;
    
    for(var i = 2; i < n; i++) {
        if(n % i == 1) return i;
    }
}