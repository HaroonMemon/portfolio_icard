var home = document.getElementById("home");
var about = document.getElementById("about");
var resume = document.getElementById("resume");
var portfolio = document.getElementById("portfolio");
var blog = document.getElementById("blog");
var contact = document.getElementById("contact");

var active_home = document.getElementById("home-link");
var active_about = document.getElementById("about-link");
var active_resume = document.getElementById("resume-link");
var active_portfolio = document.getElementById("portfolio-link");
var active_blog = document.getElementById("blog-link");
var active_contact = document.getElementById("contact-link");

function home_show() {
    active_home.classList = "active"
    active_about.classList = "non-active"
    active_resume.classList = "non-active"
    active_portfolio.classList = "non-active"
    active_blog.classList = "non-active"
    active_contact.classList = "non-active"

    home.style.display = "flex";
    home.style.transform = "translate(0%)";
    home.style.zIndex = "5000";
    home.style.transition = "1s";

    about.style.display = "none";
    resume.style.display = "none";
    portfolio.style.display = "none";
    blog.style.display = "none";
    contact.style.display = "none";

    about.style.transform = "translate(100%)";
    resume.style.transform = "translate(100%)";
    portfolio.style.transform = "translate(100%)";
    blog.style.transform = "translate(100%)";
    contact.style.transform = "translate(100%)";
}

function about_show() {
    active_home.classList = "non-active"
    active_about.classList = "active"
    active_resume.classList = "non-active"
    active_portfolio.classList = "non-active"
    active_blog.classList = "non-active"
    active_contact.classList = "non-active"

    about.style.display = "flex";
    about.style.transform="translate(0%)";
    about.style.zIndex = "5000";
    about.style.transition = "1s";

    home.style.display = "none";
    resume.style.display = "none";
    portfolio.style.display = "none";
    blog.style.display = "none";
    contact.style.display = "none";

    home.style.transform = "translate(100%)";
    resume.style.transform = "translate(100%)";
    portfolio.style.transform = "translate(100%)";
    blog.style.transform = "translate(100%)";
    contact.style.transform = "translate(100%)";}

function resume_show() {
    active_home.classList = "non-active"
    active_about.classList = "non-active"
    active_resume.classList = "active"
    active_portfolio.classList = "non-active"
    active_blog.classList = "non-active"
    active_contact.classList = "non-active"

    resume.style.display = "flex";
    resume.style.transform = "translate(0%)";
    resume.style.zIndex = "5000";
    resume.style.transition = "1s";

    home.style.display = "none";
    about.style.display = "none";
    portfolio.style.display = "none";
    blog.style.display = "none";
    contact.style.display = "none";

    home.style.transform = "translate(100%)";
    about.style.transform = "translate(100%)";
    portfolio.style.transform = "translate(100%)";
    blog.style.transform = "translate(100%)";
    contact.style.transform = "translate(100%)";}


function portfolio_show() {
    active_home.classList = "non-active"
    active_about.classList = "non-active"
    active_resume.classList = "non-active"
    active_portfolio.classList = "active"
    active_blog.classList = "non-active"
    active_contact.classList = "non-active"
    
    portfolio.style.display = "flex";
    portfolio.style.transform = "translate(0%)";
    portfolio.style.zIndex = "5000";
    portfolio.style.transition = "1s";

    home.style.display = "none";
    about.style.display = "none";
    resume.style.display = "none";
    blog.style.display = "none";
    contact.style.display = "none";

    home.style.transform = "translate(100%)";
    about.style.transform = "translate(100%)";
    resume.style.transform = "translate(100%)";
    blog.style.transform = "translate(100%)";
    contact.style.transform = "translate(100%)";
}

function blog_show() {
    active_home.classList = "non-active"
    active_about.classList = "non-active"
    active_resume.classList = "non-active"
    active_portfolio.classList = "non-active"
    active_blog.classList = "active"
    active_contact.classList = "non-active"

    blog.style.display = "flex";
    blog.style.transform = "translate(0%)";
    blog.style.zIndex = "5000";
    blog.style.transition = "1s";

    home.style.display = "none";
    about.style.display = "none";
    resume.style.display = "none";
    portfolio.style.display = "none";
    contact.style.display = "none";

    home.style.transform = "translate(100%)";
    about.style.transform = "translate(100%)";
    resume.style.transform = "translate(100%)";
    portfolio.style.transform = "translate(100%)";
    contact.style.transform = "translate(100%)";
}

function contact_show() {
    active_home.classList = "non-active"
    active_about.classList = "non-active"
    active_resume.classList = "non-active"
    active_portfolio.classList = "non-active"
    active_blog.classList = "non-active"
    active_contact.classList = "active"
    
    contact.style.display = "flex";
    contact.style.transform = "translate(0%)";
    contact.style.zIndex = "5000";
    contact.style.transition = "1s";

    home.style.display = "none";
    about.style.display = "none";
    resume.style.display = "none";
    portfolio.style.display = "none";
    blog.style.display = "none";

    home.style.transform = "translate(100%)";
    about.style.transform = "translate(100%)";
    resume.style.transform = "translate(100%)";
    portfolio.style.transform = "translate(100%)";
    blog.style.transform = "translate(100%)";
}
