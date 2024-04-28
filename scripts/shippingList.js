import { getShippingShips } from "./database.js"


export const shippingShipsList = () => {
    const shippingShips = getShippingShips()

    let shippingShipsHTML = "<ul>"

    for (const shippingShip of shippingShips) {
        // Convert each dock object to an <li> and append to the docksHTML string
        shippingShipsHTML += `<li data-id="${shippingShip.id}"
                                  data-name="${shippingShip.name}"
                                  data-haulerId="${shippingShip.haulerId}">
                                  ${shippingShip.name}
                                  </li>`
    }

    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
}

//id, name, haulerId