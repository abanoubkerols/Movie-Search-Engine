

let movies_container = document.getElementById('movies-container')
let httpReq
let api
let search_btn = document.getElementById('search-btn')
let key_word_input = document.getElementById('key-word')

async function makeReq(keyWord) {
    api = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ee3cc17a&s=${keyWord}`)
    httpReq = await api.json()

    alertContent()
}


function alertContent() {
    let movies = httpReq.Search
    movies_container.innerHTML = ""
    for (let i = 0; i < movies.length; i++) {
        movies_container.innerHTML += `<div class="col-lg-4 col-md-6 col-sm-12 text-center mt-2">
        <img src="${movies[i].Poster}"/>
        <h3 class="my-2">${movies[i].Title}</h3>
        <P>${movies[i].Year}</P>
        
        </div>`
    }
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