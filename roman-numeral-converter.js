function convertToRoman(num) {
  let romanArr = [];
  const romanObj = {
    0: ["","I","II","III","IV","V","VI","VII","VIII","IX"],
    1: ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
    2: ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
    3: ["","M","MM","MMM","MV","V","VM","VMM","VMMM","IX"]
  }
  const numArrRep = num.toString().split("").map(item => parseInt(item));
  let m = numArrRep.length - 1;
  for (let n = m; n >= 0; n--) {
    romanArr.push(romanObj[n][numArrRep[m - n]]);
  } 
 return romanArr.join("");
}

convertToRoman(36);