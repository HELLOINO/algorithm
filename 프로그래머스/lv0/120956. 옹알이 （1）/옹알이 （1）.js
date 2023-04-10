function solution(babbling) {
    var answer = 0;
    var baby = [];
    
    for(var i = 0; i < babbling.length; i++) {
        baby = ["aya", "ye", "woo", "ma"];
        
        for(var j = 0; j < baby.length; j++) {
            if(babbling[i].indexOf(baby[j]) == 0) {
                babbling[i] = babbling[i].replace(baby[j], "");
                baby[j] = "babybaby";
                j = -1;
                if(babbling[i] == "") {
                   answer++; 
                   break;
                }
            }
        }
    }
    
    return answer;
}