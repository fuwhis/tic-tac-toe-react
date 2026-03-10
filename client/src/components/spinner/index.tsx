import { Backdrop } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

type SpinnerProps = {
  isLoading: boolean
}

const Spinner = (props: SpinnerProps) => {
  const { isLoading } = props
  return (
    <Backdrop sx={{ color: '#28BBFF', zIndex: 9999 }} open={isLoading}>
      <CircularProgress disableShrink thickness={5} color='inherit' />
    </Backdrop>
  )
}

export default Spinner
