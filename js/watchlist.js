window.onload = function() {
  document.querySelector('.pre-search-2').innerHTML = ''
  let value = JSON.parse(localStorage.getItem('item'));
  if (value.length) {
    for (let data of value) {
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
              <button class="remove-from-watchlist"> 
                <i class="fa-solid fa-minus" data-watchlist=${data.imdbID}></i>
              </button> Remove
            </div>
          </div>
          <p class="plot"> ${data.Plot} </p>
        </div>
      </div>
      <hr>
    `
    }
  }
  else {
    document.querySelector('.main-content').innerHTML = `
      <div class="pre-search-2">
        <div class="initial-message">
          <label> Your watchlist is looking a little empty... </label>
        </div>
        <div class="sub-title-watchlist">
          <a href="index.html">
            <button class="back-to-search"> 
              <i class="fa-thin fa-plus"></i>
            </button> Let’s add some movies!
          </a>
        </div>
      </div>
    `
  }
}

document.querySelector('.main-content').addEventListener('click', function(e) {
  e.preventDefault()
  let allItems = JSON.parse(localStorage.getItem('item'))
  const removeItemId = e.target.dataset.watchlist
  let result = allItems.filter(function(item) {
    if (item.imdbID != removeItemId) {
      return item
    }
  })
  localStorage.setItem('item', JSON.stringify(result))
  location.reload()
})