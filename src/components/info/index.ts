import "./styles.scss";
import { GetDataApi } from "../../utils";
import {ROOT__MODAL} from "../../constants";

class Info {
    private modal : HTMLDivElement;
    private container : HTMLDivElement;
    private modalHeader : HTMLDivElement;
    private close : HTMLButtonElement;
    private title : HTMLHeadingElement;
    private image : HTMLImageElement;
    private infoList : HTMLUListElement;
    constructor () {
        this.modal = document.createElement("div");
        this.modal.classList.add("modal");
        this.container = document.createElement("div");
        this.container.classList.add("modal__inner");
        this.modal.appendChild(this.container);
        this.modalHeader = document.createElement("div");
        this.modalHeader.classList.add("modal__header");
        this.close = document.createElement("button");
        this.title = document.createElement("h3");
        this.image = document.createElement("img");
        this.infoList= document.createElement("ul");
    }

    createImage (src : string, alt : string) {
        this.image.src = src;
        this.image.alt = alt;
        this.image.width = 300;
        this.image.height = 300;
        this.image.classList.add("modal__img")
        this.container.appendChild(this.image)
    }
    
    bindTriggers() {
        this.close.addEventListener("click", () => {
            ROOT__MODAL.innerHTML = ""
        })
    }
    appendChilds(image : string, name : string, gender : string, location : string,species : string) {
        this.close.innerHTML = `
        <div></div>
        <div></div>
        `;
        this.close.classList.add("modal__close")
        this.title.innerText = name;
        this.infoList.innerHTML = `<li>${gender}</li>
        <li>${location}</li>
        <li>${species}</li>
        `
        this.infoList.classList.add("modal__list")
        this.modalHeader.appendChild(this.title)
        this.modalHeader.appendChild(this.close)
        this.container.appendChild(this.modalHeader);
        this.createImage(image, name);
        this.container.appendChild(this.infoList)

        
    }
    
    async render (url : string) {
        const {image,name, gender,species,location} = await GetDataApi.getDataCharacterById(url);
        this.appendChilds(image, name, gender, location.name, species)
        this.bindTriggers();

        
        ROOT__MODAL.appendChild(this.modal)
    }
}


export default new Info()