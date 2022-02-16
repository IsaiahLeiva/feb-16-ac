import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  cars = [
    new Car('Tesla', 'Roadster', 2020, 10000, 'Really fast car', 'https://www.tesla.com/sites/default/files/images/roadster/roadster-social.jpg')
  ]

  houses = [
    new House('4-bedroom', 739000, 'Large 4 bedroom 3 bath', 'https://photos.zillowstatic.com/fp/655d1e330935bb78a085aac56beb1dcc-uncropped_scaled_within_1536_1152.webp')
  ]

  jobs = [
    new Job('Driver', 56000, 'Loads and secures cabinents on to truck', 'https://boise.craigslist.org/trp/d/boise-driver-non-dot-boise-cabinets/7446900560.html')
  ]
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
