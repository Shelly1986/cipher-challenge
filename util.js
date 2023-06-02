export class Typer {
  static async display(element, text) {
    const typer = new Typer(element, text)
    return typer.run()
  }

  constructor(element, text) {
    this.element = element
    this.text = text
    this.index = 0
  }

  async run() {
    return new Promise((resolve, reject) => {
      const intervalId = setInterval(event => {
        const hasFinished = this.type()
        if (hasFinished) {
          window.clearInterval(intervalId)
          resolve()
        }
      }, 35);        
    })
  }

  type() {
    if (this.index < this.text.length){
      const letter = this.text[this.index++]
      this.element.innerHTML += letter
      return false
    } else {
      return true
    }
  }
}