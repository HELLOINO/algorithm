function solution(n)
{
    var answer = 0;
    var a = Array.from(String(n));
    
    a.map(b => {
       answer += Number(b); 
    });
    
    return answer;
}