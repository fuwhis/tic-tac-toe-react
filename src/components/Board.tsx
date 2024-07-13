import Cell from './Cell'

const Board = (props: any) => {
  // const cells = [
  //   null, null, null,
  //   'X', 'X', 'X',
  //   null, null, null
  // ]
  // console.log(calculateWinner(cells))

  return (
    <div className='game-board'>
      {props.cells.map((item: any, index: number) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          cellStyle={item === 'X' ? 'is-x' : item === 'O' ? 'is-o' : ''}
        />
      ))}
    </div>
  )
}

export default Board
