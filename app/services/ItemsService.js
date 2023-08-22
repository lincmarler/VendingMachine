import { AppState } from "../AppState.js";
import { saveState } from "../utils/Store.js";



class ItemsService {
    selectItem(itemName) {
        const selectedItem = AppState.items.find(item => item.name == itemName)
    }
    moneyButton() {
        let money = AppState.money
        money += .25
    }
}


export const itemsService = new ItemsService()