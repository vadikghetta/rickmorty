import "./App.scss"
import Characters from "../characters"


class App {
    
   async render() {
    await Characters.render()
   } 
}

export default new  App();