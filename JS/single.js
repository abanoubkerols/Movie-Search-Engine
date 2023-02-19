

let movies_container = document.getElementById('movies-container')
let httpReq
let api
let search_btn = document.getElementById('search-btn')
let key_word_input = document.getElementById('key-word')

async function makeReq(keyWord) {
    api = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ee3cc17a&t=${keyWord}`)
    httpReq = await api.json()

    alertContent()
}


function alertContent() {
    let movies = httpReq
    movies_container.innerHTML = ""

        movies_container.innerHTML += `<div class="col-lg-12 col-md-12 col-sm-12 text-center mt-2">
        <img class="float-start" src="${movies.Poster}"/>
        <h3 class="my-2">Title:${movies.Title}</h3>
        <P><span class="fw-bold">Year: </span>${movies.Year}</P>
        <P><span class="fw-bold">Released</span>: ${movies.Released}</P>
        <P><span class="fw-bold">Run Time :</span>${movies.Runtime}</P>
        <P><span class="fw-bold">Genre: </span>${movies.Genre}</P>
        <P><span class="fw-bold">Director: </span>${movies.Director} , <span class="fw-bold">Box Office : </span>${movies.BoxOffice}</P>
        <P><span class="fw-bold">Plot: </span>${movies.Plot}</P>

        <P><span class="fw-bold">Country: </span>${movies.Country}</P>
    
        <P><span class="fw-bold">Language: </span>${movies.Language}</P>
        <P><span class="fw-bold">Actors: </span>${movies.Actors}</P>
        <P><span class="fw-bold">Awards: </span>${movies.Awards}</P>



       
        
        </div>`
  
}

search_btn.addEventListener('click',()=>{

   keyWord = key_word_input.value 
   makeReq(keyWord)
})

key_word_input.addEventListener('keypress' ,(e)=>{
    if(e.key === "Enter"){
        search_btn.click()
    }
})


makeReq("batman")