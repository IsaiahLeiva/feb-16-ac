import { generateId } from '../Utils/generateId.js'

export class Car{
  constructor({make, model, year, price, description, color, imgUrl}){
    this.id = generateId()
    this.make = make,
    this.model = model,
    this.year = year,
    this.price = price,
    this.description = description,
    this.color = color, 
    this.imgUrl = imgUrl
  }

  get Template(){
    return `
      <div class="col-md-4">
        <div class="bg-white rounded shadow">
          <img class="img-fluid rounded-top" src="${this.imgUrl}" alt="car image">
          <div class="p-3">
            <p>${this.make}</p>
            <p>${this.model}</p>
            <p>${this.year}</p>
            <p>${this.description}</p>
            <p>$${this.price}</p>
            <p>Color: ${this.color}</p>
          </div>
          <button class="btn btn-outline-danger" onclick="app.carsController.deleteCar('${this.id}')"> delete </button>
        </div>
      </div>
    `
  }
}