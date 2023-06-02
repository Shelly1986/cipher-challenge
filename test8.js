import { Typer } from "./util.js"

window.addEventListener("DOMContentLoaded", async event => {
  const element = document.getElementById('text8')
  await Typer.display(element, "As Sarah opens the vault with the diagonal pattern, she finds a peculiar old book inside. The book appears to be filled with a collection of cryptic writings. Amongst the pages, she finds a note with a morse code. The morse code is: ..-/-./.-../---/-.-./-.-/.../-/.-/ .-./-.-./---/-../.");

  for (let node of document.querySelectorAll(".hidden")) {
    node.classList.remove("hidden")
  }
})