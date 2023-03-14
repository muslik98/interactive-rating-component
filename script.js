
const circles = document.querySelectorAll('.circle');


// Add mouseover and mouseout
circles.forEach(circle => {
    circle.addEventListener('mouseover', function() {
        circle.style.backgroundColor = "#fb7413";
        circle.style.color = "white"
    });

    circle.addEventListener('mouseout', function() {
        circle.style.backgroundColor = "#959eac";
        circle.style.color = "white"

        // Reset the style of all other circles to the last style
        circles.forEach(otherCircle => {
            if (otherCircle != circle) {
              otherCircle.style.backgroundColor = "rgba(124, 135, 152, 0.15)";
              otherCircle.style.color = "#959eac";
            } 
          });
    });
    
});

circles.forEach(circle => {
    circle.addEventListener('click', function() {
      let rating = this.innerHTML;
      document.getElementById('rating').value = rating;
      circle.style.backgroundColor = "#959eac";
      circle.style.color = "white"

      // Reset the style of all other circles to the last style
      circles.forEach(otherCircle => {
        if (otherCircle != circle) {
          otherCircle.style.backgroundColor = "rgba(124, 135, 152, 0.15)";
          otherCircle.style.color = "#959eac";
        } 
      });    

    
    });
  });

  // Add a submit onclick function
  document.getElementById('submit').onclick = function() {
    let rating = document.getElementById('rating').value;
    
    const card = document.querySelector('.card');
    while (card.firstChild) {
      card.removeChild(card.firstChild);
    }

    card.innerHTML += '<div class="illustration"><img src="./images/illustration-thank-you.svg" alt="illustration"></div>';
    card.style.textAlign = 'center';

    const illustration = document.querySelector('.illustration');
    illustration.style.marginBottom = '10px';

    const rateResult = document.createElement('p');
    rateResult.className = 'rate-result';
    rateResult.innerHTML = 'You Selected<span class="rate-value">5</span> out of 5';  

    // Create the h3 element
    const thankYou = document.createElement('h3');
    thankYou.innerText = 'Thank you!';

    // Create the second p element
    const message = document.createElement('p');
    message.innerText = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';

    // Append the elements to the card element
    card.appendChild(rateResult);
    card.appendChild(thankYou);
    card.appendChild(message);

    // style rate-result
    const css = '.rate-result { display: flex; margin: 0 auto; width: 55%; height: 30px; background-color: rgba(124, 135, 152, 0.15); justify-content: center; align-items: center; color: rgba(251, 116, 19, 0.7)!important; border-radius: 20px; }';
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.type = 'text/css';
    style.textContent = css;
    head.appendChild(style);

    // rate-value style
    const rateValue = document.querySelector('.rate-value');
    rateValue.style.margin = "0 3px";
    rateValue.innerHTML = rating;
  }