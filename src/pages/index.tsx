import React from 'react'
import { spacexService } from '../apollo-client'
import { Mission as IMission, Launch as ILaunch } from '../@types/graphql'
import { GetStaticProps } from 'next'
import { MissionList } from '../components/MissionList/index'
import Error from 'next/error'

type IError = {
  code: number
  message: string
}

export interface MissionPageProps {
  missions: ILaunch[]
  loading: boolean
  error: IError
}

export const getStaticProps: GetStaticProps = async context => {
  const res = await spacexService().GET_LAUNCHES({
    limit: 10
  })

  if (!res || res.error) {
    return {
      props: {
        error: {
          code: 500,
          message:
            res && res.error ? res.error.message : 'Internal Server Error'
        }
      }
    }
  }

  const { loading, error, data } = res

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
  if (props.error) {
    return (
      <Error title={props.error.message} statusCode={props.error.code}></Error>
    )
  }

  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <MissionList missions={props.missions}></MissionList>
      </div>
    </section>
  )
}

export default MissionPage
