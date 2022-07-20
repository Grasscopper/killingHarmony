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
    }
  },

  phases: {
    startingPhase: {
      start: true, //begin in this phase
      // next: 'dailyLife'
    }
  }
}