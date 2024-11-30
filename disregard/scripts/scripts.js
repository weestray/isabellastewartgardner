/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
function showInfo(paintingId) {

    const panels = document.querySelectorAll('.info-panel');
    panels.forEach(panel => panel.style.display = 'none');
    

    const panel = document.getElementById(paintingId);
    if (panel) {
        panel.style.display = 'block';
        document.querySelector('info-panel').style.display = 'block'; 
    }
}

function closeInfo() {

    const panels = document.querySelectorAll('.info-panel');
    panels.forEach(panel => panel.style.display = 'none');
}



const monalisafactbox = document.getElementById('monalisafactbox');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const monalisafacts = [
`Before its theft in 1911, the Mona Lisa was well-regarded but not the global icon it is today. The heist made headlines worldwide and transformed the painting into a cultural treasure.`, 
`Thief Vincenzo Peruggia, a former Louvre employee, disguised himself as a worker, hid in a storage closet overnight, and walked out with the painting under his apron.`, 
`When the painting was first discovered missing, museum staff assumed it had been taken to be photographed or cleaned. It wasn’t until the next day that they realized it had been stolen.`, 
`Pablo Picasso and his friend Guillaume Apollinaire were briefly questioned due to their known criticism of the Louvre.`, 
`Peruggia was eventually caught when he tried to sell the painting two years later. As for his motive, he claimed to have stolen the painting as an act of patriotism, as he believed the Mona Lisa belonged in Italy, though it had been legally acquired by France centuries earlier.`];


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





