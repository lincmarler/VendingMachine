export class Item {
    constructor({ name, icon, picture, price }) {
        this.name = name
        this.icon = icon
        this.picture = picture
        this.price = price
    }

    get ListTemplate() {
        return /*html*/`
        
        <button onclick="app.ItemsController.selectItem('${this.name}')" class="btn fs-3 col-6" title="${this.name}"><img class="imageSize" src="${this.picture} " alt="">
        <p class="text-center fs-3">${this.name} $${this.price}</p></button>`
    }

    get moneyTemplate() {
        return /*html*/`
        <div class="fs-3 bg-secondary col-12"> 
        <button class="btn fs-3" onclick="drawMoney()"> ADD 25 CENTS</button>
        <p class="fs-3">TOTAL MONEY = $<span id="totalMoney">0</span></p>
        </div>`
    }
}