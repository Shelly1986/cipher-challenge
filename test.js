import { Typer } from "./util.js"

window.addEventListener("DOMContentLoaded", async event => {
  const element = document.getElementById('testdiv')
  await Typer.display(element, 'Sarah continues her quest to unravel the secrets of the Galactic Keystone. As she explores further, she finds a hidden chamber with an ancient inscription. The inscription reads: "I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?"');
  
  for (let node of document.querySelectorAll(".hidden")) {
    node.classList.remove("hidden")
  }
})
