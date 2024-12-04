


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


const alarmButton = document.getElementById("alarm-button");
const alarmOverlay = document.createElement("div");
const hiddenParagraph = document.getElementById("hidden-paragraph");


alarmOverlay.id = "alarm-overlay";
document.body.appendChild(alarmOverlay);





alarmButton.addEventListener("click", () => {
  let flashCount = 0;
  alarmOverlay.style.display = "block"; 

  
  const flashInterval = setInterval(() => {
    alarmOverlay.style.display =
      alarmOverlay.style.display === "block" ? "none" : "block";
    flashCount++;

    if (flashCount >= 10) {
      clearInterval(flashInterval);
      alarmOverlay.style.display = "none"; 

      hiddenParagraph.hidden = false;
    }
  }, 500); 
});


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
        innerText:5
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
      start: "top 200px",
      end: "top top",
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


/*
gsap.to('#degas', {
  scrollTrigger: '#stormsea', 
  opacity: 0,
  duration: 3,
  delay: 2,
  yoyo: true
});

gsap.to('#stormsea', {
  scrollTrigger: '#cheztort', 
  opacity: 0,
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



gsap.to('#globe', { 
  scrollTrigger: '#globe',
    duration: .4,
    scaleX: -1,
    repeat: 8,
    yoyo: true
  });



gsap.to(".box", {
});*/ 


