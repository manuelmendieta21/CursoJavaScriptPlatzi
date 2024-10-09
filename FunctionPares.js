let numbers1=[0,1,2,3,4,5,6]

/*
let sum=0;
for ( i=0; i<=numbers1.length -1; i++){
     
    if(numbers1[i]%2===0){
        sum=sum+numbers1[i];
        console.log(sum)
    }
    else{
        impar=numbers1[i];
        console.log(`impares ${impar}`)
    }
}



console.log("Metodo ForEach")
numbers1.forEach((numbers1) => {
    if(numbers1%2===0){
        sum=sum+numbers1;
        console.log(sum)
    }
    else{
        impar=numbers1;
        console.log(`impares ${impar}`)
    }
})
*/

function sumaPares(numbers1){
    let sum=0;
    numbers1.forEach((numbers1) => {
        if(numbers1%2===0){
            sum=sum+numbers1;
            console.log(sum)
        }
        else{
            let impar=numbers1;
            console.log(`impares ${impar}`)
        }
    })
    return sum;
}

sumaPares(numbers1)