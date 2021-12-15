let marks = [100,90,80,,]
   console.log(marks.length)
   console.log(marks)
   marks.forEach(function(e){ //ignores empty value in array
      console.log(e)
   });

   //trailingCommas And function call
//    function test(,){} // SyntaxError: missing formal parameter
// (,)=>{}; //SyntaxError: expected expression, got ','
// test(,) //SyntaxError: expected expression, got ','

//Trailing commas cannot be used with rest parameters.

function test(...arg1,){} // SyntaxError: parameter after rest parameter
(...arg1,)=>{} // SyntaxError: expected closing parenthesis, got ','