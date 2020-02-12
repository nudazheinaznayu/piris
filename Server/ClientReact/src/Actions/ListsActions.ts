import {ListsApi}  from "../Api/ListsApi"

export const GetCities =async () => {
    return await ListsApi.getCities();
}

export const GetNationalities = async () => {
    return await ListsApi.getNationalities();
}