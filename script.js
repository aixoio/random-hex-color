var hex = "#ffffff";
const numberAndLetters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const hexLength = 6;

const btn = document.getElementById("btn");
const color = document.getElementById("hex");

function generateHexCode() {
  let hexTemp = "#";
  for (let i = 0; i < hexLength; i++) {
    let hexI = Math.floor((Math.random() * numberAndLetters.length));
    hexTemp += numberAndLetters[hexI];
  }
  return hexTemp;
}

btn.addEventListener("click", function () {
  const hexCode = generateHexCode();
  color.textContent = hexCode;
  document.body.style.backgroundColor = hexCode;
});
