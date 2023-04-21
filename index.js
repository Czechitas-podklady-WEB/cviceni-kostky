import { Dice } from "./Dice/index.js"

const diceRowElm = document.querySelector("#dice-row");
diceRowElm.append(Dice({ side: 5 }));
diceRowElm.append(Dice({ side: 1 }));
diceRowElm.append(Dice({ side: 6 }));
diceRowElm.append(Dice({ side: 4 }));