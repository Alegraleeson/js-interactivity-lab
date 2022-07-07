console.log('has successfully connected')



function addMovie(event){
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value
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
