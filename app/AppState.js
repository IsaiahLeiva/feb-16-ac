import { Car } from "./Models/Car.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { House } from "./Models/House.js"

const testCar = new Car(
  {
    make: 'GMC',
    model: 'Sierra',
    year: 2018,
    price: 5600,
    description: 'its cool.',
    color: '#FFFFFF',
    imgUrl: 'https://thiscatdoesnotexist.com'
  },
  {
    make: 'Tesla',
    model: 'Roadster',
    year: 2020,
    miles: 10000,
    description: 'Really fast car',
    imgUrl: 'https://www.tesla.com/sites/default/files/images/roadster/roadster-social.jpg'
  }
)

const testHouse = new House(
  {
    bedrooms: 4,
    price: 739000,
    description: 'Large 4 bedroom 3 bath',
    imgUrl: 'https://photos.zillowstatic.com/fp/655d1e330935bb78a085aac56beb1dcc-uncropped_scaled_within_1536_1152.webp'
  }
)

class AppState extends EventEmitter {

  // NOTE just adds intellisense to our cars array that lets our code know its an array of cars, not other things 
  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car('Tesla', 'Roadster', 2020, 10000, 'Really fast car', 'https://www.tesla.com/sites/default/files/images/roadster/roadster-social.jpg')
  ]

  houses = [
    new House('4', 739000, 'Large 4 bedroom 3 bath', 'https://photos.zillowstatic.com/fp/655d1e330935bb78a085aac56beb1dcc-uncropped_scaled_within_1536_1152.webp')
  ]

  // jobs = [
  //   new Job('Driver', 56000, 'Loads and secures cabinents on to truck', 'https://boise.craigslist.org/trp/d/boise-driver-non-dot-boise-cabinets/7446900560.html')
  // ]
}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
