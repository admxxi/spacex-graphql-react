import React from 'react'
import { MissionList } from './index'
import { render, screen } from '@testing-library/react'
import { Launch as Ilaunch } from '../../@types/graphql'

const MockMissions: Ilaunch[] = [
  {
    id: '1',
    is_tentative: false,
    upcoming: false,
    mission_name: 'Dummy Mission 1',
    links: {
      __typename: 'LaunchLinks',
      article_link: 'https://dummy.article.com/',
      video_link: 'https://dummy.video.com/',
      flickr_images: [
        'https://live.staticflickr.com/65535/50618376646_8f52c31fc4_o.jpg'
      ],
      mission_patch: 'https://i.imgur.com/t5R4BAQ.png'
    },
    launch_date_utc: '2020-11-16T00:27:00.000Z',
    details: 'dummy details'
  },
  {
    id: '2',
    is_tentative: false,
    upcoming: false,
    mission_name: 'Dummy Mission 2',
    links: {
      __typename: 'LaunchLinks',
      article_link: 'https://dummy.article.com/',
      video_link: 'https://dummy.video.com/',
      flickr_images: [
        'https://live.staticflickr.com/65535/50618376646_8f52c31fc4_o.jpg'
      ],
      mission_patch: 'https://i.imgur.com/t5R4BAQ.png'
    },
    launch_date_utc: '2020-11-16T00:27:00.000Z',
    details: 'dummy details'
  }
]

it('renders correctly', () => {
  const { container } = render(<MissionList missions={MockMissions} />)
  expect(container.firstChild).toMatchSnapshot()
})

it('renders number of missions correctly', async () => {
  const { debug } = render(<MissionList missions={MockMissions} />)
  const myElement = await screen.findAllByText(/Dummy Mission/i)
  expect(myElement).toHaveLength(2)
})
