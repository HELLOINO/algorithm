function solution(x) {
    var num = Array.from(String(x));
    var sum = 0;
    
    num.map((a,b,c) => {
        sum += Number(a);     
    });
    
    return !(x%sum);
}