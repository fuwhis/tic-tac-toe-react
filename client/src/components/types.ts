// Define the type for the board cells
export type CellValue = 'X' | 'O' | null

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
