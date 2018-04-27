var apiURL = 'https://swapi.co/api/starships/'
const spaceshipArr = ['./spaceimg/deathStar_01.png', './spaceimg/Executor_01.jpg', './spaceimg/milleniumFalcon_01.jpg', './spaceimg/sentinel_01.jpg', './spaceimg/tieadvanced.jpg', './spaceimg/xwing.png', './spaceimg/Ywing.jpg']
const priceArr = ['4000000000 credits']

function getStarships() {
  fetch(apiURL)
  .then(res => res.json())
  .then(res => {
    console.log(res)

    for (var i = 0; i < 7; i++) {
      var content = document.querySelector('.starships')

      var starship = document.createElement('section')
      var shipDetails
      var h3 = document.createElement('h3')
      var h4 = document.createElement('h4')
      var p = document.createElement('p')
      var img = document.createElement('img')

      starship.setAttribute('class', 'starship')

      h3.textContent = `${res.results[i].name}`
      h4.textContent = `Model: ${res.results[i].model}`
      p.textContent = `Price: ${priceArr[i]}`
      img.src = `${spaceshipArr[i]}`

      starship.appendChild(img)
      starship.appendChild(h3)
      starship.appendChild(h4)
      starship.appendChild(p)

      content.appendChild(starship)
    }
  })
}

getStarships()
