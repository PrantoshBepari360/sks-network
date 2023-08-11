import { Akdesh } from '../Akdesh'
import { Banner } from '../Banner'
import { Mix } from '../Mix'
import { FormLink } from './FormLink'

export const RagulerMix = () => {
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
        <Akdesh></Akdesh>
      </div>
    </div>
  )
}
