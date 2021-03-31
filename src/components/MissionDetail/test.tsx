import React from 'react'
import { render } from '@testing-library/react'
import { MissionDetail } from './index'
import { Launch as Ilaunch } from '../../@types/graphql'

const MockLaunch: Ilaunch = {
  __typename: 'Launch',
  id: '9999999',
  is_tentative: false,
  upcoming: false,
  mission_name: 'Dummy Mission',
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

it('renders correctly', () => {
  const { container } = render(<MissionDetail launch={MockLaunch} />)
  expect(container.firstChild).toMatchSnapshot()
})
