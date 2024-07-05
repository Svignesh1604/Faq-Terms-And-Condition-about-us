
function showContent(contentId) {
    document.querySelectorAll('.main-content, .subscribe-content').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(contentId).classList.add('active');
}
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}



    document.querySelectorAll('.nav-menu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
 


