import { Line } from 'rc-progress'

const Loading = () => {
  return (
    <>
      <Line percent={10} strokeWidth={4} strokeColor='#D3D3D3' />
    </>
  )
}

export default Loading
