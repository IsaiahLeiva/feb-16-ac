import { generateId } from "../Utils/generateId.js";


export class House {
    constructor({ name, salary, description, link }) {
        this.name = name,
            this.salary = salary,
            this.description = description,
            this.link = link
    }

    get template() {
        return `
        <div class="col-md-4">
        <div class="bg-white rounded shadow">
          <img class="img-fluid rounded-top" src="${this.imgUrl}" alt="House image">
          <div class="p-3">
            <p>${this.title}</p>
            <p>${this.salary}</p>
            <p>${this.Description}</p>
          </div>
          <button class="btn btn-outline-danger" onclick="app.jobController.deleteJob('${this.id}')"> delete </button>
        </div>
      </div>
        `

    }


}