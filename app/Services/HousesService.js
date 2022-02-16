import { ProxyState } from "../AppState";
import { House } from "../Models/House";




class HousesService {
    createHouse(newHouse) {
        console.log('service has house', newHouse);
        let realHouse = new House(newHouse)
        console.log('it works', realHouse);
        ProxyState.houses = [realHouse, ...ProxyState.houses]

    }

    deleteHouse(houseID) {
        console.log('service can delete house', houseID);
        let indexToDelete = ProxyState.houses.findIndex(h => h.id == houseID)
        console.log('deleting index', indexToDelete);
        ProxyState.houses.splice(indexToDelete, 1)
        ProxyState.houses = ProxyState.houses
    }

}

export const housesService = new HousesService()