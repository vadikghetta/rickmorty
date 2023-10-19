import "./App.scss"
import {url} from "../../constants/index";
import {TypeUrl} from "../../types/index";
import {GetDataApi} from "../../utils/index"


class App {
     async render () {
        const data = await GetDataApi.getDataCharacters(`${url}/${TypeUrl.character}`)
        console.log(data)
    }
}

export default new  App();