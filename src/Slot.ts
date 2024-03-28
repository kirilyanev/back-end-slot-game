import config from "./config";

type collection = {
  [key: number]: number[];
};

interface spinData {
  reels: collection;
  linesPayout: collection;
  bet: number;
  multiplier: number;
  win: number;
}

export default class Slot {
  reels: number[][];
  lines: number[][];
  symbols: Record<number, number[]>;

  constructor() {
    this.reels = config.reels;
    this.lines = config.lines;
    this.symbols = config.symbols;
  }

  spin(betAmount: number) {
    const spinData: spinData = {
      reels: {},
      linesPayout: {},
      bet: betAmount,
      multiplier: 0,
      win: 0,
    };

    for (let reelIndex = 0; reelIndex < config.reelsCount; reelIndex++) {
      spinData.reels[reelIndex] = [];

      const currentReel = this.reels[reelIndex];
      const randomStartIndex = Math.floor(Math.random() * currentReel.length);

      for (let row = 0; row < config.rowsCount; row++) {
        let symbolIndex = (randomStartIndex + row) % currentReel.length;
        if (symbolIndex < 0) symbolIndex += currentReel.length;
        const symbol = currentReel[symbolIndex];

        spinData.reels[reelIndex].push(symbol);
      }
    }

    const payoutLines = this.getPayoutLines(spinData);
    const multiplier = this.calculateMultiplier(payoutLines);

    const win = multiplier * betAmount;

    spinData.linesPayout = payoutLines;
    spinData.multiplier = multiplier;
    spinData.win = win;

    return spinData;
  }

  private getPayoutLines(spinResult: spinData) {
    const payoutLines = [];

    for (const line of this.lines) {
      const payoutLine: number[] = [];

      for (let i = 0; i < this.lines.length; i++) {
        const symbol = spinResult.reels[i][line[i]];
        payoutLine.push(symbol);
      }

      const firstElement = payoutLine[0];

      const consecutiveSymbols = payoutLine.findIndex(
        (element) => element !== firstElement
      );

      if (consecutiveSymbols && consecutiveSymbols > 2) {
        payoutLines.push(payoutLine);
      }
    }

    return payoutLines;
  }

  private calculateMultiplier(payoutLines: number[][]) {
    let multiplier = 0;

    for (const line of payoutLines) {
      const firstElement = line[0];
      const multiplierIndex = line.findIndex(
        (element) => element !== firstElement
      );

      const currentMultiplier = this.symbols[firstElement][multiplierIndex - 1];

      if (currentMultiplier && currentMultiplier > 0) {
        multiplier += currentMultiplier;
      }
    }
    return multiplier;
  }
}
