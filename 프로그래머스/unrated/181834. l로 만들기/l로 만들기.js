function solution(myString) {
    var answer = '';
    var ms = Array.from(myString);
    
    answer = ms.map(a => {
       return a < 'l' ? 'l' : a; 
    });

    return answer.join("");
}