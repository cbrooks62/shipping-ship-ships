import { getHaulers, getShippingShips } from "./database.js";

document.addEventListener(
    "click", 
    (clickEvent) => {
    const itemClicked = clickEvent.target;
  
    // Was a hauler list item clicked?
    if (itemClicked.dataset.type === "hauler") {
      // Get the id of the hauler clicked
      const haulerId = itemClicked.dataset.haulerId;
      // Start a counter variable at 0
      let counter = 0;
      // Iterate all of the shipping ships
      const shippingShips = getShippingShips();
      shippingShips.forEach((ship) => {
        // Does the haulerId foreign key match the id?
        if (ship.haulerId == haulerId) {
          // Increase the counter by 1
          counter++;
        }
      });
      window.alert(`This hauler is carrying ${counter} ships`)
    }
  });

export const haulerList = () => {
  const haulers = getHaulers();

  let haulerHTML = "<ul>";

  for (const hauler of haulers) {
    // Convert each dock object to an <li> and append to the docksHTML string
    haulerHTML += `<li data-hauler-id="${hauler.id}"
                        data-type="hauler"
                        data-name="${hauler.name}"
                        data-dockId="${hauler.dockId}">
                        ${hauler.name}
                    </li>`;
  }

  haulerHTML += "</ul>";

  return haulerHTML;
};
