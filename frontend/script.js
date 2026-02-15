const skillBars = document.querySelectorAll(".skill-progress");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            const width = entry.target.style.width;
            entry.target.style.width = "0";
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
        }
    });
}, {threshold: 0.5});

skillBars.forEach( bar =>{
    observer.observe(bar);
});


document.querySelectorAll('a[href^="0"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize and animate particles
function animateParticles() {
  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    // Bounce off edges
    if (p.x < 0 || p.x > 100) p.vx *= -1;
    if (p.y < 0 || p.y > 100) p.vy *= -1;
    p.el.style.left = p.x + '%';
    p.el.style.top = p.y + '%';
  }
  requestAnimationFrame(animateParticles);
}

window.addEventListener('DOMContentLoaded', () => {
  // Start particles effect with 80 particles
  if (document.getElementById('particlesContainer')) {
    initParticles(80);
    animateParticles();
  }
});


const particles = [];
function initParticles(count) {
  const container = document.getElementById("particlesContainer");
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = "particle";
    el.style.cssText = `
      position: absolute;
      width: 2px; height: 2px;
      background: white;
      border-radius: 50%;
      opacity: ${Math.random()};
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
    `;
    container.appendChild(el);
    particles.push({
      el,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.05,
      vy: (Math.random() - 0.5) * 0.05,
    });
  }
}