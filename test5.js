import { Typer } from "./util.js"

window.addEventListener("DOMContentLoaded", async event => {
  const element = document.getElementById('question5')
  await Typer.display(element, 'Sarah comes across another hidden compartment, and this time she finds a peculiar jigsaw puzzle. As she assembles the pieces, she realizes that the completed image forms a drawing of a pencil with a a lock. Sarah immediately starts looking in the chamber for a locked vault and finds one within no time. The letters inscribed on top of the valult are: "O ykk utre znk vuyyohorozoky tuz znk uhyzgirky". The key is the number of sides in one cell of a honeycomb.');

  for (let node of document.querySelectorAll(".hidden")) {
    node.classList.remove("hidden")
  }

})


