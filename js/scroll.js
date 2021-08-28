let scrollBtn = document.querySelector('.and');
let sections = document.querySelectorAll('section');

const scroll = () => {
    let position;
    sections.forEach((section, index) => {
        if(window.pageYOffset >= section.offsetTop && sections[index + 1]){
            position = sections[index + 1].offsetTop;
            return false
        }
    })
    
    if(window.pageYOffset < sections[0].offsetTop){
        position = sections[0].offsetTop;
    }

    $('html, body').animate({
                scrollTop: (position + 1)
            },{
                duration: 2000,
                start: () => {
                    scrollBtn.style.display = "none";
                },
                done: () => {
                    scrollBtn.style.display = "block";
                }
            } );
}

scrollBtn.addEventListener('click', scroll)