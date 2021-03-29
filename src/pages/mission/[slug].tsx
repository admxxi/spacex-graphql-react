import React from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths } from 'next'
import { spacexService } from '../../apollo-client'
import { Launch } from '../../@types/graphql'
import { ParsedUrlQuery } from 'querystring'
import Mission from '../../components/Mission'
import Spinner from '../../components/Spinner'

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: { launchesPast: launches }
  } = await spacexService().GET_LAUNCHES()

  const paths = launches.map((launch: Launch) => {
    if (launch) {
      return {
        params: {
          slug: launch.id
        }
      }
    }
  })
  return {
    paths,
    fallback: true
  }
}

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async context => {
  const params = context.params as Params

  if (!params.slug) {
    return {
      props: { error: 'invalid param' }
    }
  }

  const {
    loading,
    error = null,
    data: { launch }
  } = await spacexService().GET_LAUNCHES_DETAIL({
    id: params.slug
  })

  return {
    props: {
      launch,
      loading,
      error
    },
    revalidate: 60 * 60 * 24
  }
}

interface Props {
  launch: Launch
  loading: boolean
  error: string
}

const MissionPage: React.FunctionComponent<Props> = ({ launch, loading }) => {
  const router = useRouter()
  console.log(router)
  if (loading || router.isFallback) {
    return <Spinner></Spinner>
  }

  return (
    <div className="container">
      <div className="columns is-centered is-mobile">
        <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop">
          {launch ? (
            <Mission launch={launch}></Mission>
          ) : (
            <p>Mission not found</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default MissionPage
