import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { clientSpaceX } from '../../apollo-client'
import { GET_LAUNCHES, GET_LAUNCH_DETAIL } from '../../apollo-queries'
import { Launch } from '../../types/graphql'
import CardList from '../../styles/launches'
import { ParsedUrlQuery } from 'querystring'
import { useRouter } from 'next/router'
import Spinner from '../../components/Spinner'

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: { launchesPast }
  } = await clientSpaceX.query({
    query: GET_LAUNCHES
  })

  const paths = launchesPast.map((launch: Launch) => {
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
  } = await clientSpaceX.query({ query: GET_LAUNCH_DETAIL, variables: { id: params.slug } })

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

const Mission: React.FunctionComponent<Props> = ({ launch, loading, error, theme }) => {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <Spinner theme={theme}></Spinner>
  }

  return (
    <CardList>
      {loading ? 'loading' : 'loaded'}
      {launch ? (
        <div className="container">
          <div key={launch.id} className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">
                    {launch.id}
                    {launch.details}
                    {launch.links?.video_link && launch.links.video_link}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Mission not found</p>
      )}
    </CardList>
  )
}

export default Mission
