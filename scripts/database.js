const database = {
    guests: [
        {
            id: 1,
            name: "Lyra Belacqua",
            areaId: 5
        },
        {
            id: 2,
            name: "Catarina Claes",
            areaId: 4
        },
        {
            id: 3,
            name: "Cisco Ramon",
            areaId: 1
        },
        {
            id: 4,
            name: "Lisa Tepes",
            areaId: 2
        },
        {
            id: 5,
            name: "Wuxian Wei",
            areaId: 6
        },
        {
            id: 6,
            name: "Wangji Lan",
            areaId: 6
        },
        {
            id: 7,
            name: "Samus Aran",
            areaId: 1
        },
        {
            id: 8,
            name: "Fox McCloud",
            areaId: 1
        },
        {
            id: 9,
            name: "Raistlin Majere",
            areaId: 3
        },
        {
            id: 10,
            name: "Caramon Majere",
            areaId: 3
        },
        {
            id: 11,
            name: "Drizzt Do'Urden",
            areaId: 3
        }
    ],
    areas: [
        {
            id: 1,
            name: "Chamfort River"
        },
        {
            id: 2,
            name: "Lost Wolf Hiking Trail"
        },
        {
            id: 3,
            name: "The Lodge"
        },
        {
            id: 4,
            name: "Gander River"
        },
        {
            id: 5,
            name: "The Campgrounds"
        },
        {
            id: 6,
            name: "Pine Bluffs Trails"
        }
    ],
    services: [
        {
            id: 1,
            name: "rafting"
        },
        {
            id: 2,
            name: "canoeing"
        },
        {
            id: 3,
            name: "fishing"
        },
        {
            id: 4,
            name: "hiking"
        },
        {
            id: 5,
            name: "picnicking"
        },
        {
            id: 6,
            name: "rock climbing"
        },
        {
            id: 7,
            name: "lodging"
        },
        {
            id: 8,
            name: "parking"
        },
        {
            id: 9,
            name: "information"
        },
        {
            id: 1,
            name: "zip-lining"
        }
    ],
    serviceAreas: [
        {
            id: 1,
            areaId: 1,
            serviceId: 1
        },
        {
            id: 2,
            areaId: 1,
            serviceId: 2
        },
        {
            id: 3,
            areaId: 1,
            serviceId: 3
        },
        {
            id: 4,
            areaId: 2,
            serviceId: 4
        },
        {
            id: 5,
            areaId: 2,
            serviceId: 5
        },
        {
            id: 6,
            areaId: 2,
            serviceId: 6
        },
        {
            id: 7,
            areaId: 3,
            serviceId: 7
        },
        {
            id: 8,
            areaId: 3,
            serviceId: 8
        },
        {
            id: 9,
            areaId: 3,
            serviceId: 9
        },
        {
            id: 10,
            areaId: 3,
            serviceId: 5
        },
        {
            id: 11,
            areaId: 4,
            serviceId: 3
        },
        {
            id: 12,
            areaId: 4,
            serviceId: 4
        },
        {
            id: 13,
            areaId: 5,
            serviceId: 7
        },
        {
            id: 14,
            areaId: 5,
            serviceId: 8
        },
        {
            id: 15,
            areaId: 5,
            serviceId: 9
        },
        {
            id: 16,
            areaId: 6,
            serviceId: 4
        },
        {
            id: 17,
            areaId: 6,
            serviceId: 5
        },
        {
            id: 18,
            areaId: 6,
            serviceId: 10
        }
    ]
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getAreas = () => {
    return database.areas.map(area => ({...area}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getServiceAreas = () => {
    return database.serviceAreas.map(serviceArea => ({...serviceArea}))
}