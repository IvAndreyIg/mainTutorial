function createIndexNumbers(){

    let indexNumbers=[]

    let i=0;

    while (i<10){
        

        (function a(i){

          
            let indexFunction=function(){

                        console.log(i)
                    }

                    indexNumbers.push(indexFunction)

        })(i)
       

       
        i++
    }
    return indexNumbers

}

let indexes=createIndexNumbers()

indexes[0]();

indexes[2]()