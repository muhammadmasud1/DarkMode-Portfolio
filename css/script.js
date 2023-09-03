let head = document.querySelector('.nav');
let showicon = document.querySelector('.close-icons');

showicon.addEventListener('click', function(){
            head.classList.toggle('active');
})