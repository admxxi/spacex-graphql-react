import React from 'react'
import { Launch as ILaunch } from '../../@types/graphql'

interface MissionProps {
  launch: ILaunch
}

const Mission = ({ launch }: MissionProps) => {
  console.log(launch)
  const flickerImages = launch.links?.flickr_images
    ? launch.links?.flickr_images
    : []

  return (
    <div className="card d-inline-block">
      {flickerImages.length && (
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={flickerImages[0]}
              alt="Placeholder image"
              width="100%"
              height="auto"
            />
          </figure>
        </div>
      )}
      <div className="card-content">
        {launch.links?.mission_patch && (
          <div className="media">
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
              <p className="title is-4">Patch</p>
            </div>
          </div>
        )}
        <div className="content">
          {launch.id}
          {launch.details}
          {launch.links?.video_link && (
            <a href={launch.links?.video_link}>Youtube video</a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Mission
