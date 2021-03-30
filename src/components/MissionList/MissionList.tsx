import React from 'react'
import styled, { withTheme } from 'styled-components'
import { Mission } from '../Mission'
import { Mission as IMission } from '../../@types/graphql'

interface MissionListProps {
  missions?: IMission[]
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
          missions.map((mission: IMission) => (
            <Mission key={mission.id} mission={mission} />
          ))}
      </div>
    </Style>
  )
}

export default MissionList
