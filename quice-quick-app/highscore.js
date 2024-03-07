const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const highsScoreList = document.getElementById("highScoreList");
const list = document.createElement("li");

highsScoreList.innerHTML = highScores
  .map((score) => {
    return `<li class="high-scores">${score.name} - ${score.score}</li> `;
  })
  .join("");
