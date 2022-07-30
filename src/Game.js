export const Game = {
  setup: () => (
    {
      player: {
        name: "Makoto",
        health: 10,
        attack: 3,
        defense: 1,
        hope: 5,
        passwords: 0,
        items: 0
      },
      time: 3,
      day: 1
    }
  ),
  moves: {
    nextDay: (G, ctx) => {
      G.time = 3
      G.day++
    },
    trainAtGym: (G, ctx) => {
      if (G.time > 0) {
        G.player = {
          ...G.player,
          attack: G.player.attack + 1
        }
        // G.player.attack++;
        G.time--;
      }
    },
    swimAtPool: (G, ctx) => {
      if (G.time > 0) {
        G.player = {
          ...G.player,
          defense: G.player.defense + 1
        }
        G.time--;
      }
    },
    hangWithStranger: (G, ctx) => {
      if (G.time > 0) {
        G.player = {
          ...G.player,
          hope: G.player.hope + 1
        }
        G.time--;
      }
    },
    hangWithFriend: (G, ctx) => {
      if (G.time > 1) {
        G.player = {
          ...G.player,
          hope: G.player.hope + 2
        }
        G.time--;
        G.time--;
      }
    },
    enterDungeon: (G, ctx) => {
      if (G.time > 0) {
        G.player = {
          ...G.player,
          passwords: G.player.passwords + 1
        }
        G.time--;
      }
    },
    shopAtStore: (G, ctx) => {
      if (G.time > 0) {
        G.player = {
          ...G.player,
          items: G.player.items + 1
        }
        G.time--;
      }
    },
    eatAtHall: (G, ctx) => {
      if (G.time > 0) {
        G.player = {
          ...G.player,
          health: G.player.health + 1
        }
        G.time--;
      }
    },
    restInDorms: (G, ctx) => {
      if (G.time > 1) {
        G.player = {
          ...G.player,
          health: G.player.health + 2
        }
        G.time--;
        G.time--;
      }
    }
  },
  phases: {
    startingPhase: {
      start: true, //begin in this phase
      // next: 'dailyLife'
    }
  }
}