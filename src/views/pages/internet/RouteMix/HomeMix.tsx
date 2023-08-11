import { Banner } from '../Banner'
import { Home } from '../Home'
import { Mix } from '../Mix'
import { FormLink } from './FormLink'

export const HomeMix = () => {
  return (
    <div>
      <div className="w-full bg-[#5fcf80]">
        <Banner></Banner>
      </div>
      <div className="w-full">
        <FormLink></FormLink>
      </div>
      <div className="w-full">
        <Mix></Mix>
      </div>
      <div className="w-full">
        <Home></Home>
      </div>
    </div>
  )
}
