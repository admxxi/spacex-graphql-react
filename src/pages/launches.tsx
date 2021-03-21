import React from 'react'
import Link from 'next/link'
import { mySlugify } from '../helpers'

const Launches: React.FunctionComponent = () => {
  return (
    <Link
      href={{
        pathname: '/mission/[slug]',
        query: { slug: `${mySlugify('bla-asda-???~~~~bla', true)}` }
      }}
    >
      <a>blabla</a>
    </Link>
  )
}

export default Launches
