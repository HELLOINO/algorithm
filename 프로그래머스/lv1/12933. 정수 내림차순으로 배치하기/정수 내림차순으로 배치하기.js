function solution(n) {
    var answer = Array.from(String(n));
    
    answer.sort((a,b) => {
        return b - a;
    });
    
    return Number(answer.join(""));
}