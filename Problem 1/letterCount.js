
function letterCount(stri) {
  var str=stri.toUpperCase();
str.trim();
var arr = [];
arr=str.split("")

const counts = {};
arr.forEach((x) => {
  if(x!=' '){
  counts[x] = (counts[x] || 0) + 1;
  
}

});

const values = Object.entries(counts);


// counts['a-']=counts['a'];
// delete counts['a']

//console.log(Object.keys(counts));

for(i=0; i<values.length; i++) {
  values[i].splice(1, 0, "-");
  console.log(...values[i])
}
}
letterCount('Amolya Sharma')
