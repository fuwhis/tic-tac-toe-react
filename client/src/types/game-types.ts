// Define the type for the board cells
export type CellValue = 'X' | 'O' | null

// Define type of Game Action
export type GameAction =
  | { type: 'CLICK'; index: number }
  | { type: 'RESET' }

// Define type of Game State
export type GameState = {
  board: CellValue[],
  xIsNext: boolean
}

// Define interface for board component
export interface BoardProps {
  cells: CellValue[],
  onClick: (indexL: number) => void
}

// Define interface for cell component
export interface CellProps {
  value: CellValue
  onClick: React.MouseEventHandler<HTMLDivElement>
  cellStyle: string
}
