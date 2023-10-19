import "./style.scss";
import {url} from "./constants/index";
import {TypeUrl} from "./types/index";
import {GetDataApi} from "./utils/index"






(async () => {
    const data = await  GetDataApi.getDataCharacters(`${url}/${TypeUrl.character}`);
    console.log(data)
})()
