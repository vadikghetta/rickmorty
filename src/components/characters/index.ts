import "./comics.scss"
import { IResultCharacter } from './../../interfaces/characters';
import {URL} from "../../constants/index";
import {TypeUrl} from "../../types/index";
import {GetDataApi} from "../../utils/index";
import {ROOT_INDEX} from "../../constants";
import Card from "../card"


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

   updateData (data : IResultCharacter[]) {
        this.state.data = data
   } 
    async render () {
        this.list.classList.add("wrapper")
        ROOT_INDEX.appendChild(this.list);
        const {results} = await GetDataApi.getDataCharacters(`${URL}/${TypeUrl.character}`)
       if(results) {
        this.updateData(results)
        this.state.data.map(element => {
            const {id, name, status, image} = element;
            return (
                new Card(this.list, name, image, id).render()
            )
        })
      
       }
       
    }
}

export default new Characters()