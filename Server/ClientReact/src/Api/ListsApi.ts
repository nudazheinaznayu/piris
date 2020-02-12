import {httpGet} from './Request/RequestApi'
import City from "../Types/City"
import Nationality from "../Types/Nationality"

const controllerEndPoint = "Lists"

export class ListsApi {
    static async getCities(): Promise<Array<City>>
    {
        return await httpGet(controllerEndPoint+ '/cities');
    }
    
    static async getNationalities(): Promise<Array<Nationality>>
    {
        return await httpGet(controllerEndPoint+ '/nationalities');
    }
}