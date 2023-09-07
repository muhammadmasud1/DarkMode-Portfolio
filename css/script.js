let head = document.querySelector('.nav');
let showicon = document.querySelector('.close-icons');

showicon.addEventListener('click', function(){
            head.classList.toggle('active');
})



const text = document.querySelector(".sec-text");

const textLoad = () => {

  setTimeout(() => {

    text.textContent = "Developer";

  }, 0);

  setTimeout(() => {

    text.textContent = "Freelancer";

  }, 4000);

  setTimeout(() => {

    text.textContent = "Youtuber";

  }, 8000);

}



textLoad();

setInterval(textLoad, 12000);