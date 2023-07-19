function solution(n) {
    var a = Array.from(String(n));
    
    a = a.map(b => {
        return Number(b);
    });
    
    return a.reverse();
}