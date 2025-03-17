// listing my buttons with var names
const loadVars = () => {
    const genButton = document.getElementById("genInfo");
    const interestButton = document.getElementById("interest");
    const kpopButton = document.getElementById("kpop");
    const resumeButton = document.getElementById("resume");
    const projButton = document.getElementById("project");
    const choerryButton = document.getElementById("choerry");
  }
  
  const genClick = () => {
    loadVars();
    const gen = genText.classList.contains("hidden");
    alert("gen");
    genButton.addEventListener("click", (event) => {
      if (gen) {
        genText.classList.remove("hidden");
        alert();
      } else {
        alert("stan loona");
      }})
    } 
  
  
  
  document.addEventListener("DOMContentLoaded", (event) => {  
    confirm("ARE YOU SURE YOU WANT TO LOAD THIS PAGE?");
    try {
      genClick();
    } catch (e) {
      console.error(e);
    }
  });