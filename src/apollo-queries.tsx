import { gql } from '@apollo/client'

const GET_COUNTRIES = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`

const GET_LAUNCHES = gql`
  {
    launchesPast(limit: 10) {
      name: mission_name
      id
    }
  }
`

const GET_MISSIONS = gql`
  {
    missions(find: { name: $missions }) {
      name
    }
  }
`

const GET_LAUNCH_DETAIL = gql`
  query($id: ID!) {
    launch(id: $id) {
      id
      details
      links {
        article_link
        video_link
        wikipedia
      }
    }
  }
`

export { GET_LAUNCH_DETAIL, GET_LAUNCHES, GET_MISSIONS, GET_COUNTRIES }
