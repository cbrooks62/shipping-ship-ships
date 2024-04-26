import { getHaulers} from "./database.js"


export const haulerList = () => {
    const hauler = getHaulers()

    let haulerHTML = "<ul>"

    for (const hauler of haulers) {
        // Convert each dock object to an <li> and append to the docksHTML string
    }

    haulerHTML += "</ul>"

    return haulerHTML
}