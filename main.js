let loginForm = document.querySelector("form.login");
let signupForm = document.querySelector("form.signup");
let loginBtn = document.querySelector("label.login");
let signupBtn = document.querySelector("label.signup");
let signupLink = document.querySelector(".signup-link a");
let loginText = document.querySelector(".title-text .login");
let signupText = document.querySelector(".title-text .signup");


signupBtn.onclick = (()=>{
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});

loginBtn.onclick = (()=>{
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});

signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});


