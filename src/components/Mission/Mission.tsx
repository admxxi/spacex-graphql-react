import React from 'react'
import styled, { withTheme } from 'styled-components'
import { Launch as ILaunch, Mission as IMission } from '../../@types/graphql'
import { mySlugify } from '../../helpers/index'
import Link from 'next/link'
interface LaunchProps {
  mission: ILaunch
}

const Style = styled.div`
  cursor: pointer;

  .media-content > p {
    margin-top: 0;
  }
`

const Mission = ({ mission }: LaunchProps): JSX.Element => {
  const launchDateLocale = new Date(
    mission.launch_date_utc
  ).toLocaleDateString()

  const launchDetails =
    mission.details && mission.details.length > 120
      ? mission.details.substring(0, 117) + '...'
      : mission.details
  return (
    <Style>
      <Link
        href={{
          pathname: '/mission-detail/[slug]',
          query: {
            slug: `${mySlugify(String(mission.id), true)}`
          }
        }}
      >
        <article className="card">
          <div className="card-content">
            <div className="media is-align-content-center">
              <div className="media-content">
                <a className="is-link is-3">{mission.mission_name}</a>
                <p className="subtitle is-4 mt-2">
                  {launchDetails ? launchDetails : 'No description available'}
                </p>
                <span className="ma-1 subtitle is-5 is-italic has-text-right mx-1">
                  {launchDateLocale}
                </span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </Style>
  )
}

export default Mission
