import Slot from "./src/Slot";
import config from "./src/config";

const bet = process.argv[2] ? parseInt(process.argv[2]) : null;
const randomBetIndex = Math.floor(Math.random() * config.betAmounts.length);

const betAmount = bet || config.betAmounts[randomBetIndex];
const slot = new Slot();

const spinData = slot.spin(betAmount);

console.log(spinData);
