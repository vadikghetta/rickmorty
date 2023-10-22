import "./comics.scss"
import { IResultCharacter } from './../../interfaces/characters';
import {URL} from "../../constants";
import {TypeUrl} from "../../types";
import {GetDataApi} from "../../utils";
import {ROOT_INDEX} from "../../constants";
import Card from "../card"
import ErrorComponent from "../error";


interface ICharectersComponent {
    state : {
        data : IResultCharacter[] | []
    }
    render() : void
}


class Characters implements ICharectersComponent {
    state = {
        data : [] as IResultCharacter[] | []
    };
    private list = document.createElement("ul");

    renderCharaCters (data : IResultCharacter[]) {
        this.list.classList.add("wrapper")
        ROOT_INDEX.appendChild(this.list);
        this.updateData(data)
        this.state.data.map(element => {
            const {id, name, status, image} = element;
            return (
                new Card(this.list, name, image, id).render()
            )
        })
    }

   updateData (data : IResultCharacter[]) {
        this.state.data = data
   } 


    async render () {
       
        const data = await GetDataApi.getDataCharacters(`${URL}/${TypeUrl.character}`)
        if(data) {
            const {results} = data;
            this.renderCharaCters(results);
           
        }else {
            ErrorComponent.render()
        }
       
    }
}

export default new Characters()