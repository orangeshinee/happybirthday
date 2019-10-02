const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

      var but = document.getElementById('but');
     but.addEventListener("click",countFunc);
    function countFunc() {
        document.getElementById('container').style.display = 'none';
        document.getElementById('container2').style.display = 'block';
        document.getElementById('card').style.display = 'block';
    }
    let countDown = new Date('Oct 01, 2020 00:00:00').getTime(),
        x = setInterval(function() {
    
          let now = new Date().getTime(),
              distance = countDown - now;
    
          document.getElementById('days').innerText = Math.floor(distance / (day)),
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
            

          //do something later when date is reached
          if (distance <= 0) {
            document.getElementById('container').style.display = 'none';
            document.getElementById('container2').style.display = 'block';
            document.getElementById('card').style.display = 'block';
        }
    
        }, second)


