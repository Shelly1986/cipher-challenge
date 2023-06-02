import { Typer } from "./util.js"

window.addEventListener("DOMContentLoaded", async event => {
  const element = document.getElementById('text10')
  await Typer.display(element, "Since the last clue was about a discovery, Sarah immediately thinks of the old lab she had seen many times while entering the research institute. She runs off to the laboratory and breaks open the lock. Inside the laboratory, she finds a series of scientific equipment and peculiar objects. Amongst these objects, she finds a tiny locked box which looks like a constellation. She finds the word 'unable' inscribed on it and letter keys to key in the password for the lock.");

  for (let node of document.querySelectorAll(".hidden")) {
    node.classList.remove("hidden")
  }
})