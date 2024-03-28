export default {
  reelsCount: 5,
  rowsCount: 3,

  symbols: {
    1: [0, 0, 10, 20, 50],
    2: [0, 0, 20, 40, 100],
    3: [0, 0, 30, 60, 150],
    4: [0, 0, 40, 80, 200],
    5: [0, 0, 50, 100, 250],
    6: [0, 0, 100, 200, 500],
    7: [0, 0, 150, 300, 800],
    8: [0, 0, 200, 400, 1000],
    9: [0, 0, 300, 600, 2000],
  },

  lines: [
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2],
    [0, 1, 0, 1, 0],
    [1, 2, 1, 2, 1],
  ],

  reels: [
    [
      1, 1, 2, 2, 9, 9, 3, 3, 1, 1, 8, 8, 8, 3, 3, 6, 6, 1, 1, 7, 7, 2, 2, 6, 6,
      1, 1, 8, 8, 2, 2, 5, 5, 4, 4, 4, 1, 1, 4, 4, 2, 2, 3, 3, 4, 4, 9, 9, 3, 3,
      2, 2, 1, 1, 9, 9, 1, 1, 4, 4, 8, 8, 2, 2, 5, 5, 5, 3, 3, 1, 1, 7, 7, 3, 3,
      6, 6, 7, 7, 2, 2, 6, 6, 6, 1, 1, 8, 8, 2, 2, 7, 7, 5, 5, 5, 1, 1, 6, 6, 4,
      4, 3, 3, 4, 4, 5, 5, 3, 3, 2, 2, 1, 1, 1, 1, 2, 2, 9, 9, 3, 3, 1, 1, 8, 8,
      8, 3, 3, 6, 6, 1, 1, 7, 7, 2, 2, 6, 6, 1, 1, 8, 8, 2, 2, 5, 5, 4, 4, 4, 1,
      1, 4, 4, 2, 2,
    ],
    [
      1, 1, 5, 5, 3, 3, 1, 1, 7, 7, 7, 4, 4, 9, 9, 5, 5, 1, 1, 4, 4, 9, 9, 3, 3,
      6, 6, 7, 7, 2, 2, 6, 6, 6, 2, 2, 2, 3, 3, 4, 4, 8, 8, 8, 3, 3, 2, 2, 1, 1,
      4, 4, 1, 1, 8, 8, 2, 2, 5, 5, 1, 1, 5, 5, 9, 9, 3, 3, 1, 1, 7, 7, 4, 4, 5,
      5, 1, 1, 4, 4, 4, 4, 3, 3, 6, 6, 7, 7, 2, 2, 6, 6, 2, 2, 2, 3, 3, 4, 4, 3,
      3, 2, 2, 1, 1, 1, 1, 8, 8, 2, 2, 5, 5, 6, 6, 2, 2, 2, 3, 3, 4, 4, 3, 3, 2,
      2, 1, 1, 1, 1, 8, 8, 2, 2, 5, 5,
    ],
    [
      1, 1, 9, 9, 2, 2, 2, 5, 5, 8, 8, 3, 3, 1, 1, 7, 7, 3, 3, 6, 6, 7, 7, 2, 2,
      6, 6, 6, 1, 1, 8, 8, 2, 2, 5, 5, 4, 4, 4, 5, 5, 1, 1, 4, 4, 3, 3, 4, 4, 3,
      3, 2, 2, 9, 9, 1, 1, 1, 1, 2, 2, 2, 5, 5, 3, 3, 1, 1, 7, 7, 3, 3, 6, 6, 7,
      7, 2, 2, 6, 6, 6, 1, 1, 8, 8, 2, 2, 5, 5, 7, 7, 4, 4, 5, 5, 1, 1, 4, 4, 3,
      3, 4, 4, 3, 3, 9, 9, 2, 2, 1, 1, 6, 6, 6, 1, 1, 8, 8, 2, 2, 5, 5, 7, 7, 4,
      4, 5, 5, 1, 1, 4, 4, 3, 3, 4, 4, 3, 3, 9, 9, 2, 2, 1, 1,
    ],
    [
      1, 1, 8, 8, 8, 2, 2, 4, 4, 3, 3, 9, 9, 9, 2, 2, 2, 5, 5, 7, 7, 2, 2, 5, 5,
      3, 3, 1, 1, 7, 7, 3, 3, 6, 6, 6, 1, 1, 4, 4, 4, 5, 5, 5, 1, 1, 4, 4, 8, 8,
      3, 3, 6, 6, 2, 2, 1, 1, 9, 9, 1, 1, 8, 8, 2, 2, 4, 4, 3, 3, 2, 2, 2, 5, 5,
      5, 7, 7, 2, 2, 9, 9, 3, 3, 1, 1, 7, 7, 3, 3, 6, 6, 1, 1, 7, 7, 5, 5, 1, 1,
      4, 4, 3, 3, 8, 8, 6, 6, 2, 2, 1, 1, 9, 9, 3, 3, 1, 1, 7, 7, 3, 3, 6, 6, 1,
      1, 7, 7, 5, 5, 1, 1, 4, 4, 3, 3, 8, 8, 6, 6, 2, 2, 1, 1,
    ],
    [
      1, 1, 5, 5, 7, 7, 3, 3, 9, 9, 9, 1, 1, 3, 3, 2, 2, 2, 7, 7, 2, 2, 6, 6, 6,
      1, 1, 8, 8, 2, 2, 4, 4, 3, 3, 4, 4, 4, 5, 5, 1, 1, 6, 6, 4, 4, 8, 8, 3, 3,
      6, 6, 2, 2, 1, 1, 8, 8, 1, 1, 5, 5, 3, 3, 9, 9, 1, 1, 7, 7, 3, 3, 2, 2, 2,
      5, 5, 1, 1, 7, 7, 7, 2, 2, 6, 6, 6, 1, 1, 8, 8, 8, 2, 2, 4, 4, 3, 3, 5, 5,
      1, 1, 4, 4, 3, 3, 9, 9, 9, 6, 6, 2, 2, 1, 1, 2, 2, 6, 6, 6, 1, 1, 8, 8, 8,
      2, 2, 4, 4, 3, 3, 5, 5, 1, 1, 4, 4, 3, 3, 9, 9, 9, 6, 6, 2, 2, 1, 1,
    ],
  ],

  betAmounts: [1, 2, 5, 10, 20, 50, 100],
  defaultBet: 1,
  spinsCount: 100000,
};
