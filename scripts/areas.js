import { getAreas } from "./database.js";
import { getServiceAreas } from "./database.js";
import { getServices } from "./database.js";
const areas = getAreas()
const serviceAreas = getServiceAreas()
const services = getServices()

export const areaList = () => {
    let html = `<section id="all-areas">`

    for (const area of areas) {
        html += `<div class="area-card" id="area--${area.id}"><h3>${area.name}</h3>`
        for (const serviceArea of serviceAreas) {
            if (serviceArea.areaId === area.id) {
                for (const service of services) {
                    if (service.id === serviceArea.serviceId) {
                        html += `<li>${service.name}</li>`
                    }
                }
            }
        }
        html += '</div>'
    }
    html += '</section>'

    return html
}