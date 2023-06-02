import { Typer } from "./util.js"

window.addEventListener("DOMContentLoaded", async event => {
  const element = document.getElementById('text11')
  await Typer.display(element, "As Sarah touches the Keystone hidden inside the box, its power resonates within her. She comprehends the accumulated wisdom and knowledge hidden within the artifact. Armed with the Galactic Keystone's wisdom and understanding, Sarah realizes that she possesses the means to establish a connection with the alien civilization she has learned about. Using advanced technology embedded within the Keystone, she activates a communication device that transcends the boundaries of space and time.");

  for (let node of document.querySelectorAll(".hidden")) {
    node.classList.remove("hidden")
  }
})