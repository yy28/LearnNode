//=================================== STR TEST ============================
var q = 0;
var cato = function(x){
    q++;
    x += ((q%3 === 0)?"X":(q%2===1?2:x.length));
 
    if(x.length>10)
        return x + x.substr(q,2);
    else
        return x;
};
 
var t = 0;
 
// V8 JX / node
var start = process.hrtime();
 
// LLVM JX
// var start = jxcore.llvm.call("libc", "clock");
 
var str = "";
for(var x=0;x<100;x++){
    for(var z=0;z<100;z++){
        str = cato(str);
        t += str.length % 991;
        q %= 1001;
    }
}
 
// V8 JX / node
var end = process.hrtime(start);
console.log("total " + end, str.length);
 
// LLVM JX
// var end = jxcore.llvm.call("libc", "clock") - start;
// jxcore.tmp.print("total " + (end / 1000) + "ms");
 
 
// V8 JX / node  --- > total 573,.... ms
// LLVM JX  -------- > total 438,.... ms