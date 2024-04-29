import { dockList} from "./dockList.js";
import { haulerList } from "./haulerList.js";
import { shippingShipsList } from "./shippingList.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1 class="title">Shipping Ship Ships</h1>

<article class="details">
    <section class="detail--column list details__docks">
        <h2>Docks</h2>
        ${dockList()}
    </section>
    <section class="detail--column list details__haulers">
        <h2>Hauler Ships</h2>
        ${haulerList()}
    </section>
    <section class="detail--column list details__shippingShips">
        <h2>Shipping Ships</h2>
        ${shippingShipsList()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML

