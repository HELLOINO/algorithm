function solution(my_string, m, c) {
    var answer = [];
    
    var a = Array.from(my_string);
    
    for(var i = c - 1; i < a.length; i+=m) {
        answer.push(a[i]);
    }
    
    return answer.join("");
}