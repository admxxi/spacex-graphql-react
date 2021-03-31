import React from 'react'
import { spacexService } from '../apollo-client'
import { Mission as IMission, Launch as ILaunch } from '../@types/graphql'
import { GetStaticProps } from 'next'
import { MissionList } from '../components/MissionList/index'
import Error from 'next/error'

export interface MissionPageProps {
  missions: ILaunch[]
  loading: boolean
  error: string | undefined
}

export const getStaticProps: GetStaticProps = async context => {
  const res = await spacexService().GET_LAUNCHES({
    limit: 10
  })

  if (res === undefined || res.error) {
    return {
      props: {
        loading: false,
        error: '500',
        missions: [] as ILaunch
      },
      revalidate: 24 * 60 * 60
    }
  }

  const { loading, error = null, data } = res

  return {
    props: {
      loading,
      error,
      missions: data.launchesPast
    },
    revalidate: 24 * 60 * 60
  }
}
const MissionPage: React.FC<MissionPageProps> = (props: MissionPageProps) => {
  return props.error ? (
    <Error statusCode={500} />
  ) : (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <MissionList missions={props.missions}></MissionList>
      </div>
    </section>
  )
}

export default MissionPage
