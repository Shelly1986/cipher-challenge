import { Typer } from "./util.js"

window.addEventListener("DOMContentLoaded", async event => {
  const element = document.getElementById('text7')
  await Typer.display(element, 'Hidden behind the blue curtain, Sarah discovers a hidden control panel with buttons and switches. The screen resembles a mobile phone screen. Next to the control panel, on the wall, she finds another riddle which will take her further into the quest.');

  for (let node of document.querySelectorAll(".hidden")) {
    node.classList.remove("hidden")
  }
})
