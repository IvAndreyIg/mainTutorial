

//bubbleSort=
module.exports=function (array) {

    if (Array.isArray(array)) {

        let arrCopy=Array(...array);
        
        for (let s = 1; s < arrCopy.length; s++) {
            
            for (let i = 0; i < arrCopy.length-s; i++) {
                
                if(arrCopy[i]>arrCopy[i+1]){
                let temp=arrCopy[i]
                arrCopy[i]=arrCopy[i+1]
                arrCopy[i+1]=temp
                }
            }
            
        }
        
        return arrCopy;


    } 
    else {
        
        return array


    }


    
};