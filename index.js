let homeEl = document.getElementById("score-home")
let guestEl = document.getElementById("score-guest")
let countHome = 0
let countGuest = 0

function addScore(team, points) {
    if (team === 'home') {
        countHome += points
        homeEl.textContent = countHome
    } else if (team === 'guest') {
        countGuest += points
        guestEl.textContent = countGuest
    }
}


