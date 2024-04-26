const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Pioneering Spirit", dockId: 4 },
        { id: 2, name: "Boaty McBoatface", dockId: 3 },
        { id: 3, name: "Seawise Giant", dockId: 2 },
        { id: 4, name: "The Black Pearl", dockId: 1 }
    ],
    shippingShips: [
        { id: 1, name:"Jim Halpert", haulerId:1 },
        { id: 2, name:"Pam Beasley", haulerId:2 },
        { id: 3, name:"Dwight Schrute", haulerId:3 },
        { id: 4, name:"Michael Scott", haulerId:4 }
    ]
}



export const getDocks = () => {
    return database.docks.map(docks => ({...docks}))
}

export const getHaulingShips = () => {
    return database.haulers.map(haulers => ({...haulers}))
}

export const getShippingShips = () => {
    return database.shippingShips.map(shippingShips => ({...shippingShips}))
}