function rot13(str) {
  var arr=str.split("");
 
  var arr1=[];
  var arr2=[]; 
 
  for (let i=0;i<arr.length;i++){    
   
   var item=arr[i];
   var ascii=item.charCodeAt();
   
   if (item.match(/[A-Z]/)) {   
   
     if ( ascii >=65 && ascii <=77 ) {
    
       ascii += 13;
    
      }
      else {
            
        ascii -= 13;
      }
    
    arr1.push(ascii);
  }
   else {
   
   arr1.push(item.charCodeAt());
  }
   
  } 
 
 for (let j=0;j<arr1.length;j++){
 
   var item2=arr1[j];
   arr2.push(String.fromCharCode(item2));
 
 }
 
 var test=arr2.join("");
  
return test;
}

rot13("SERR PBQR PNZC");