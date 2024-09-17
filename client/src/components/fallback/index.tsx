import { Suspense } from 'react'
import Loading from '../loading'

const Fallback = ({ children }: any) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>
}

export default Fallback
