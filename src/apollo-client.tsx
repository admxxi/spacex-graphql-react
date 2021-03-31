import { ApolloClient, InMemoryCache } from '@apollo/client'
import {
  GET_LAUNCH_DETAIL,
  GET_LAUNCHES,
  GET_MISSIONS_RESULT,
  GET_LAUNCH_DATE_BY_MISSION
} from './apollo-queries'


interface Dic {
  [key: string]: number | string
}

const clientSpaceX = new ApolloClient({
  uri: process.env.SPACEX_GRAPHXXQL_ENDPOINT,
  cache: new InMemoryCache()
})

const spacexService = () => ({
  GET_LAUNCHES: (variables?: Dic) =>
    clientSpaceX.query({
      query: GET_LAUNCHES,
      variables: { limit: 10, ...variables }
    }),

  GET_LAUNCHES_DETAIL: (variables?: Dic) =>
    clientSpaceX.query({
      query: GET_LAUNCH_DETAIL,
      variables: variables
    }),

  GET_MISSIONS_RESULT: (variables?: Dic) =>
    clientSpaceX.query({
      query: GET_MISSIONS_RESULT,
      variables: { limit: 10, ...variables }
    }),

  GET_LAUNCH_DATE_BY_MISSION: (variables?: Dic) => {
    return clientSpaceX.query({
      query: GET_LAUNCH_DATE_BY_MISSION,
      variables: variables
    })
  }
})
export { spacexService }
