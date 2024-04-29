import { getDocks, getHaulers } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target;
        if (itemClicked.dataset.type === "dock"){
            const dockId = itemClicked.dataset.dockId;
        const haulers = getHaulers();
        let docksHaulingShips =[];
        for ( const hauler of haulers) {
            if (haulers.dockId === parseInt(dockId)) {
            docksHaulingShips.push(hauler.name)
            }
        }    
        if (docksHaulingShips.length === 0){
            window.alert(`${itemClicked.dataset.location} is currently unloading nothing`);
        } else {
            window.alert(`${itemClicked.dataset.location} is currently unloading ${docksHaulingShips.join(",")}`)
        }

        }

    }
)

export const dockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li data-id="${dock.id}"
                           data-type="dock"
                           data-location="${dock.location}"
                           data-volume="${dock.volume}">
                           ${dock.location}
                           can hold ${dock.volume} million tons of Cargo
                        </li>`
    }
    docksHTML += "</ul>"


    return docksHTML;
}