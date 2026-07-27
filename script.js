const button = document.getElementById("beginJourney");
button.addEventListener("click", () => {
  document.querySelector(".story").scrollIntoView({
    behavior: "smooth"
  });
});

const stars = document.getElementById("stars");
for(let i = 0; i < 200; i++){
  const star = document.createElement("div");
  star.classList.add("star");
  
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";

  star.style.animationDelay = Math.random() * 2 + "s";
  stars.appendChild(star);
}

const seed = document.getElementById("seed3d");

document.addEventListener("mousemove", (e) => {

  if(!seed) return;

  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  seed.style.transform =
    `translate(calc(-50% + ${x}px), ${y}px)`;

});

const stories = document.querySelectorAll(".story");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{
  threshold:0.3
});

stories.forEach(section=>{
  observer.observe(section);
});

const restart = document.getElementById("restart");

if (restart) {
  restart.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

  const totalHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress =
    (window.scrollY / totalHeight) * 100;

  progressBar.style.height = progress + "%";

});

const rain = document.querySelector(".rain");

for(let i = 0; i < 80; i++){

  const drop = document.createElement("div");

  drop.classList.add("drop");

  drop.style.left = Math.random() * 100 + "%";

  drop.style.animationDuration =
    (0.8 + Math.random() * 0.8) + "s";

  drop.style.animationDelay =
    Math.random() * 2 + "s";

  rain.appendChild(drop);

}

const leaves = document.querySelector(".leaves");

for(let i = 0; i < 35; i++){

  const leaf = document.createElement("div");

  leaf.classList.add("leaf");

  leaf.style.left = Math.random() * 100 + "%";

  leaf.style.animationDuration =
    (6 + Math.random() * 5) + "s";

  leaf.style.animationDelay =
    Math.random() * 6 + "s";

  leaves.appendChild(leaf);

}

window.addEventListener("load", () => {

  setTimeout(() => {

    document
      .getElementById("loader")
      .classList.add("hide");

  }, 1800);

});

const particles = document.querySelector(".particles");

for(let i=0;i<25;i++){

    const particle=document.createElement("div");

    particle.classList.add("particle");

    particle.style.left=Math.random()*100+"%";

    particle.style.animationDuration=
        (4+Math.random()*4)+"s";

    particle.style.animationDelay=
        Math.random()*5+"s";

    particles.appendChild(particle);

}

const dust=document.querySelector(".dust");

for(let i=0;i<40;i++){

    const d=document.createElement("div");

    d.classList.add("dust-particle");

    d.style.left=Math.random()*100+"%";

    d.style.top=Math.random()*100+"%";

    d.style.animationDuration=
        (8+Math.random()*6)+"s";

    d.style.animationDelay=
        Math.random()*5+"s";

    dust.appendChild(d);

}

const hope = document.querySelector(".hope-stars");

if (hope) {

    for (let i = 0; i < 50; i++) {

        const star = document.createElement("div");

        star.classList.add("hope-star");

        star.style.left = Math.random() * 100 + "%";

        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay = Math.random() * 2 + "s";

        hope.appendChild(star);

    }

}

const ending = document.getElementById("ending");

const endingObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            document.body.classList.add("ending-mode");

        } else {

            document.body.classList.remove("ending-mode");

        }

    });

}, {
    threshold: 0.4
});

endingObserver.observe(ending);

const restartBtn = document.getElementById("restart");

if(restartBtn){

restartBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}