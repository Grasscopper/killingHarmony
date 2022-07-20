import React from 'react'
import { Client } from 'boardgame.io/react'
import { Game } from './Game'
import Dashboard from './Dashboard'

const BoardGame = Client({ game: Game, board: Dashboard, numPlayers: 1, debug: false })

export default BoardGame