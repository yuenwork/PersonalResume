function sort(ele){
     count = 0
    for(var i= 0 ;i < ele.length;i++){
        for(var j = 0; j<ele.length-i-1;j++){
            if(ele[j]>ele[j+1]){
                var swap=ele[j];
                ele[j]=ele[j+1];
                ele[j+1]=swap;
                count++;
            }
                else{
                    count++;
               
            }
        }
    }
    return [ele,count];
    
}

var ele=[2,3,66,4,43,32,454,65,76,87,988,23,12];
console.log(ele);

console.log(sort(ele))