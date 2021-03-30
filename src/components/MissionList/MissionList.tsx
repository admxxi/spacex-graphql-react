import React from 'react'
import styled, { withTheme } from 'styled-components'
import { Mission } from '../Mission'
import { Mission as IMission, Launch as ILaunch } from '../../@types/graphql'

interface MissionListProps {
  missions?: ILaunch[]
}

const Style = styled.div`
  margin: auto;
  padding: 1em;

  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 1em;
  }

  .container > * {
    display: grid;
  }
`
const MissionList = ({ missions }: MissionListProps): JSX.Element => {
  return (
    <Style>
      <h1 className="title is-2 my-3">Last Launches 🚀</h1>
      <div className={'container'}>
        {missions &&
          missions.map((mission: ILaunch) => (
            <Mission key={mission.id} mission={mission} />
          ))}
      </div>
    </Style>
  )
}

export default MissionList
