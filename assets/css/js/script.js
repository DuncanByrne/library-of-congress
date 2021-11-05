let searchFormEl = document.querySelector('#search-form');

// function
function handleSearchFormSubmit(event){
  event.preventDefault();

  let searchInputVal = document.querySelector('#search-input').value;
  let formInputVal = document.querySelector('#format-input').value;

  // if statement
  if (!searchInputVal){
    console.error("No search input value! Try again.");
    return;
  }

  let queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

  location.assign(queryString);
}

// add event listener
searchFormEl.addEventListener('submit', handleSearchFormSubmit);