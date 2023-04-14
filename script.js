const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

function jump(event) {
  if (event.key === "Enter" || event.code === "Space" || event.key === 'ArrowUp'){
  mario.classList.add('jump');
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
  }
}

const loop = setInterval(() => {
  const pipeposition = pipe.offsetLeft;
  const marioposition = +window.getComputedStyle(mario).bottom.replace('px', '');
  
  if (pipeposition <= 120 && pipeposition > 0 && marioposition < 100) {
    mario.src='imgs/mario-morte.png';
    
    pipe.style.animation = 'none';
    pipe.style.left = `${pipeposition}px`;
    
    mario.style.animation = 'none';
    mario.style.bottom = `${marioposition}px`;  

    mario.style.width = '200px'
    mario.style.marginLeft = '50px'
      


    clearInterval(loop);
    
  };
}, 10);

document.addEventListener('keydown', jump);

