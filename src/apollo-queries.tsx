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
  query($limit: Int!) {
    launchesPast(limit: $limit) {
      id
      is_tentative
      upcoming
      mission_name
      links {
        article_link
        video_link
        flickr_images
        mission_patch
      }
      launch_date_utc
      details
    }
  }
`

const GET_LAUNCH_DETAIL = gql`
  query($id: ID!) {
    launch(id: $id) {
      id
      is_tentative
      upcoming
      mission_name
      links {
        article_link
        video_link
        flickr_images
        mission_patch
      }
      launch_date_utc
      details
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

const GET_MISSION_DETAIL = gql`
  query($id: ID!) {
    missions(id: $id) {
      wikipedia
      website
      twitter
      name
      manufacturers
      id
      description
    }
  }
`
export {
  GET_LAUNCH_DETAIL,
  GET_MISSION_DETAIL,
  GET_LAUNCHES,
  GET_MISSIONS,
  GET_COUNTRIES
}
