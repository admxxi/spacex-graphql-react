import { gql } from '@apollo/client'

export const GET_COUNTRIES = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`

export const GET_LAUNCHES = gql`
  query($limit: Int!) {
    launchesPast(limit: $limit) {
      id
      mission_name
      launch_date_utc
      details
    }
  }
`

export const GET_LAUNCH_DETAIL = gql`
  query($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      links {
        article_link
        video_link
        flickr_images
        mission_patch
      }
      ships {
        name
      }
      launch_date_utc
      details
    }
  }
`

export const GET_MISSIONS = gql`
  {
    missions(find: { name: $missions }) {
      name
    }
  }
`

export const GET_LAUNCH_DATE_BY_MISSION = gql`
  query($mission_id: string!) {
    launches(find: { mission_id: $mission_id }) {
      launch_date_utc
    }
  }
`

export const GET_LAUNCH_DETAILS_BY_MISSION = gql`
  query($mission_id: ID!) {
    launches(find: { mission_id: $mission_id }) {
      ships {
        id
      }
      mission_id
      links {
        flickr_images
        video_link
        wikipedia
      }
      launch_date_utc
    }
  }
`

export const GET_MISSIONS_RESULT = gql`
  query($limit: Int!) {
    missionsResult(limit: $limit) {
      data {
        id
      }
    }
  }
`

export const GET_MISSION_DETAIL = gql`
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
