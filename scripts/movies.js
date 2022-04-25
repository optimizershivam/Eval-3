// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

// const url = `https://www.omdbapi.com/?s=${movie}&apikey=6c3a6de0`

var store = JSON.parse(localStorage.getItem("movie"))|| []
let movies = document.getElementById("movies")
let id;
async function searchMovie() 
{


try {

const search = document.getElementById("search").value

let res = await fetch (`https://www.omdbapi.com/?s=${search}&apikey=6c3a6de0`) 

let data = await res.json()

console.log(data.Search)
appendMovies(data.Search)
// let moviesdata = data.Search
// return data.search



}
catch(err)
{
    console.log("err",err)
}

}
// movies.innerHTML = null

function appendMovies(data) 
{
    
    console.log(data)
    data.forEach(function(el){
       
     let div = document.createElement("div")
     
     let image = document.createElement("img")
     image.src = el.Poster
    //  console.log("img")
     let title = document.createElement("p")
     title.innerText = el.Title

     let btn = document.createElement("button")
     btn.innerText = "Book Now"
     btn.setAttribute("class", "book_now")
     btn.addEventListener("click",function()
     {
         bookticket(el)
     })

      div.append(image,title,btn)
      movies.append(div)
      



    })
}
 
async function main ()
{
 let data = await searchMovie();

 if(data === undefined)
 {
     return false
 }
 appendMovies(data)
 console.log("data:",data)

}

function debounce(func, delay)
{
 if(id)
 {
     clearTimeout(id)
 }
id = setTimeout(function(){
  func()

},delay)

}
function bookticket(el)
{
 store.push(el)
 window.location.href="checkout.html"
 localStorage.setItem("movie", JSON.stringify(store))
}

let data2 = localStorage.getItem("amount")
document.getElementById("wallet").innerText = data2
