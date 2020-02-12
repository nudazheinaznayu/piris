import {httpGet, httpPost, httpDelete} from './Request/RequestApi'
import Client from "../Types/Client"
import AddUserResponse from "../Types/Response"

const controllerEndPoint = "clients"

export class ClientsApi {
    static async getClients(): Promise<Array<Client>>
    {
        return await httpGet(controllerEndPoint);
    }
    
    static async addClient(client: Client): Promise<AddUserResponse>
    {
       return await httpPost(controllerEndPoint, {body: client});
    }

    static async deleteClient(clientId: number)
    {
        return await httpDelete(controllerEndPoint + "/" + clientId.toString());
    }

    static async getClient(clientId: string): Promise<Client>
    {
        return await httpGet(controllerEndPoint+"/" + clientId);
    }
}