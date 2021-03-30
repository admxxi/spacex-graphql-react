import React from 'react'
import { spacexService } from '../apollo-client'
import { Mission as IMission, Launch as ILaunch } from '../@types/graphql'
import { GetStaticProps } from 'next'
import { MissionList } from '../components/MissionList/index'

export interface MissionPageProps {
  missions: ILaunch[]
  loading: boolean
  error: string
}

export const getStaticProps: GetStaticProps = async context => {
  try {
    const { loading, error = null, data } = await spacexService().GET_LAUNCHES({
      limit: 10
    })

    return {
      props: {
        loading,
        error,
        missions: data.launchesPast
      },
      revalidate: 24 * 60 * 60
    }
  } catch (error) {
    return {
      props: {
        loading: false,
        error: error.toString(),
        mission: []
      },
      revalidate: 24 * 60 * 60
    }
  }
}
const MissionPage: React.FC<MissionPageProps> = (props: MissionPageProps) => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        {props.error ? (
          'Error: ' + props.error
        ) : (
          <MissionList missions={props.missions}></MissionList>
        )}
      </div>
    </section>
  )
}

export default MissionPage
