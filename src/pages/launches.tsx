import React from 'react'
import Link from 'next/link'
import { mySlugify } from '../helpers'
import { spacexService } from '../apollo-client'
import { Mission } from '../types/graphql'
import { GetStaticProps } from 'next'
import CardList from '../styles/launches'

export interface LaunchProps {
  launchesPast: Mission[]
}

export const getStaticProps: GetStaticProps = async context => {
  const { loading, error = null, data } = await spacexService().GET_LAUNCHES()
  const launchesPast: Mission[] = data.launchesPast
  return {
    props: {
      loading,
      error,
      launchesPast: launchesPast
    },
    revalidate: 24 * 60 * 60
  }
}
const LaunchesPage: React.FC<LaunchProps> = (props: LaunchProps) => {
  return (
    <>
      <CardList>
        <div className="container">
          {props.launchesPast &&
            props.launchesPast.map((mission: Mission) => (
              <div key={mission.name} className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">
                        {mission.name}
                        {mission.id}
                      </p>
                      <Link
                        href={{
                          pathname: '/mission/[slug]',
                          query: { slug: `${mySlugify(String(mission.id), true)}` }
                        }}
                      >
                        <a>{mission.name}</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </CardList>
    </>
  )
}

export default LaunchesPage
