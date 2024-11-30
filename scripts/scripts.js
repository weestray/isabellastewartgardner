
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


hiddenParagraph.hidden = true;


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
      end: "top 100px",
    scrub: 1,
    }
  }
)

gsap.registerPlugin(ScrollTrigger);



/*gsap.to('#globe', { 
  scrollTrigger: '#globe',
    duration: .4,
    scaleX: -1,
    repeat: 8,
    yoyo: true
  });



gsap.to(".box", {
});*/ 


/*
const quoters = document.querySelectorAll('.quoter');

quoters.forEach((quoter) => {
 
  const quoteId = quoter.dataset.quote;
  const quoteElement = document.getElementById(quoteId);


  const showQuote = () => {
    quoteElement.style.display = 'block';
  };

  
  const hideQuote = () => {
    quoteElement.style.display = 'none';
  };


  quoter.addEventListener('mouseover', showQuote);
  quoter.addEventListener('mouseout', hideQuote);
});

*/