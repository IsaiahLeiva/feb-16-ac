import { generateId } from "../Utils/generateId.js"


export class House {
    constructor(bedrooms, price, fullDescription, image) {
        this.bedrooms = bedrooms,
            this.price = price,
            this.fullDescription = fullDescription,
            this.image = image
    }



    get template() {
        return `
    <div class="col-md-4">
        <div class="bg-white rounded shadow">
          <img class="img-fluid rounded-top" src="${this.image}" alt="House image">
          <div class="p-3">
            <p>${this.bedrooms}</p>
            <p>${this.price}</p>
            <p>${this.fullDescription}</p>
          </div>
          <button class="btn btn-outline-danger" onclick="app.houseController.deleteHouse('${this.id}')"> delete </button>
        </div>
      </div>
    `
    }
}