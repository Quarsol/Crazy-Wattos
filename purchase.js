var starship = new URL(location).searchParams.get('starship')
var message = document.querySelector('#starship')

message.textContent = starship
