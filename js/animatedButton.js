const button = document.querySelector('.container_wrapper_btn');

function startAnimation() {
    button.style.animation = 'heartBeat 1s 2.5 alternate'; 
    setTimeout(() => {
        button.style.animation = 'heartBeat 1.5s infinite alternate'; 
    }, 3000); 
}

setTimeout(startAnimation, 5000);