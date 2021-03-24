import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_LAUNCH_DETAIL, GET_LAUNCHES, GET_MISSIONS, GET_COUNTRIES } from './apollo-queries'

interface Dic {
  [key: string]: string
}

const clientCountries = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache()
})

const clientSpaceX = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
})

const spacexService = () => ({
  GET_LAUNCHES: (variables?: Dic) =>
    clientSpaceX.query({
      query: GET_LAUNCHES,
      variables: variables
    })
})
export { clientCountries, clientSpaceX, spacexService }
