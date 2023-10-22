import "./styles.scss"
import gsap from "gsap";

interface IPromoTypes {
    parent : HTMLElement | null
    title : HTMLHeadingElement | null
}

class Promo implements IPromoTypes {
    parent: HTMLElement | null; 
    title: HTMLHeadingElement | null;
    constructor() {
        this.parent = document.getElementById("promo")
        this.title = document.querySelector(".title")
    }

    init() {
        gsap.from('.title', {duration : 1, x: -200, opacity : 0})
    }
}

export default new Promo();