//task 1 admin login should appear when clicked

let controlofadmin = document.getElementById("admin-login");

function adminlogin(){
  controlofadmin.style.display = "block";
}

//task 2 make toggle work

let toggle = document.getElementById("switch-theme");

toggle.addEventListener('click',function(){
  toggle.classList.toggle("active");
  document.body.classList.toggle("darkmode");
});

//task 3 make admin login work

let controlofadminform = document.getElementById("adminform");

controlofadminform.addEventListener('submit',function(e){
  e.preventDefault();
  let storedusername = "kishore";
  let storedpassword = "Kishore2006!";
  
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  
  if(storedusername == username && storedpassword == password){
    alert("Login Successful ! Welcome");
    controlofadmin.style.display = "none";
    document.getElementById("user-responses").style.display = "block";
    displayusermessages();
  }
  else{
    alert("Invalid Username or Password ! Access Denied");
  }
});

//task 4 sending data from contact me form in JSON format to backend.

let controlofcontactmeform = document.getElementById("contact-me-form");

controlofcontactmeform.addEventListener('submit',function(e){
  e.preventDefault();
  
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("msg").value;
  let date = new Date().toLocaleString();
  
  let response = {name, email, message, date};

//starts here

let Dummydatabase = JSON.parse(localStorage.getItem('tempDB')) || [];

Dummydatabase.push(response);

localStorage.setItem('tempDB', JSON.stringify(Dummydatabase));

alert("Thank you for your Message, will get back to you shortly !");
this.reset();
});

function displayusermessages(){
  let controlofusermessages = document.getElementById("user-messages");
  
  let Dummydatabase = JSON.parse(localStorage.getItem('tempDB')) || [];
  
  Dummydatabase.forEach(response=>{
    let controlofresponseelement = document.createElement('div');
    
    controlofresponseelement.innerHTML = `
    <p> Name: ${response.name} </p>
    <p> Email: ${response.email} </p>
    <p> Message: ${response.message} </p>
    <p> Date: ${response.date} </p>
    <hr>
    `
   controlofusermessages.append(controlofresponseelement);
  });
}