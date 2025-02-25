let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.screenY>100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    //reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

const typed = new Typed('.multiple-text',{
    strings:['IT Student','UI/UX Designer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get values from input fields
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    // Validation: Ensure all fields are filled
    if (name === "" || email === "" || mobile === "" || subject === "" || message === "") {
        alert("Please fill in all fields before submitting.");
        return;
    }

    // Replace with your WhatsApp number (without '+' and spaces)
    let phoneNumber = "9345319759";

    // Format the WhatsApp message
    let whatsappMessage = `Hello, I received a new inquiry:%0A%0A👤 Name: ${name}%0A📧 Email: ${email}%0A📱 Mobile: ${mobile}%0A📝 Subject: ${subject}%0A✉️ Message: ${message}`;

    // Open WhatsApp with the pre-filled message
    let whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
});


document.getElementById("year").textContent = new Date().getFullYear();