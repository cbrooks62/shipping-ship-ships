import { getDocks } from "./database.js"


export const dockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li data-id="${dock.id}"
                           data-location="${dock.location}"
                           data-volume="${dock.volume}">
                           ${dock.location}
                           can hold ${dock.volume} million tons of Cargo
                        </li>`
    }
    docksHTML += "</ul>"


    return docksHTML;
}