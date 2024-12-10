


gsap.registerPlugin(ScrollTrigger);

var divisor = document.getElementById("divisor"),
    handle = document.getElementById("handle"),
    slider = document.getElementById("slider");

function moveDivisor() {
  handle.style.left = slider.value+"%";
	divisor.style.width = slider.value+"%";
}

window.onload = function() {
	moveDivisor();
};



gsap.to("#minutesCount", { scrollTrigger: '#moneyCount', innerText: 81, duration: 3, 
  snap: {
    innerText:3
  } 
  });

  gsap.to("#paintingsCount", { scrollTrigger: '#moneyCount', innerText: 13, duration: 3, 
    snap: {
      innerText:1
    } 
    });
  
    gsap.to("#moneyCount", { scrollTrigger: '#moneyCount', innerText: 500, duration: 3, 
      snap: {
        innerText:10
      } 
      });

      




let svg = document.querySelector("svg");
let path = svg.querySelector("path");

const pathLength = path.getTotalLength()
console.log(pathLength);
gsap.set(path , {strokeDasharray: pathLength});
gsap.fromTo(
  path,
  {
    strokeDashoffset: pathLength,
  },
  {
    strokeDashoffset:0,
    duration: 10,
  
    scrollTrigger:{
      trigger: ".svg-container",
      start: "bottom bottom",
      end: "top 200px",
    scrub: 1,
    }
  }
)

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
	scrollTrigger: {
		trigger: "#hero",
		start: "top top",
		end: "bottom top",
		scrub: true
	}
});

gsap.utils.toArray(".parallax").forEach(layer => {
	const depth = layer.dataset.depth;
	const movement = -(layer.offsetHeight * depth)
	tl.to(layer, {y: movement, ease: "none"}, 0)
});

gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector(".container");


const selectHotspot = (e) => {
  const clickedHotspot = e.target.parentElement;
  const container = clickedHotspot.parentElement;
  
  // only include hotspots within same image to allow one open hotspot per image; change "container" to "document" to allow only one open hotspot for entire page:
  const hotspots = document.querySelectorAll(".lg-hotspot"); 
  hotspots.forEach(hotspot => {
    if (hotspot === clickedHotspot) {
      hotspot.classList.toggle("lg-hotspot--selected");
    } else {
      hotspot.classList.remove("lg-hotspot--selected");
    }
  });
}

(() => {
  const buttons = document.querySelectorAll(".lg-hotspot__button");
  buttons.forEach(button => {
    button.addEventListener("click", selectHotspot);
  });
})();


/*

gsap.fromTo('#degas', { filter: "grayscale(100%)" }, {   scrollTrigger: '#degas', delay: 1.0, duration: 2.0, filter: "grayscale(0%)" })

gsap.fromTo('#stormsea', { filter: "grayscale(100%)" }, {   scrollTrigger: '#stormsea', delay: 2.0, duration: 2.0, filter: "grayscale(0%)" })

gsap.fromTo('#concert', { filter: "grayscale(100%)" }, {   scrollTrigger: '#concert', delay: 2.0, duration: 2.0, filter: "grayscale(0%)" })

gsap.fromTo('#cheztort', { filter: "grayscale(100%)" }, {   scrollTrigger: '#cheztort', delay: 2.0, duration: 2.0, filter: "grayscale(0%)" })

gsap.to('#degas', {
  scrollTrigger: '#stormsea', 
  opacity: 0,
  duration: 3,
  delay: 2,
  yoyo: true
});

gsap.to('#stormsea', {
  scrollTrigger: '#cheztort', 
  saturation: 0,
  duration: 3,
  delay: 2,
  yoyo: true
});
gsap.to('#cheztort', {
  scrollTrigger: '#concert', 
  opacity: 0,
  duration: 3,
  delay: 2,
  yoyo: true
});


gsap.to('#concert', {
  scrollTrigger: '#concert', 
  opacity: 0,
  duration: 5,
  delay: 3,
  yoyo: true
});
*/


