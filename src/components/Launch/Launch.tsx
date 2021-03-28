import React from 'react'
import styled, { withTheme } from 'styled-components'
import { Launch as ILaunch } from '../../@types/graphql'
import { mySlugify } from '../../helpers/index'
import Link from 'next/link'
interface LaunchProps {
  launch: ILaunch
}

const Launch = styled(({ launch }: LaunchProps) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">
              {launch.id}
              {launch.details}
            </p>
            <Link
              href={{
                pathname: '/mission/[slug]',
                query: {
                  slug: `${mySlugify(String(launch.id), true)}`
                }
              }}
            >
              <a>{launch.details}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
})``

export default withTheme(Launch)
