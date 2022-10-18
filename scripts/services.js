import { getServices } from "./database.js";
import { getAreas } from "./database.js";
import { getServiceAreas } from "./database.js";
const services = getServices()
const areas = getAreas()
const serviceAreas = getServiceAreas()

export const serviceList = () => {
    let html = '<section id="all-services">Park Services:'

    for (const service of services) {
        html += `<div class="service-card" id="service--${service.id}">${service.name}</div>`
    }
    html += '</section>'

    return html 
}

const filterAreasByService = (service) => {
    // Define an empty array to store all of the assignment objects
    let availableAreas = []
    // Iterate the array value of walkerCities
    for (const serviceArea of serviceAreas) {
        //for (const walker of walkerArray) {
            if (service.id === serviceArea.serviceId) {
                availableAreas.push(serviceArea)
            } 
        //}
    }
    // Check if the primary key of the walker equals the foreign key on the assignment
    return availableAreas
    // If it does, add the current object to the array of assignments

    // After the loop is done, return the assignments array
}

const areasWithService = (availableAreas) => {
    // Define an empty string that will get appended with matching cities
    let areaString = ``
    // Iterate the array of assignment objects
    for (const availableArea of availableAreas) {
        for (const area of areas) {
            if (area.id === availableArea.areaId) {
                areaString = `${areaString} ${area.name}`
            }
        }
    }
    return areaString
}

document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
        /*
            The target of a click event is the most specific HTML element
            that was clicked by the user.
        */
        const itemClicked = clickEvent.target

        /*
            Only run the rest of the logic if a walker <li> was clicked
        */
        if (itemClicked.id.startsWith("service")) {

            /*
                Extract the primary key from the id attribute of the list
                item that you clicked on. Refer back to the code you
                wrote for each list item. Note the format of the id
                attribute ("walker--2" if you clicked on the second one).

                This code splits that string apart into an array, and
                captures the "2" and assigns it to be the value of the
                `walkerId` variable.

                Splitting a string in JavaScript:
                    https://www.youtube.com/watch?v=u2ZocmM93yU

                Destructuring in JavaScript:
                    https://www.youtube.com/watch?v=UgEaJBz3bjY
            */
            const [,serviceId] = itemClicked.id.split("--")

            /*
                Now that you have the primary key of a walker object,
                find the whole object by iterating the walkers array.
            */
            for (const service of services) {
                if (service.id === parseInt(serviceId)) {
                    const allAvailableAreas = filterAreasByService(service)
                    const allAreas = areasWithService(allAvailableAreas)
                
                    window.alert(`This service is available in the following areas: ${allAreas}`)
                    
                }
            }
        }
    }
)