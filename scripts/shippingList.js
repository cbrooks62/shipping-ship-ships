import { getHaulers, getShippingShips } from "./database.js";

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  // Was a shipping ship list item clicked?
  if (itemClicked.dataset.type === "shippingShip") {
    // Get the haulerId value of the shipping ship clicked
    const shipHaulerId = itemClicked.dataset.haulerId;
    // Define a default object for the found hauler
    let haulingShip = { name: "Incorrect" };
    // Iterate the array of hauler objects
    const haulers = getHaulers();
    for (const hauler of haulers) {
      // Does the haulerId foreign key match the id of the current hauler?
      if (parseInt(shipHaulerId) === hauler.id) {
        // Reassign the value of `haulingShip` to the current hauler
        haulingShip = `${hauler.name}`;
      }
    }
    // Show an alert to the user with this format...
    window.alert(
      `${itemClicked.dataset.name} is being hauled by ${haulingShip}`
    );
  }
});

export const shippingShipsList = () => {
  const shippingShips = getShippingShips();

  let shippingShipsHTML = "<ul>";

  for (const shippingShip of shippingShips) {
    // Convert each dock object to an <li> and append to the docksHTML string
    shippingShipsHTML += `<li data-id="${shippingShip.id}"
                                  data-type="shippingShip"  
                                  data-name="${shippingShip.name}"
                                  data-hauler-id="${shippingShip.haulerId}">
                                  ${shippingShip.name}
                                  </li>`;
  }

  shippingShipsHTML += "</ul>";

  return shippingShipsHTML;
};
