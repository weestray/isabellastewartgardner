/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
function showInfo(paintingId) {

    const panels = document.querySelectorAll('.info-panel');
    panels.forEach(panel => panel.style.display = 'none');
    

    const panel = document.getElementById(paintingId);
    if (panel) {
        panel.style.display = 'block';
        document.querySelector('.overlay').style.display = 'block'; // Show overlay
    }
}

function closeInfo() {

    const panels = document.querySelectorAll('.info-panel');
    panels.forEach(panel => panel.style.display = 'none');
    document.querySelector('.overlay').style.display = 'none';
}



const monalisafactbox = document.getElementById('monalisafactbox');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const monalisafacts = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];





let currentIndex = 0;

function updatemonalisafact() {
  monalisafactbox.textContent = monalisafacts[currentIndex];
  
  if (currentIndex === 0) {
    leftButton.disabled = true;
  } else {
    leftButton.disabled = false;
  }


  if (currentIndex === monalisafacts.length - 1) {
    rightButton.disabled = true;
  } else {
    rightButton.disabled = false;
  }
}

leftButton.addEventListener('click', function() {
  if (currentIndex > 0) {
    currentIndex--; 
    updatemonalisafact();
  }
});

rightButton.addEventListener('click', function() {
  if (currentIndex < monalisafacts.length - 1) {
    currentIndex++; 
    updatemonalisafact();
  }
});


updatemonalisafact();