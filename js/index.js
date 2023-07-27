function renderMovie(id) {
    fetch(`https://www.omdbapi.com/?apikey=5b3871c6&i=${id}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            document.querySelector('.main-content').innerHTML += `
                <div class="post-search" id="${data.imdbID}">
                    <img src="${data.Poster}"> 
                    <div class="info">
                        <div class="main-info">
                            <h1> ${data.Title} </h1>
                            <h4> ⭐ ${data.imdbRating} </h4>
                        </div>
                        <div class="detailed-info">
                            <p> ${data.Runtime} </p>
                            <p> ${data.Genre} </p>
                            <div>
                                <button class="add-to-watchlist">
                                    <i class="fa-thin fa-plus" data-watchlist=${data.imdbID}></i>
                                </button> Wtchlist
                            </div>
                        </div>
                        <p class="plot"> ${data.Plot} </p>
                    </div>
                </div>
                <hr>
            `
        })
        .catch(error => console.log(error))
}


document.querySelector('.movie-sercher').addEventListener('click', function(e){
    e.preventDefault()
    const url = `https://www.omdbapi.com/?apikey=5b3871c6&s=${movieNameElement.value}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (!data.Search) {
                document.querySelector('.main-content').innerHTML = `
                    <div class="error">
                        <label> Unable to find what you’re looking for. Please try another search.</label>
                    </div>
                `
            }
            else {
                document.querySelector('.main-content').innerHTML = ''
                for (data of data.Search) {
                    renderMovie(data.imdbID)
                }
            }
        })
        .catch(error => console.log(error))
})