//================================== NUMBER TEST ==========================
var fibi = function(x){
    var a = 1, b = 1, c;
    for (var i = 3; i < x; i++){
        c = a + b;
        a = b;
        b = c;
    }
    return b;
};
 
var t = 0;
 
// V8 JX / node
var start = process.hrtime();
 
// LLVM JX
// var start = jxcore.llvm.call("libc", "clock");
 
for(var x=0;x<500;x++){
    for(var z=0;z<500;z++){
        t += fibi(z + 100) % 991;
    }
}
 
// V8 JX / node
var end = process.hrtime(start);
console.log("total " + end);
 
// LLVM JX
// var end = jxcore.llvm.call("libc", "clock") - start;
// jxcore.tmp.print("total " + (end / 1000) + "ms");
 
 
// V8 JX / node  --- > total 122,.... ms
// LLVM JX  -------- > total  84,.... ms