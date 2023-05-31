//   Every function
function number1() {
    

var array1=[]
 var element1=document.getElementById("enter1").value
 var element2=document.getElementById("enter2").value
array1.push(element1)
array1.push(element2)
console.log(array1);
var result= array1.every((element)=>{
    return element%2==0 
     
})
console.log(result);
document.write(result)
}
       //  Filter loop in array

       var myarray2=[14,12,11,10]
    result2= myarray2.filter((element)=>{
        return element%2==0
     })
     console.log( "filter=>"+result2);

            // foreach
    
    
            var array3=[12,67,18,5]
            result3=[]
         array3.forEach((element,index,array) => {
                result3.push(element+index) 
            });
     console.log("foreach=>"+result3);
        
        console.log(array3.indexOf(18));

        var result4= array3.join(",")
        console.log("join=>>>"+result4);