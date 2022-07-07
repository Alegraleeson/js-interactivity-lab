console.log('has successfully connected')

function deleteMovie(event){
    event.target.parentNode.remove('li')
}

function crossOffMovie(event){
    event.target.classList.toggle('.checked')
}

function addMovie(event){
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie) 
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    movie.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', deleteMovie) 
    document.querySelector('ul').appendChild(movie)
    inputField.value = ""
}
    
 let form = document.querySelector('form')  
form.addEventListener('submit', addMovie) 
