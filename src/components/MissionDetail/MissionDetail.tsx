import React from 'react'
import { Launch as ILaunch } from '../../@types/graphql'
import { Button, ButtonType } from '../Button'
import styled from 'styled-components'

interface MissionDetailProps {
  launch: ILaunch
}

interface SeeMoreType {
  label: string
  link?: string
  icon: string
}

const MissionDetailStyled = styled.div`
  .card-image {
    overflow: hidden;
  }

  .card-image img {
    object-fit: 'cover';
    transition: transform 0.3s ease;
  }

  &:hover .card-image img {
    transform: scale(1.2);
  }
`

const MissionDetail = ({ launch }: MissionDetailProps): JSX.Element => {
  console.log(launch)
  const flickerImages = launch.links?.flickr_images
    ? launch.links?.flickr_images
    : []

  const SeeMoreData: SeeMoreType[] = []

  if (launch.links?.video_link) {
    SeeMoreData.push({
      label: 'Watch Video',
      link: launch.links?.video_link,
      icon: 'youtube'
    })
  }

  if (launch.links?.article_link) {
    SeeMoreData.push({
      label: 'See More',
      link: launch.links?.article_link,
      icon: 'wordpress'
    })
  }

  return (
    <MissionDetailStyled className="card d-inline-block">
      {flickerImages.length ? (
        <div className="card-image">
          <figure className="image is-5by3">
            <img
              src={String(flickerImages[0])}
              alt="Placeholder image"
              width="100%"
              height="auto"
            />
          </figure>
        </div>
      ) : (
        ''
      )}
      <div className="card-content">
        {launch.links?.mission_patch ? (
          <div className="media is-align-items-center">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src={launch.links?.mission_patch}
                  alt="Placeholder image"
                  width="100%"
                  height="auto"
                />
              </figure>
            </div>

            <div className="media-content">
              <p className="ma-0 title is-4">{launch.mission_name}</p>
            </div>
          </div>
        ) : (
          <p className="ma-0 title is-4">{launch.mission_name}</p>
        )}
        <div className="content">
          <p>{launch.details}</p>
        </div>
        <p className="buttons">
          {SeeMoreData.map((btn: SeeMoreType) => (
            <Button
              key={btn.label}
              type={ButtonType.info}
              text={btn.label}
              icon={btn.icon}
              onclick={() => window.open(btn.link, '_blank')}
              disabled={false}
            />
          ))}
        </p>
      </div>
    </MissionDetailStyled>
  )
}

export default MissionDetail
