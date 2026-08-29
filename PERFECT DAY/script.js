document.addEventListener('DOMContentLoaded', perfectdayquiz, false);

function perfectdayquiz() {

  let button = document.querySelector(".submit");
  let userScore = 0;

  button.onclick = function() {

    let displayResult = document.querySelector(".displayResult");
    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');
    let q4 = document.querySelector('input[name="q4"]:checked');
    let q5 = document.querySelector('input[name="q5"]:checked');
    let q6 = document.querySelector('#q6-energy');
    

    let q1Response = q1 ? q1.value: "";
    let q2Response = q2 ? q2.value: "";
    let q3Response = q3 ? q3.value: "";
    let q4Response = q4 ? q4.value: "";
    let q5Response = q5 ? q5.value: "";
    let q6Response = Number(q6.value);
   //question1
    if (q1Response === "summer") {
      userScore += 2;
    } else if (q1Response === "monsoon") {
      userScore += 3;
    } else if (q1Response === "spring") {
      userScore += 4;
    } else {
      userScore += 5;
    }




    //question2
    if (q2Response === "daytime") {
      userScore += 2;
    } else if (q2Response === "afternoon") {
      userScore += 3;
    } else if (q2Response === "sunset") {
      userScore += 4;
    } else {
      userScore += 5;
    }



    //question3
    if (q3Response === "introvert") {
      userScore += 2;
    } else if (q3Response === "ambivert") {
      userScore += 3;
    } else {
      userScore += 4;
    }

    //question 4
    if (q4Response === "swimming") {
      userScore += 2;
    } else if (q4Response === "reading") {
      userScore += 3;
    } else if (q4Response === "speaking") {
      userScore += 4;
    } else if (q4Response === "photography") {
      userScore += 5;
    } else {
      userScore +=6
    }

    //question 5
    if (q5Response === "pop") {
      userScore += 2;
    } else if (q5Response === "indie") {
      userScore += 3;
    } else if (q5Response === "party") {
      userScore += 4;
    } else {
      userScore += 5;
    }

    //question 6 
    if (q6Response === 1) {
      userScore += 2;
    } else if (q6Response === 2) {
      userScore += 3;
    } else if (q6Response === 3) {
      userScore += 4;
    } else {
      userScore += 5;
    }
   

    displayResult.innerHTML = "Based on your score, your PERFECT DAY is: "
    if (userScore >=12 && userScore <=16) {
      displayResult.insertAdjacentHTML('beforeend', "At the BEACH ")
      displayResult.insertAdjacentHTML('beforeend', `<img src = "BEACH.webp" >`)
       displayResult.insertAdjacentHTML('beforeend', `<p>At the Beach 🏖️
Sun on your skin, salt in the air.
Your perfect day moves at the pace of the tide.
Barefoot, unbothered, and glowing gold.</p>`)

    } else if (userScore >= 17 && userScore <= 19) {
      displayResult.insertAdjacentHTML('beforeend', "Cozy Rainy Day")
      displayResult.insertAdjacentHTML('beforeend', `<img src = "cozyday.jpg">`)
      displayResult.insertAdjacentHTML('beforeend', `<p>Cozy Rainy Day ☔
Raindrops on the window, blanket on your lap, a book in your hand.
Your perfect day is soft, slow, and quiet.
A warm mug and nowhere else to be.</p>`)
    } else if (userScore >= 20 && userScore <= 22) {
      displayResult.insertAdjacentHTML('beforeend', "Adventure Day")
      displayResult.insertAdjacentHTML('beforeend', `<img src ="adventureday.png" >`)
      displayResult.insertAdjacentHTML('beforeend', `<p>Adventure Day 🥾
New trail, new view, new story to tell.
Your perfect day is chasing the horizon.
Dirt on your boots, wind in your hair.</p>`)
    } else if (userScore >= 23 && userScore <=26 ) {
      displayResult.insertAdjacentHTML('beforeend', " Downtown Disco ")
      displayResult.insertAdjacentHTML('beforeend', `<img src = "cityday.webp">`)
      displayResult.insertAdjacentHTML('beforeend', `<p>Downtown Disco 🎉
Bright lights, loud beats, best friends beside you.
Your perfect day is made for the dance floor.
Energy up until the very last song.</p>`)
    }
    else {
      displayResult.insertAdjacentHTML('beforeend', "Sweater Weather")
      displayResult.insertAdjacentHTML('beforeend', `<img src = "autumnday.webp" >`)
      displayResult.insertAdjacentHTML('beforeend', `<p>Sweater Weather 🍂
Crunchy leaves and a favorite sweater.
Your perfect day is golden, cozy, and calm.
Warm spice in the air, slow steps ahead.</p>`)
    }






  };
}