import React from 'react'
import Link from 'next/link'
import { mySlugify } from '../helpers'
import { gql } from '@apollo/client'
import client from '../apollo-client'
import { Country } from '../types/index'
import { GetStaticProps } from 'next'
import CardList from '../styles/launches'

export interface LaunchProps {
  countries: Country[]
}

export const getStaticProps: GetStaticProps = async context => {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `
  })

  return {
    props: {
      countries: data.countries.slice(0, 4)
    }
  }
}

/*
<div key={country.code} className={'card'}>
          <h3>{country.name}</h3>
          <p>
            {country.code} - {country.emoji}
          </p>
        </div>
        */

const Launches: React.FunctionComponent = (props: LaunchProps) => {
  return (
    <>
      <CardList>
        <div className="container">
          {props.countries.map((country: Country) => (
            <div key={country.code} className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">{country.emoji}</figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">{country.name}</p>
                    <p className="subtitle is-6">{country.code}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardList>

      <Link
        href={{
          pathname: '/mission/[slug]',
          query: { slug: `${mySlugify('bla-asda-???~~~~bla', true)}` }
        }}
      >
        <a>blabla</a>
      </Link>
    </>
  )
}

export default Launches
