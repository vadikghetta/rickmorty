import "./App.scss"
import Characters from "../characters"
import Promo from "../promo"
import gsap from "gsap"


class App {
    t = gsap.timeline()
   async render() {
      gsap.from("main", {opacity : 0, duration : 2, ease : "linear"})
      Promo.init()
    await Characters.render()
   } 
}

export default new  App();