import React from 'react'
import styled from 'styled-components'

interface SpinnerProps {
  extraStyles?: string
}

const Style = styled.section`
  img {
    background: black;
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    transform: scale(1);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
`

const Spinner = ({ extraStyles }: SpinnerProps): JSX.Element => {
  return (
    <Style>
      <section className={`hero is-fullheight ${extraStyles}`}>
        <div className="hero-body has-text-centered">
          <div className="container">
            <img
              className="img"
              src="/spacex-clipart2.png"
              width="64"
              height="64"
            />
          </div>
        </div>
      </section>
    </Style>
  )
}

export default Spinner
