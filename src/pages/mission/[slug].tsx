import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { mySlugify } from '../../helpers'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: '' } }],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params
  console.log(context.params)

  return {
    props: {
      slug: slug
    }
  }
}

interface Props {
  slug: string
}

const Mission: React.FunctionComponent<Props> = ({ slug }) => {
  const encodedSlug = mySlugify(String(slug))
  return <>{encodedSlug}</>
}

export default Mission
