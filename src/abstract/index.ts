export abstract class  Card {
    constructor(public parent : Element | null) {
       this.parent = parent; 
    }
     createElement () {
        const li = document.createElement("li");
        this.parent?.appendChild(li);
    }
}