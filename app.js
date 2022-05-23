
var firebaseConfig = {
    apiKey: "AIzaSyBcl9OQ63FcTPRCqEx5EtYzDgF3Q-YP-7s",
    authDomain: "dbms-da3.firebaseapp.com",
    databaseURL: "https://dbms-da3-default-rtdb.firebaseio.com",
    projectId: "dbms-da3",
    storageBucket: "dbms-da3.appspot.com",
    messagingSenderId: "1946168239",
    appId: "1:1946168239:web:63cf369d6fb9ed060b1d5a",
    measurementId: "G-LW078BNYXQ"
  };
  firebase.initializeApp(firebaseConfig);

  let contactInfo = firebase.database().ref("User Information");
  

  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let PhoneNumber = document.querySelector(".PhoneNumber").value;
    let message = document.querySelector(".message").value;
    console.log(name, email, PhoneNumber, message);
  
    saveContactInfo(name, email,PhoneNumber, message);
  
    document.querySelector(".contact-form").reset();
  }
  
  function saveContactInfo(name, email,PhoneNumber, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      Name: name,
      Email: email,
      PhoneNumber: PhoneNumber,
      Message: message,
    });
  }