//Testing recursion and factorials

function factorial(number) {
  //Declaring a variable/function
  let result = 1;
  //This is what the result will be saved in
  let argue;
  //Var reprosenting number parameter
  for (argue = number; argue > 1; argue--) {
    result *= argue
    //If parameter is above 1 decrease value by 1 and multiply our result by param
  };
  return result;
};
console.log(factorial(4));
