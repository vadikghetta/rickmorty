
interface ICardInterface {
   card : Element
   img : Element
    createElement () : void
    title : Element
}


class Card implements ICardInterface {
    card: HTMLLIElement;
    img: HTMLImageElement;
    title: HTMLHeadingElement;

    constructor(public parent : Element | null, public name : string, public imageSrc : string) {
        this.parent = parent;
        this.name = name;
        this.imageSrc = imageSrc;
        this.card = document.createElement("li")
        this.img = document.createElement("img")
        this.title = document.createElement("h3")
        this.card.addEventListener("click", () => {
            this.click()
        })
    }

    click() {
        console.log("click")
    }
    
    createElement ()  {
        this.title.innerText = this.name;
        this.img.src = this.imageSrc;
        this.img.width = 200;
        this.img.height = 200;
        this.img.alt = this.name;
        this.card.appendChild(this.title)
        this.card.appendChild(this.img)
        this.parent.appendChild(this.card)
    }
    
   
}

export default Card;