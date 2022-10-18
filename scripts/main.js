import { guestList } from "./guests.js"
import { areaList } from "./areas.js"
import { serviceList } from "./services.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <div id="service-container">
    ${serviceList()}
    </div>
    <div id="area-container">
        <h2 id="areas-header">Park Areas</h2>
        <div id="area-cards">
        ${areaList()}
        </div>
    </div>
    <aside id="guest-container">
        <h2 id="guests-header">Current Visitors</h2>
        ${guestList()}
    </aside>
`

mainContainer.innerHTML = applicationHTML