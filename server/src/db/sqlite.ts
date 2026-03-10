import Database from "better-sqlite3"
import fs from "fs"
import path from "path"

type SaveGameInput = {
  playedAt: string
  player1: string
  player2: string
  winner: string
}

export type ScoreRow = {
  playerName: string
  wins: number
}

export type GameHistoryRow = {
  playedAt: string
  match: string
  winner: string
}

const dataDir = path.resolve(process.cwd(), "data")
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

const dbPath = path.join(dataDir, "multiplayer.sqlite")
const db = new Database(dbPath)

db.exec(`
  CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    played_at TEXT NOT NULL,
    player_1 TEXT NOT NULL,
    player_2 TEXT NOT NULL,
    winner TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS player_scores (
    player_name TEXT PRIMARY KEY,
    wins INTEGER NOT NULL DEFAULT 0
  );
`)

const insertGameStmt = db.prepare(`
  INSERT INTO games (played_at, player_1, player_2, winner)
  VALUES (@playedAt, @player1, @player2, @winner)
`)

const upsertScoreStmt = db.prepare(`
  INSERT INTO player_scores (player_name, wins)
  VALUES (?, 1)
  ON CONFLICT(player_name) DO UPDATE SET wins = wins + 1
`)

const getScoreStmt = db.prepare(`
  SELECT player_name AS playerName, wins
  FROM player_scores
  WHERE player_name = ?
`)

const getHistoryStmt = db.prepare(`
  SELECT
    played_at AS playedAt,
    (player_1 || ' vs ' || player_2) AS match,
    winner
  FROM games
  ORDER BY id DESC
  LIMIT ?
`)

export const saveGameResult = ({ playedAt, player1, player2, winner }: SaveGameInput): void => {
  insertGameStmt.run({ playedAt, player1, player2, winner })
  if (winner !== "Draw") {
    upsertScoreStmt.run(winner)
  }
}

export const getScoresByPlayers = (players: string[]): ScoreRow[] => {
  return players.map((playerName) => {
    const row = getScoreStmt.get(playerName) as ScoreRow | undefined
    return {
      playerName,
      wins: row?.wins ?? 0
    }
  })
}

export const getRecentGames = (limit = 20): GameHistoryRow[] => {
  return getHistoryStmt.all(limit) as GameHistoryRow[]
}
