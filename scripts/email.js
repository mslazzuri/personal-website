document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("dFxMb7SM4o3V45Fy2");

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_ef3p2vv", "template_d4teuvh", this)
      .then(() => {
        alert("Message sent successfully!");
        this.reset();
      }, (error) => {
        alert("Failed to send message. Please try again later.");
        console.error(error);
      });
  });
});
