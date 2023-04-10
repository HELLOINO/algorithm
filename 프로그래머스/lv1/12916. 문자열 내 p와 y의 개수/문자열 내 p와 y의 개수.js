function solution(s){
    var answer = true;
    var count = [0,0];
    
    s = s.toUpperCase();
    
    for(var i = 0; i < s.length; i++) {
        if(s[i] == 'P') count[0]++;
        if(s[i] == 'Y') count[1]++;
    }
    
    return count[0]==count[1];
}