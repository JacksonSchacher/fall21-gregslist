import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";

class HouseService {
    addHouse(houseData) {
        console.log('new house yo, in hizzouse service')
        let newHouse = new House(houseData)

        ProxyState.houses = [...ProxyState.houses, newHouse]
    }
}

export const houseService = new HouseService()