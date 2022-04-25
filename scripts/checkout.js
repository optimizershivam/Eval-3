// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

console.log("hello")
let movie = document.getElementById("movie")
let data = JSON.parse(localStorage.getItem("movie"))
console.log(data)
appendMovies(data)
function appendMovies(data)
{
    console.log("hello")
    // movie.innerHTML = null
data.map((el)=>
{
  let div = document.createElement("div")
  let image = document.createElement("img")
  image.src = el.Poster
  let p = document.createElement("p")
  p.innerText = el.Title


  div.append(image,p)
  movie.append(div)


})
}

 
 let data1 = localStorage.getItem("amount")
document.getElementById("wallet").innerText = data1

function confirm(event) 
 {
  let balance = Number(data1)
  let seat = document.querySelector("#number_of_seats").value
  var total = 100*Number(seat)
  if(balance>total)
  {
      alert("booking succesfull")
      let newbal = balance - total
      localStorage.setItem("amount",newbal)
  }
   else 
   {
       alert("Insufficient Balance")
   }
  document.querySelector("wallet").innerText=data1
 }