import React from 'react'
import { render, screen } from '@testing-library/react'
import { Mission } from './index'
import { Launch as Ilaunch } from '../../@types/graphql'

const MockLaunch: Ilaunch = {
  id: '107',
  is_tentative: false,
  upcoming: false,
  mission_name: 'Crew-1',
  links: {
    __typename: 'LaunchLinks',
    article_link:
      'https://spaceflightnow.com/2020/11/16/astronauts-ride-spacex-crew-capsule-in-landmark-launch-for-commercial-spaceflight/',
    video_link: 'https://youtu.be/bnChQbxLkkI',
    flickr_images: [
      'https://live.staticflickr.com/65535/50618376646_8f52c31fc4_o.jpg',
      'https://live.staticflickr.com/65535/50618376731_43ddaab1b8_o.jpg',
      'https://live.staticflickr.com/65535/50618376671_ba4e60af7c_o.jpg',
      'https://live.staticflickr.com/65535/50618376351_ecfdee4ab2_o.jpg',
      'https://live.staticflickr.com/65535/50618727917_01e579c4d9_o.jpg',
      'https://live.staticflickr.com/65535/50618355216_2872d1fe98_o.jpg',
      'https://live.staticflickr.com/65535/50618354801_ff3e722884_o.jpg',
      'https://live.staticflickr.com/65535/50618463487_41642939a4_o.jpg',
      'https://live.staticflickr.com/65535/50617619613_5630422345_o.jpg',
      'https://live.staticflickr.com/65535/50617619668_d680d7319c_o.jpg',
      'https://live.staticflickr.com/65535/50617625523_a7484e0abf_o.jpg',
      'https://live.staticflickr.com/65535/50618469202_fa86f88ab3_o.jpg',
      'https://live.staticflickr.com/65535/50617625183_8554412cee_o.jpg',
      'https://live.staticflickr.com/65535/50618470472_fb8e6507d7_o.jpg',
      'https://live.staticflickr.com/65535/50617626838_c0c71de1f7_o.jpg',
      'https://live.staticflickr.com/65535/50617626738_aa3997aaea_o.jpg',
      'https://live.staticflickr.com/65535/50617626408_fb0bba0f89_o.jpg'
    ],
    mission_patch: 'https://i.imgur.com/t5R4BAQ.png'
  },
  launch_date_utc: '2020-11-16T00:27:00.000Z',
  details:
    "SpaceX will launch the first operational mission of its Crew Dragon vehicle as part of NASA's Commercial Crew Transportation Capability Program (CCtCap), carrying 3 NASA astronauts and 1 JAXA astronaut to the International Space Station. This mission will be the second crewed flight to launch from the United States since the end of the Space Shuttle program in 2011."
}

it('renders correctly', () => {
  const { container } = render(<Mission mission={MockLaunch} />)
  expect(container.firstChild).toMatchSnapshot()
})
