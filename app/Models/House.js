import { generateId } from "../Utils/generateId.js";

export class House {

    constructor(houseData) {
        this.id = houseData.id || generateId()
        this.address = houseData.address
        this.year = houseData.year
        this.bedrooms = houseData.bedrooms
        this.bathrooms = houseData.bathrooms
        this.description = houseData.description
        this.img = houseData.img
        this.price = houseData.price
    }

    get CardTemplate() {
        return /*html*/ `
        <div class="text-light col-lg-3 mb-4 listing">
        <div class="card bg-dark">
            <img src="${this.img}" alt="listing image" class="rounded">
            <div class="card-body">
            <h5 class="d-flex justify-content-between">
                <span>${this.bedrooms} Beds : ${this.bathrooms} Bath</span><hr><span>${this.address}</span>
                <span>$ ${this.price}</span>
            </h5>
            <p>${this.description}</p>
            </div>
        </div>
        </div>
        `
    }
}