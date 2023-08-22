import { AppState } from "../AppState.js";
import { itemsService } from "../services/ItemsService.js";
import { setHTML } from "../utils/Writer.js";
import { Item } from "../models/items.js";



export class ItemsController {
    constructor() {
        console.log('Time to Shop!')
        this.drawItemsList()
        this.drawMoney()
    }

    drawItemsList() {
        const items = AppState.items
        let listContent = ''
        items.forEach(i => listContent += i.ListTemplate)
        setHTML('items-list', listContent)
    }

    selectItem(itemName) {
        console.log('selecting', itemName)
        itemsService.selectItem(itemName)
    }

    drawMoney() {
        let money = AppState.money
        setHTML('money', money)
    }


    moneyButton() {
        let money = AppState.money
        money += .25
    }
}