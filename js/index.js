//create a function that takes in a value and searches the github api for that name

function fetchGithubByValue(value){
 fetch(`https://api.github.com/search/users?q=${value}`,{
     
         headers: {
            "Accept": "application/vnd.github.v3+json"
         }
      })
      .then(res => res.json())
      .then(json => console.log(json))
}

//add an event listener to my submit button
//take the calue of the input box
//call my fetch function with that value

const submitBtn = document.getElementById('submit-button')
const searchBox = document.getElementById('search')
submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    fetchGithubByValue(searchBox.value)
})