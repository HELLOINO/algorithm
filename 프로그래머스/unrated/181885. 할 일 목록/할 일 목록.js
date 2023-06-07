function solution(todo_list, finished) {
    var answer = [];
    
    todo_list.map((a,b) => {
        if(!finished[b]) answer.push(a);
    });
    
    return answer;
}