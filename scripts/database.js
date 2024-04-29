const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Fraser", dockId: 4 },
        { id: 2, name: "Duncan", dockId: 3 },
        { id: 3, name: "Murray", dockId: 2 },
        { id: 4, name: "MacKimmie", dockId: 1 }
    ],
    shippingShips: [
        { id: 1, name:"Levinson", haulerId:1 },
        { id: 2, name:"Beasley", haulerId:2 },
        { id: 3, name:"Filipelli", haulerId:3 },
        { id: 4, name:"Kapoor", haulerId:4 },
        { id: 5, name:"Martin", haulerId:2 },
        { id: 6, name:"Flack", haulerId:1 },
        { id: 7, name:"Vance", haulerId:4 },
        { id: 8, name:"Palmer", haulerId:3 },
        { id: 9, name:"Bertram", haulerId:3 },
        { id: 10, name:"Hannon", haulerId:2 },
       
    ]
}

export const getDocks = () => {
    return database.docks.map(docks => ({...docks}))
}

export const getHaulers = () => {
    return database.haulers.map(haulers => ({...haulers}))
}

export const getShippingShips = () => {
    return database.shippingShips.map(shippingShips => ({...shippingShips}))
}