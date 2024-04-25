new Typed('.text', {
    strings: ['Fullstack Developer,', 'Welcome to my website!', 'Thank you for visiting.'],
    typeSpeed: 100,
    backspeed: 100,
    backDelay:1000,
    loop: true
    });

    let number = document.getElementById("number");
    let counting = 0;
    setInterval(() => {
        if (counting == 80 ) {
            clearInterval
            
        }
        else{
            counting += 1;
            number.innerHTML = counting + "%";
        }
    
    },25);
    let number1 = document.getElementById("number1");
    let counting1 = 0;
    setInterval(() => {
        if (counting1 == 80 ) {
            clearInterval
            
        }
        else{
            counting1 += 1;
            number1.innerHTML = counting1 + "%";
        }
    
    },25);