let nombreUn = 1;
let nombreCent = 100;
let chiffre = "";
let code = document.getElementById("code");


for (nombreUn; nombreUn <= 100; nombreUn++) {

  if (nombreUn % 3 == 0) {
    chiffre += "Fizz";
  } 
  
  else if (nombreUn % 5 == 0) 
  {
    chiffre += "Buzz";
  }
  else {
    chiffre += nombreUn;
  }
}
code.innerHTML = chiffre;

