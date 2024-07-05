

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
        if (counting1 == 75 ) {
            clearInterval
            
        }
        else{
            counting1 += 1;
            number1.innerHTML = counting1 + "%";
        }
    
    },25);
    let number2 = document.getElementById("number2");
    let counting2 = 0;
    setInterval(() => {
        if (counting2 == 65 ) {
            clearInterval
            
        }
        else{
            counting2+= 1;
            number2.innerHTML = counting2 + "%";
        }
    
    },25);
    let number3 = document.getElementById("number3");
    let counting3 = 0;
    setInterval(() => {
        if (counting3 == 90 ) {
            clearInterval
            
        }
        else{
            counting3 += 1;
            number3.innerHTML = counting3 + "%";
        }
    
    },25);



  //  circle-box 2 ////


    let number4 = document.getElementById("number4");
    let counting4 = 0;
    setInterval(() => {
        if (counting4 == 80 ) {
            clearInterval
            
        }
        else{
            counting4 += 1;
            number4.innerHTML = counting4 + "%";
        }
    
    },25);
    let number5 = document.getElementById("number5");
    let counting5 = 0;
    setInterval(() => {
        if (counting5 == 75 ) {
            clearInterval
            
        }
        else{
            counting5 += 1;
            number5.innerHTML = counting5 + "%";
        }
    
    },25);


    let number6 = document.getElementById("number6");
    let counting6 = 0;
    setInterval(() => {
        if (counting6 == 65 ) {
            clearInterval
            
        }
        else{
            counting6+= 1;
            number6.innerHTML = counting6 + "%";
        }
    
    },25);
    let number7 = document.getElementById("number7");
    let counting7 = 0;
    setInterval(() => {
        if (counting7 == 90 ) {
            clearInterval
            
        }
        else{
            counting7 += 1;
            number7.innerHTML = counting7 + "%";
        }
    
    },25);



  //  circle-box 3 ////


    let number8 = document.getElementById("number8");
    let counting8 = 0;
    setInterval(() => {
        if (counting8 == 80 ) {
            clearInterval
            
        }
        else{
            counting8 += 1;
            number8.innerHTML = counting8 + "%";
        }
    
    },25);
    let number9 = document.getElementById("number9");
    let counting9 = 0;
    setInterval(() => {
        if (counting9 == 75 ) {
            clearInterval
            
        }
        else{
            counting9 += 1;
            number9.innerHTML = counting9 + "%";
        }
    
    },25);


    let number10 = document.getElementById("number10");
    let counting10 = 0;
    setInterval(() => {
        if (counting10 == 65 ) {
            clearInterval
            
        }
        else{
            counting10+= 1;
            number10.innerHTML = counting10 + "%";
        }
    
    },25);
    let number11 = document.getElementById("number11");
    let counting11 = 0;
    setInterval(() => {
        if (counting11 == 90 ) {
            clearInterval
            
        }
        else{
            counting11 += 1;
            number11.innerHTML = counting11 + "%";
        }
    
    },25);

  //  circle-box 4 ////


    let number12 = document.getElementById("number12");
    let counting12 = 0;
    setInterval(() => {
        if (counting12 == 80 ) {
            clearInterval
            
        }
        else{
            counting12 += 1;
            number12.innerHTML = counting12 + "%";
        }
    
    },25);
    let number13 = document.getElementById("number13");
    let counting13 = 0;
    setInterval(() => {
        if (counting13 == 75 ) {
            clearInterval
            
        }
        else{
            counting13 += 1;
            number13.innerHTML = counting13 + "%";
        }
    
    },25);


    let number14 = document.getElementById("number14");
    let counting14 = 0;
    setInterval(() => {
        if (counting10 == 65 ) {
            clearInterval
            
        }
        else{
            counting14+= 1;
            number14.innerHTML = counting14 + "%";
        }
    
    },25);
    let number15 = document.getElementById("number15");
    let counting15 = 0;
    setInterval(() => {
        if (counting15 == 90 ) {
            clearInterval
            
        }
        else{
            counting15 += 1;
            number15.innerHTML = counting15 + "%";
        }
    
    },25);



    





    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('form');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('sub');
        const messageInput = document.getElementById('message');
      
        // Initialize variables to store form data
        let formData = {
          name: '',
          email: '',
          sub:'',
          message:''
        };
      
        // Function to update formData object on input change
        const handleInputChange = (event) => {
          const { id, value } = event.target;
          formData = {
            ...formData,
            [id]: value
          };
          console.log(formData);
        };
      
        
        nameInput.addEventListener('input', handleInputChange);
        emailInput.addEventListener('input', handleInputChange);
        subjectInput.addEventListener('input', handleInputChange);
        messageInput.addEventListener('input', handleInputChange);
        
      
     
        form.addEventListener('submit', function(event) {
          event.preventDefault(); 
          
          console.log('Form submitted with data:', formData);
        
        });
        form.addEventListener('submit',async function (event) {
          event.preventDefault(); 
          await axios.post('https://rayhan-portfolio-server.onrender.com/rayhan/create',formData) 
          .then((res) =>{
            console.log(res);
          })
          .catch(error => console.log(error) )
        
        
        });
      });


     


    // document.getElementById('form').addEventListener('submit', function(event) {
    //   event.preventDefault(); // Prevent the default form submission
      
    //   // Show the alert message
    //   alert("Form submitted successfully!")
    // })
      
      








//  const form = document.getElementById("form")

//  form.addEventListener("submit",function(event){
//     event.preventDefault()

//   const email = document.getElementById("email").value

//   const name = document.getElementById("name").value

//   const sub = document.getElementById("sub").value
 
//   const message = document.getElementById("message").value


// console.log(form);
 

//  })