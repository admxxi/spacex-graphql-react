import React from 'react'
import { spacexService } from '../apollo-client'
import {
  MissionResult as IMissionResult,
  Mission as IMission
} from '../@types/graphql'
import { GetStaticProps } from 'next'
import { MissionList } from '../components/MissionList/index'

export interface MissionPageProps {
  missions: IMission[]
  loading: boolean
  error: string
}

export const getStaticProps: GetStaticProps = async context => {
  const {
    loading,
    error = null,
    data: { launchesPast }
  } = await spacexService().GET_LAUNCHES({
    limit: 10
  })

  return {
    props: {
      loading,
      error,
      missions: launchesPast
    },
    revalidate: 24 * 60 * 60
  }
}
const MissionPage: React.FC<MissionPageProps> = (props: MissionPageProps) => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <MissionList missions={props.missions}></MissionList>
      </div>
    </section>
  )
}

export default MissionPage
