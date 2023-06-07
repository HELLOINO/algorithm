function solution(names) {
    var answer = [];
    
    names.map((a,b) => {
       if(b % 5 == 0) {
           answer.push(a);
       } 
    });
    
    return answer;
}