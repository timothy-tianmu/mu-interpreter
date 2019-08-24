import {Lexer} from './Lexer'
class IDE {
  constructor() {
    this.root = document.getElementById("root");
    this.template = `
      <div id="ide">
        <div class="ide_title">
          <h1>Mu IDE</h1>
        </div>
        <div class="ide_main">
          <div class="ide_editor" contenteditable=true></div>
          <div class="ide_console"></div>
        </div>
        <button class="ide_button">编译</button>
      </div>
    ` 
    this.root.insertAdjacentHTML("beforeend", this.template);
    this.elem = document.getElementById("ide");
    this.editor = this.elem.getElementsByClassName("ide_editor")[0]
    this.console = this.elem.getElementsByClassName("ide_console")[0]
    this.btn = this.elem.getElementsByClassName("ide_button")[0]
    this.bindEvents()
  }

  bindEvents() {
    this.btn.addEventListener("click", () => {
      this.compile()      
    })
  }

  getContent() {
    return this.editor.innerText
  }

  compile() {
    let code = this.getContent()
    let lexer = new Lexer(code)
    let tokens = lexer.lexing()
    for (let t = 0; t < tokens.length; t++) {
      var tk = tokens[t]
      tokens[t] = tk ? tk.literal : 'null'
    }
    this.console.innerText = tokens.join(' ')
  }

  test() {
    return 'ok!'
  }
}

export default IDE;