import "./styles.scss";
import {ROOT_INDEX} from "../../constants"


class ErrorComponent {
    errorWrapper : HTMLDivElement;
    errorTitle : HTMLHeadingElement;
    errorImg : HTMLImageElement; 
    constructor() {
        this.errorWrapper = document.createElement("div");
        this.errorImg = document.createElement("img");
        this.errorTitle = document.createElement("h2");
        this.errorWrapper.classList.add("error")
    }
    render() {
        this.errorTitle.innerText = "Something went wrong";
        this.errorWrapper.appendChild(this.errorTitle);

        ROOT_INDEX?.appendChild(this.errorWrapper)
    }
}


export default new ErrorComponent();