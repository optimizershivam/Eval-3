// Store the wallet amount to your local storage with key "amount"

let nav = document.getElementById("navbar")
let data = localStorage.getItem("amount")|| 0;
function addtowallet ()
{
    
  let input = document.getElementById("amount").value
  localStorage.setItem("amount",Number(data)+Number(input))
//   
 data = localStorage.getItem("amount")
 document.getElementById("wallet").innerText = data
  

 
//   input.innerText = total


}