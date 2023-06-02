import { Typer } from "./util.js"

window.addEventListener("DOMContentLoaded", async event => {
  const element = document.getElementById('text9')
  await Typer.display(element, "Upon deciphering the morse code, Sarah begins to investigate further, searching for celestial maps within the hidden chamber. After thorough exploration, she discovers an ancient manuscript that depicts a detailed celestial map. Sarah meticulously studies the ancient manuscript, trying to decode its hidden message. Amongst the illustrations, she notices a peculiar inscription written in an unfamiliar script. After careful analysis, she realizes that the text is encoded using the Atbash cipher, a simple substitution cipher where each letter is replaced with its counterpart from the opposite end of the alphabet.");

  for (let node of document.querySelectorAll(".hidden")) {
    node.classList.remove("hidden")
  }
})