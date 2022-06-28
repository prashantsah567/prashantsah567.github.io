const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

//for sending email

sendEmail();

function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "sahprashant267@gmail.com",
    Password : "9D66869A2067F291957F2E3D46F8C71EA702",
    To : "sahprashant267@gmail.com",
    From : "sahprashant267@gmail.com",
    Subject : "New Inquiry from your website",
    Body : "Name: "+ document.getElementById("name").value
      + "<br> Email: "+ document.getElementById("email").value
      + "<br> Phone No: "+ document.getElementById("phone").value
      + "<br> Message: "+ document.getElementById("message").value
  }).then("send success");
}