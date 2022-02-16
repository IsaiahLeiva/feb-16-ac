import { ProxyState } from "../AppState.js"



function _draw() {
    let template = ''
    ProxyState.houses.forEach(h => template += h.template)
    document.getElementById('listings').innerHTML = template
}

export class HousesController {
    constructor() {
        ProxyState.on('houses controller loaded')
    }

    viewHouses() {
        console.log('viewing houses');
        _draw()
        //FIX ME: Need to write getHouseform in components folder
        // document.getElementById('modal-body-slot').innerHTML = getHousesForm()
    }

    createHouse(event) {
        event.preventDefault()
        let form = event.target
        console.log('you created the house', form);
        let newHouse = {
            bedrooms: form.bedrooms.value,
            price: form.price.value,
            fulldescription: form.fullDescription.value,
            image: form.image.value
        }
        console.log('new house', newHouse);
        housesService.createHouse(newHouse)
        let modal = document.getElementById('new-listing')
        form.reset()
        bootstrap.Modal.getOrCreateInstance(modal).hide()
    }

    deleteHouse(houseID) {
        console.log('delete house', houseID);
        housesService.deleteHouse(houseID)
    }

}