function solution(myString) {
    var answer = '';
    
    var a = Array.from(myString);
    var c = [];
    
    a.map(b => {
       if(String(b) == 'a' || String(b) == 'A') {
           c.push(String(b).toUpperCase());
       } else {
           c.push(String(b).toLowerCase());
       }
    });
    
    return c.join("");
}