

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
          await axios.post('http://localhost:2000/rayhan/create',formData)
          .then((res) =>{
            console.log(res);
          })
          .catch(error => console.log(error) )
        
        
        });
      });

      
      








//  const form = document.getElementById("form")

//  form.addEventListener("submit",function(event){
//     event.preventDefault()

//   const email = document.getElementById("email").value

//   const name = document.getElementById("name").value

//   const sub = document.getElementById("sub").value
 
//   const message = document.getElementById("message").value


// console.log(form);
 

//  })