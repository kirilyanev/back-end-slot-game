import Slot from "../src/Slot";
import config from "../src/config";

function simulateSpins(bet: number | null = null) {
  const slot = new Slot();
  const spins = config.spinsCount;
  const betAmount = bet || config.defaultBet;
  const startTime = Date.now();
  let totalWins = 0;

  for (let i = 0; i < spins; i++) {
    const spin = slot.spin(betAmount);

    totalWins += spin.win;
  }

  const executionTime = (Date.now() - startTime) / 1000;

  console.log(`Total spins: ${spins}`);
  console.log(`Total bets: ${spins * betAmount}`);
  console.log(`Total wins: ${totalWins}`);
  console.log(`Net gain/loss: ${totalWins - spins * betAmount}`);
  console.log(`Execution time: ${executionTime.toFixed(2)} seconds`);
}

const betAmount = process.argv[2] ? parseInt(process.argv[2]) : null;
simulateSpins(betAmount);
