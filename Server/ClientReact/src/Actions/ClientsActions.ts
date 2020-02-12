import {ClientsApi}  from "../Api/ClientsApi"
import Client from "../Types/Client";
import AddUserResponse from "../Types/Response"

export const GetClients =async () => {
    try { 
        var result = await ClientsApi.getClients();
        return result;
    }
    catch(ex)
    {
        throw ex;
    }
}

export const AddClient = async (client: Client) => 
     await ClientsApi.addClient(client);


export const DeleteClient = async(client: Client) => 
{
    await ClientsApi.deleteClient(client.id!);
}

export const GetClient = async (clientId: string) => {
    return await ClientsApi.getClient(clientId);
}