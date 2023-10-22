import "./App.scss"
import Characters from "../characters"
import Promo from "../promo"


class App {
    
   async render() {
      Promo.init()
    await Characters.render()
   } 
}

export default new  App();