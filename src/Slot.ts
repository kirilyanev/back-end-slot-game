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
    const multiplier = this.calculateMultiplier(spinData);
    const win = multiplier * betAmount;
    const result = win - betAmount;

    spinData.bet = betAmount;
    spinData.multiplier = multiplier;
    spinData.win = win;

    return spinData;
  }

  private calculateMultiplier(spinResult: spinData) {
    let multiplier = 0;
    let lineIndex = 0;

    for (const line of this.lines) {
      const winningLine: number[] = [];
      for (let i = 0; i < line.length; i++) {
        const symbol = spinResult.reels[i][line[i]];
        winningLine[i] = symbol;
      }

      spinResult.linesPayout[lineIndex] = winningLine;
      lineIndex++;
      const frequencyMap: Record<number, number> = {};

      winningLine.forEach((number) => {
        frequencyMap[number] = (frequencyMap[number] || 0) + 1;
      });

      Object.keys(frequencyMap).forEach((symbol) => {
        const frequency = frequencyMap[parseInt(symbol)];
        const currentMultiplier = this.symbols[parseInt(symbol)][frequency - 1];

        multiplier += currentMultiplier;
      });
    }

    return multiplier;
  }
}
