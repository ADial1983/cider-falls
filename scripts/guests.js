import { getGuests } from "./database.js";
import { getAreas } from "./database.js";
const guests = getGuests()
const areas = getAreas()

export const guestList = () => {
    let html = '<ul id="all-guests">'

    for (const guest of guests) {
        html += `<li id="guest--${guest.id}">${guest.name}</li>`
    }
    html += '</ul>'

    return html
}

const areaGuests = (area) => {
    let guestsInArea = 0

    for (const guest of guests) {
        if (guest.areaId === area.id) {
            guestsInArea++
        }
    }

    return guestsInArea
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("area")) {
            const [,areaId] = itemClicked.id.split("--")

            for (const area of areas) {
                if (area.id === parseInt(areaId)) {

                    const guestCount = areaGuests(area)

                    window.alert(`There are ${guestCount} guests in this area.`)
                }
            }
        }
    }
)