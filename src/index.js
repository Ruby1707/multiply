module.exports = function multiply(first, second) {
  let one=[];
    let two=[];
    var k=0;
    var res=[];
    var Answer="";
    for(var i=0;i<first.length;i++){
      one[first.length-i-1]=String(first.substr(i,1))
      }
    for(var i=0;i<second.length;i++){
      two[second.length-i-1]=String(second.substr(i,1))
    }
    for(var j=0;j<second.length;j++){
      for(var i=0;i<first.length;i++){
        res[i+k]=0;
      }
      k++;
    }
    var k=0;

    for(var j=0;j<second.length;j++){
      for(var i=0;i<first.length;i++){
        res[i+k]=res[i+k]+one[i]*two[j];
      }
        k++;
      }

   for(var i=0;i<res.length;i++){
     if(res[i]>=10){
          if(i==res.length-1){
            res[i+1]=0;
            res[i+1]=res[i+1]+(res[i]-res[i]%10)/10;
            res[i]=res[i]%10;
            }
          else{
            res[i+1]=res[i+1]+(res[i]-res[i]%10)/10;
            res[i]=res[i]%10;
            }
          }
        }


    for(var j=0;j<res.length;j++){
      Answer=Answer+String(res[res.length-j-1]);
    }
return Answer;
}
