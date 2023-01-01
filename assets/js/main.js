// TODO ======================= WATERFALL =======================
let textWaterfall = document.getElementById("text-waterfall");
let bird1 = document.getElementById("bird1");
let bird2 = document.getElementById("bird2");
let forest = document.getElementById("forest");
let rocks = document.getElementById("rocks");
let water = document.getElementById("water");
let btn = document.getElementById("btn");
let header = document.getElementById("header");

window.addEventListener("scroll", function () {
  let value = this.window.scrollY;

  textWaterfall.style.top = 50 + value * -0.5 + "%";
  bird1.style.top = value * -1.5 + "px";
  bird1.style.left = value * 2 + "px";
  bird2.style.top = value * -1.5 + "px";
  bird2.style.left = value * -5 + "px";
  btn.style.marginTop = value * 1 + "px";
  rocks.style.top = value * -0.12 + "px";
  forest.style.top = value * 0.25 + "px";
  header.style.top = value * 0.5 + "px";
});

// TODO ======================= MOUNTAIN =======================
gsap.from("#m1", {
  scrollTrigger: {
    scrub: true,
  },
  y: 400,
});
gsap.from("#m2", {
  scrollTrigger: {
    scrub: true,
  },
  y: 100,
});
gsap.from("#t2", {
  scrollTrigger: {
    scrub: true,
  },
  x: -500,
});
gsap.from("#t1", {
  scrollTrigger: {
    scrub: true,
  },
  x: 500,
});
gsap.from("#man", {
  scrollTrigger: {
    scrub: true,
  },
  x: -250,
});
gsap.from("#plants", {
  scrollTrigger: {
    scrub: true,
  },
  x: -500,
});
gsap.from("#text-mountain", {
  scrollTrigger: {
    scrub: true,
  },
  x: 500,
});
