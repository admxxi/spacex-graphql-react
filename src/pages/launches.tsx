import React from 'react'
import { spacexService } from '../apollo-client'
import { Launch as ILaunch, Mission as IMission } from '../@types/graphql'
import { GetStaticProps } from 'next'
import LaunchList from '../components/LaunchList'

export interface LaunchProps {
  launches: ILaunch[]
  loading: boolean
  error: string
}

export const getStaticProps: GetStaticProps = async context => {
  const { loading, error = null, data } = await spacexService().GET_LAUNCHES({
    limit: 10
  })
  const launches: ILaunch[] = data.launchesPast
  return {
    props: {
      loading,
      error,
      launches: launches
    },
    revalidate: 24 * 60 * 60
  }
}
const LaunchesPage: React.FC<LaunchProps> = (props: LaunchProps) => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <LaunchList launches={props.launches}></LaunchList>
      </div>
    </section>
  )
}

export default LaunchesPage
