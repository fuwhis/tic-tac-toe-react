const Cell = ({ value, onClick, cellStyle }: any) => {
  return (
    <div className={`game-cell ${cellStyle}`} onClick={onClick}>
      {value}
    </div>
  )
}

export default Cell
