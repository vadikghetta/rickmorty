import "./styles.scss"
import gsap from "gsap";

interface IPromoTypes {
    parent : HTMLElement | null
    title : HTMLHeadingElement | null
}

class Promo implements IPromoTypes {
    parent: HTMLElement | null; 
    title: HTMLHeadingElement | null;
    t = gsap.timeline()
    constructor() {
        
    }

    init() {
        gsap.from('.title', {duration : 1, x: -200, opacity : 0 }),
        gsap.from('.subtitle', {duration : 1, y: 200, opacity : 0, delay : 1.5 })
    }
}

export default new Promo();