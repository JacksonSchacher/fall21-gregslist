import { ProxyState } from "../AppState.js"
import { getHouseForm } from "../forms/HouseForm.js"
import { houseService } from "../Services/HouseService.js"

function _drawHouses() {
    let template = ''

    ProxyState.houses.forEach(house => template += house.CardTemplate)
    document.getElementById('listings').innerHTML = template
}

export class HousesController {
    constructor() {
        ProxyState.on('houses', _drawHouses)
    }

    addHouse() {
        event.preventDefault()

        /**
         * @type {HTMLFormElement}
         */

        // @ts-ignore
        const form = event.target

        const houseData = {
            address: form.address.value,
            year: form.year.value,
            bedrooms: form.bedrooms.value,
            bathrooms: form.bathrooms.value,
            description: form.description.value,
            img: form.img.value,
            price: form.price.value
        }

        try {
            houseService.addHouse(houseData)
        } catch (e) {
            console.error("yall fucked up didn't you A Aron")
            return
        }

        form.reset()
    }
    showHouses() {
        _drawHouses()
        document.getElementById('controls').innerHTML = `
        <button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Add House
</button>
    `
        document.getElementById('forms').innerHTML = getHouseForm()
    }

    toggleHouseForm() {
        document.getElementById('forms').classList.toggle('visually-hidden')
    }

}