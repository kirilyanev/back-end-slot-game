# Back-end-slot-game

Example of back-end logic for a simple slot game with a given configuration

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/kirilyanev/back-end-slot-game.git

   ```

2. Navigate to the project directory:

3. Install the necessary dependencies:

   ```bash
   npm install

   ```

## Usage

1. To execute random spin run the following command:
   ```bash
   npm run start
   ```

1.2. To execute a spin with specified bet run the following command:

```bash
npm run start <betSize>
```

Note: Enter desired bet amount (number) instead betSize.

2. To execute the simulation script run the following command:

   ```bash
   npm run spin-simulator
   ```

Note: By default the script runs with default bet = 1;

2.2. To execute the simulation script with bet size of your choice run the following command:

```bash
npm run spin-simulator <betSize>
```

Note: Enter desired bet amount (number) instead betSize.

### Commands 💻

| Command                    | Description                              |
| -------------------------- | ---------------------------------------- |
| `npm run start`            | Execute single spin                      |
| `npm run start 5`          | Execute single spin with bet 5           |
| `npm run spin-simulator`   | Execute spin simulator script            |
| `npm run spin-simulator 5` | Execute spin simulator script with bet 5 |
