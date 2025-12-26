// Dark/Light Mode Toggle
const modeBtn = document.getElementById('modeToggle');
modeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Smooth Scroll for Hero Button
const scrollBtn = document.getElementById('scrollBtn');
scrollBtn.addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Generate Floating Particles
for(let i=0; i<50; i++){
    let particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = Math.random() * window.innerHeight + 'px';
    particle.style.width = Math.random()*4 + 3 + 'px';
    particle.style.height = particle.style.width;
    particle.style.animationDuration = (5 + Math.random()*10) + 's';
    document.body.appendChild(particle);
}
