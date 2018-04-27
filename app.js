var apiURL = 'https://swapi.co/api/starships/'
const spaceshipArr = ['./spaceimg/Executor_01.jpg', './spaceimg/sentinel_01.jpg', './spaceimg/deathStar_01.png', './spaceimg/milleniumFalcon_01.jpg', './spaceimg/Ywing.jpg', './spaceimg/xwing.png', './spaceimg/tieadvanced.jpg']
const priceArr = ['4,000,000,000 credits', '4,000,000,000 credits', '4,000,000,000 credits', '4,000,000,000 credits', '4,000,000,000 credits', '4,000,000,000 credits', '4,000,000,000 credits', ]

function getStarships() {
  fetch(apiURL)
  .then(res => res.json())
  .then(res => {
    console.log(res)

    for (var i = 0; i < 7; i++) {
      var content = document.querySelector('.starships')

      var starship = document.createElement('section')
      var shipDetails = document.createElement('a')
      var h3 = document.createElement('h3')
      var h4 = document.createElement('h4')
      var p = document.createElement('p')
      var img = document.createElement('img')

      starship.setAttribute('class', 'starship')
      shipDetails.setAttribute('class', 'shipDetails')

      if (res.results[i].name == 'Death Star') {
        shipDetails.href = 'dsexplosion.html'
      } else {
        shipDetails.href = `purchase.html?starship=${res.results[i].name}`;
      }
      h3.textContent = `${res.results[i].name}`
      h4.textContent = `Model: ${res.results[i].model}`
      p.textContent = `Price: ${priceArr[i]}`
      img.src = `${spaceshipArr[i]}`

      shipDetails.appendChild(h3)
      shipDetails.appendChild(h4)
      shipDetails.appendChild(p)

      starship.appendChild(img)
      starship.appendChild(shipDetails)

      content.appendChild(starship)
    }
  })
}

getStarships()
