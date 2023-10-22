import "./styles.scss"
import { TypeUrl } from "../../types";
import {URL} from "../../constants";
import Info from "../info"


interface ICardInterface {
   card : Element
   img : Element
    render () : void
    title : Element
}


class Card implements ICardInterface {
    card: HTMLLIElement;
    img: HTMLImageElement;
    title: HTMLHeadingElement;

    constructor(public parent : Element | null, public name : string, public imageSrc : string, public id : number) {
        this.parent = parent;
        this.name = name;
        this.imageSrc = imageSrc;
        this.card = document.createElement("li");
        this.img = document.createElement("img");
        this.title = document.createElement("h3");
    }

    bindListners() {
        this.card.addEventListener("click", () => this.click( this.id))
    }
    click(id : number) {
        const url = `${URL}${TypeUrl.character}/${id}`;
        Info.render(url)
    }
    
    createCard () {
        this.title.innerText = this.name;
        this.img.src = this.imageSrc;
        this.img.width = 200;
        this.img.height = 200;
        this.img.alt = this.name;
        this.card.appendChild(this.title)
        this.card.appendChild(this.img)
        this.card.classList.add("card")
        this.parent.appendChild(this.card)
    }
    render ()  {
        this.createCard()
        this.bindListners()
    }
    
   
}

export default Card;