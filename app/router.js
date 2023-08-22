import { AboutController } from "./controllers/AboutController.js";
import { ItemsController } from "./controllers/ItemsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { Item } from "./models/items.js";


export const router = [
  {
    path: '',
    controller: [HomeController, ItemsController],
    view: /*html*/`
  <section class="row justify-content-center" id="items-list"></section>

  <section class="row justify-content-center fs-3" id="money"></section>
  <p id="items-cost"> <div class="fs-3 bg-secondary col-12 text-center"> 
        <button class="btn fs-3" onclick="moneyButton()"> ADD 25 CENTS</button>
        
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]