import { Suspense } from 'react'
import Loading from '../spinner'

const Fallback = ({ children }: any) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>
}

export default Fallback
