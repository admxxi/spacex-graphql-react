import React from 'react'
import styled from 'styled-components'
import { Launch } from '../Launch'
import { Launch as ILaunch, Mission as IMission } from '../../@types/graphql'

interface LaunchListProps {
  launches?: ILaunch[]
}

const Style = styled.div`
  .container {
    display: inline-grid;
    padding: 1em;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 1em;
  }
`
const LaunchList = ({ launches }: LaunchListProps): JSX.Element => {
  return (
    <Style>
      <div className="container">
        {launches &&
          launches.map((launch: ILaunch) => (
            <Launch key={launch.id} launch={launch} />
          ))}
      </div>
    </Style>
  )
}
export default LaunchList
