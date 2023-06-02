import { Typer } from "./util.js"

window.addEventListener("DOMContentLoaded", async event => {
  const element = document.getElementById('text6')
  await Typer.display(element, 'As she continues her exploration, Sarah discovers a hidden room behind a bookshelf. Inside the room, she finds an old parchment with a scrambled message: "SACBHNTELEUTIERHEIDHBUCRAN". Realizing that it might be another clue, Sarah examines the room for any hints. On a nearby wall, she notices a faint drawing of a zigzag pattern with the number "2" written next to it. Curious, she recalls her knowledge of the Rail Fence cipher. She quickly places the encoded message in the grid below and decodes it.');

  for (let node of document.querySelectorAll(".hidden")) {
    node.classList.remove("hidden")
  }
})
