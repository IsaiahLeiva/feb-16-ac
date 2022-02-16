import { generateId } from "../Utils/generateId.js"


export class House {
    constructor({ bedrooms, price, fullDescription, image }) {
        this.bedrooms = bedrooms,
            this.price = price,
            this.fullDescription = fullDescription,
            this.image = image
    }



    get template() {
        return `
    <div class="col-md-4">
        <div class="bg-white rounded shadow">
          <img class="img-fluid rounded-top" src="${this.imgUrl}" alt="House image">
          <div class="p-3">
            <p>${this.make}</p>
            <p>${this.model}</p>
            <p>${this.year}</p>
            <p>${this.description}</p>
            <p>$${this.price}</p>
            <p>Color: ${this.color}</p>
          </div>
          <button class="btn btn-outline-danger" onclick="app.houseController.deleteHouse('${this.id}')"> delete </button>
        </div>
      </div>
    `
    }
}