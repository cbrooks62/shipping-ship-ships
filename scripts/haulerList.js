import { getHaulers} from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Check if a hauler list item was clicked
        if (itemClicked.dataset.contains('hauler-id')) {
            // Get the id of the hauler clicked
            const haulerId = itemClicked.dataset.haulerId;
            // Start a counter variable at 0
            let counter = 0;
            // Iterate all of the shipping ships
            const shippingShips = document.querySelectorAll('.shipping-ship');
            shippingShips.forEach((ship) => {
                // Does the haulerId foreign key match the id?
                if (ship.dataset.haulerId === haulerId)
                    // Increase the counter by 1
                    {counter++;}
                    }
                }
            }
        );
    


export const haulerList = () => {
    const haulers = getHaulers()

    let haulerHTML = "<ul>"

    for (const hauler of haulers) {
        // Convert each dock object to an <li> and append to the docksHTML string
        haulerHTML += `<li data-id="${hauler.id}"
                           data-name="${hauler.name}"
                           data-dockId="${hauler.dockId}">
                           ${hauler.name}
                           </li>`
    }

    haulerHTML += "</ul>"

    return haulerHTML
}