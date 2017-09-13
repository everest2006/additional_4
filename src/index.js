module.exports = function multiply(first, second) {
    var mas1 = first.split('').reverse();
    var mas2 = second.split('').reverse();
    var result = new Array(mas1.length+mas2.length).fill(0);
    for (var i = 0; i<mas2.length;i++){
        for(var j = 0; j<mas1.length;j++){
            result[j+i]=mas2[i]*mas1[j]+ +result[j+i];
            if ((''+result[j+i]).length>1){
                result[j+i+1]=+result[j+i+1]+ +(''+result[j+i])[0];
                result[j+i] = (''+result[j+i])[1];
            }
        }
    }
    if(result[result.length-1]==0){
        return result.reverse().join('').substr(1,result.length);
    }
    return result.reverse().join('');
}