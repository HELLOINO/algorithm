function solution(num_list, n) {
    var answer = [];
    
    num_list.map((a,b) => {
        if(b >= n) {
            answer.push(a);
        } 
    });
    
    num_list.map((a,b) => {
        if(b < n) {
            answer.push(a);
        } 
    });
    
    return answer;
}