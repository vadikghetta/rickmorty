import axios from "axios";
import { ICharacterResults } from "../interfaces/characters";

export class GetDataApi {
    static async getDataCharacters(url: string) {
      try {
         const {data} =  await axios.get<ICharacterResults>(url)
         return data;
      }catch(e) {
        console.log(e)
      }
     }
 }
 