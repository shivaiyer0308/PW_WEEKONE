function findOddOrEven(value) {

   for (let index = 0; index <= 10; index++) 
    {

   if (index %2=== 0)
   {
    console.log("The current number" +"\t" +index + "\t"+ "is Even");
   }

else
{
        console.log("The current number "+"\t" +index +"\t"+"is Odd");
}
    
   }
   value--
}
findOddOrEven(10)