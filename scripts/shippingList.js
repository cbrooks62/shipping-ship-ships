import { getShippingShips } from "./database.js"


export const shippingShipsList = () => {
    const shippingShips = getShippingShips()

    let shippingShipsHTML = "<ul>"

    for (const shippingShip of shippingShips) {
        // Convert each dock object to an <li> and append to the docksHTML string
    }

    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
}