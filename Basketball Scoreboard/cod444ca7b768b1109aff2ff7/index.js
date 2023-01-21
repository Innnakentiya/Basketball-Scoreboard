let homeScore = document.getElementById("home-score")
let scoreHome = 0
let guestScore = document.getElementById("guest-score")
let scoreGuest = 0

function incrementOneHome() {
    scoreHome +=  1
    homeScore.textContent = scoreHome
}
function incrementTwoHome() {
    scoreHome += 2
    homeScore.textContent = scoreHome    
}
function incrementThreeHome() {
    scoreHome += 3
    homeScore.textContent = scoreHome   
}


 function incrementOneGuest() {
   scoreGuest += 1
   guestScore.textContent = scoreGuest  
 }
 function incrementTwoGuest() {
     scoreGuest +=2
     guestScore.textContent = scoreGuest
 }
 function incrementThreeGuest() {
     scoreGuest +=3
     guestScore.textContent = scoreGuest
 }